import * as fs from "fs";
import * as path from "path";

const cemPath = path.resolve(
  process.cwd(),
  "../../packages/lit/custom-elements.json",
);
const manifestPath = path.resolve(
  process.cwd(),
  "../../packages/lit/wrapper-manifest.json",
);
const outputSrcDir = path.resolve(process.cwd(), "./src");

// ------------------------------
// Helpers
// ------------------------------
function toCamelCase(str: string): string {
  if (!str) return "";
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function litSideEffectImportPath(tagName: string): string {
  // "pl-button" -> "@liebherr2/plnext/components/button/pl-button.js"
  const folder = tagName.replace(/^pl-/, "");
  return `@liebherr2/plnext/components/${folder}/${tagName}.js`;
}

type DisplayMode = "block" | "inline" | "inline-block";
type WrapperManifest = { displayMode?: Record<string, DisplayMode> };

function readManifest(): WrapperManifest {
  if (!fs.existsSync(manifestPath)) return {};
  try {
    return JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  } catch {
    console.warn(`⚠️ Could not parse wrapper-manifest.json at ${manifestPath}`);
    return {};
  }
}
const manifest: WrapperManifest = readManifest();

function getDisplayMode(tagName: string): DisplayMode {
  return manifest.displayMode?.[tagName] ?? "block"; // konservativer Default
}

function styleForDisplayMode(tagName: string): string {
  const mode = getDisplayMode(tagName);
  if (mode === "inline-block") {
    // Wichtig: line-height: 1 verhindert zusätzlichen Vertikalraum
    return ":host { display: inline-block; line-height: 1; }";
  }
  return `:host { display: ${mode}; }`;
}

// ------------------------------
// Generator
// ------------------------------
function generateComponentWrapper(componentDef: any): string {
  const { tagName } = componentDef;
  const angularComponentName = `${toPascalCase(tagName)}Angular`;
  const sideEffectImport = litSideEffectImportPath(tagName);

  // --- Helpers ---
  const getLowerType = (t?: string) =>
    (t || "string").replace(/'/g, '"').toLowerCase();
  const stripQuotes = (s: any) =>
    typeof s === "string" ? s.replace(/^["']|["']$/g, "") : s;

  // --- Inputs (simple: string/boolean via attributes) ---
  const simpleAttrs = (componentDef.attributes || []) as Array<any>;

  const inputsSimple = simpleAttrs
    .map((attr) => {
      const propName = toCamelCase(attr.name || attr.fieldName);
      const lt = getLowerType(attr.type?.text);
      const isBoolean = lt === "boolean";
      const typeText = isBoolean ? "boolean" : "string";

      const cleanedDefault = stripQuotes(
        attr.defaultValue ?? attr.default ?? null,
      );
      if (isBoolean) {
        return `
  /** Maps to the "${attr.name}" boolean attribute (present if true, absent if false). */
  @Input({ transform: booleanAttribute }) ${propName}: boolean = false;`;
      }

      const defaultForCode =
        cleanedDefault == null ? `""` : `"${String(cleanedDefault)}"`;

      return `
  protected _${propName}: ${typeText} = ${defaultForCode};
  /** Maps to the "${attr.name}" string attribute. */
  @Input()
  set ${propName}(value: ${typeText} | null | undefined) {
    this._${propName} = (value ?? ${defaultForCode}) as ${typeText};
  }
  get ${propName}(): ${typeText} {
    return this._${propName};
  }`;
    })
    .join("\n");

  // --- Complex properties (from members: kind:"field", public, not static) ---
  const memberFields = ((componentDef.members || []) as Array<any>).filter(
    (m) => m && m.kind === "field" && !m.static,
  );

  // Names of simple attributes, to avoid duplicates
  const simpleNames = new Set(
    simpleAttrs.map((a: any) => toCamelCase(a.name || a.fieldName)),
  );

  const complexProps = memberFields.filter((m) => {
    const lt = getLowerType(m.type?.text);
    const isSimple = lt === "string" || lt === "boolean";
    // Wenn CEM "attribute" setzt UND simpel → Attribut; sonst komplexe Property
    return !isSimple || !m.attribute;
  });

  const inputsComplex = complexProps
    .filter((m) => !simpleNames.has(toCamelCase(m.name || m.fieldName))) // no duplicates
    .map((m) => {
      const name = toCamelCase(m.name || m.fieldName);
      const tsType = (m.type?.text || "any").replace(/'/g, '"');

      // derive default value: "[]", "{}", otherwise null
      const rawDef = stripQuotes(m.default ?? m.defaultValue ?? null);
      let defaultCode = "null";
      if (typeof rawDef === "string") {
        const trimmed = rawDef.trim();
        if (trimmed === "[]" || trimmed.startsWith("[")) defaultCode = "[]";
        else if (trimmed === "{}" || trimmed.startsWith("{"))
          defaultCode = "{}";
        else if (trimmed.length > 0) defaultCode = trimmed; // already a TS literal?
      }
      // Heuristik
      if (defaultCode === "null") {
        const lt = getLowerType(m.type?.text);
        if (/\[\]$/.test(m.type?.text || "")) defaultCode = "[]";
        else if (lt.includes("record") || lt.includes("{")) defaultCode = "{}";
      }

      return `
  /** Complex property "${m.name}" (set as DOM property, not attribute). */
  @Input() ${name}: ${tsType} = ${defaultCode};`;
    })
    .join("\n");

  // --- Outputs ---
  const outputs = (componentDef.events || [])
    .map((event: any) => {
      const eventName = toCamelCase(event.name);
      return `
  /** Emits when the "${event.name}" event is fired by the web component. */
  @Output() ${eventName} = new EventEmitter<CustomEvent<any>>();`;
    })
    .join("\n");

  // --- Template bindings ---
  // simple (HTML-konform): booleans Präsenz/Abwesenheit, strings als Attributwert
  const templateBindingsSimple = simpleAttrs
    .map((attr: any) => {
      const propName = toCamelCase(attr.name || attr.fieldName);
      const lt = getLowerType(attr.type?.text);
      const isBoolean = lt === "boolean";
      return isBoolean
        ? `[attr.${attr.name}]="${propName} ? '' : null"`
        : `[attr.${attr.name}]="_${propName}"`;
    })
    .join("\n      ");

  // complex: echte Property-Bindings auf dem Element
  const templateBindingsComplex = complexProps
    .filter((m) => !simpleNames.has(toCamelCase(m.name || m.fieldName)))
    .map((m) => {
      const name = toCamelCase(m.name || m.fieldName);
      return `[${m.name}]="${name}"`;
    })
    .join("\n      ");

  // Events direkt im Template binden; $any($event) löst Typ-Konflikt (Event vs CustomEvent)
  const templateEventBindings = (componentDef.events || [])
    .map(
      (event: any) =>
        `(${event.name})="${toCamelCase(event.name)}.emit($any($event))"`,
    )
    .join("\n      ");

  const allBindings = [
    templateBindingsSimple,
    templateBindingsComplex,
    templateEventBindings,
  ]
    .filter(Boolean)
    .join("\n      ");

  const hostStyle = styleForDisplayMode(tagName);

  // --- Assemble ---
  return `
// THIS FILE IS AUTO-GENERATED BY THE WRAPPER-GENERATOR SCRIPT. DO NOT EDIT.

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  CUSTOM_ELEMENTS_SCHEMA,
  booleanAttribute,
} from "@angular/core";

// Side-effect import: registers this web component once at runtime
import "${sideEffectImport}";

@Component({
  selector: "${tagName}-angular",
  standalone: true,
  template: \`
    <${tagName}
      ${allBindings}
    >
      <ng-content></ng-content>
    </${tagName}>
  \`,
  styles: ["${hostStyle}"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ${angularComponentName} {
  // --- Inputs (simple attributes) ---
  ${inputsSimple}

  // --- Inputs (complex properties) ---
  ${inputsComplex}

  // --- Outputs ---
  ${outputs}
}
`;
}

function main() {
  const componentsToGenerate = process.argv.slice(2);

  if (!fs.existsSync(cemPath)) {
    console.error(`❌ Error: custom-elements.json not found at ${cemPath}`);
    process.exit(1);
  }

  console.log("Reading custom-elements.json...");
  const cem = JSON.parse(fs.readFileSync(cemPath, "utf-8"));
  const allComponentDefs = cem.modules.flatMap((m: any) =>
    (m.declarations || []).filter((d: any) => d.customElement),
  );

  let targetComponentDefs = allComponentDefs;

  if (componentsToGenerate.length > 0) {
    console.log(
      `Generating wrappers for specified components: ${componentsToGenerate.join(", ")}`,
    );
    targetComponentDefs = allComponentDefs.filter((def: { tagName: string }) =>
      componentsToGenerate.includes(def.tagName),
    );
  } else {
    console.log(
      "No specific components listed, generating for all found components...",
    );
  }

  const generatedFilePaths: string[] = [];

  for (const componentDef of targetComponentDefs) {
    if (!componentDef.tagName) {
      console.warn(
        `⚠️ Skipping declaration "${componentDef.name}" because it has no tagName.`,
      );
      continue;
    }

    const componentCode = generateComponentWrapper(componentDef);
    const componentSubfolder = componentDef.tagName.replace("pl-", "");
    const finalOutputDir = path.join(outputSrcDir, componentSubfolder);
    const outputFilePath = path.join(
      finalOutputDir,
      `${componentSubfolder}.component.ts`,
    );

    fs.mkdirSync(finalOutputDir, { recursive: true });
    fs.writeFileSync(outputFilePath, componentCode.trim());
    console.log(
      `✅ Successfully generated wrapper for <${componentDef.tagName}> at ${outputFilePath}`,
    );
    generatedFilePaths.push(
      `./${componentSubfolder}/${componentSubfolder}.component.ts`,
    );
  }

  // --- Generate public-api.ts ---
  console.log("Generating public-api.ts...");
  const publicApiContent = generatedFilePaths
    .map((p) => `export * from '${p.replace(".ts", "")}';`)
    .join("\n");
  fs.writeFileSync(path.join(outputSrcDir, "public-api.ts"), publicApiContent);
  console.log("✅ Successfully generated public-api.ts");

  console.log("\n✨ Wrapper generation complete!");
}

main();
