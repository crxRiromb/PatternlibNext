import * as fs from "fs";
import * as path from "path";

const cemPath = path.resolve(
  process.cwd(),
  "../../packages/lit/custom-elements.json",
);
const outputSrcDir = path.resolve(process.cwd(), "./src");

function toCamelCase(str: string): string {
  // Guard to handle potential undefined input
  if (!str) return "";
  return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

function toPascalCase(str: string): string {
  const camel = toCamelCase(str);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

function generateComponentWrapper(componentDef: any): string {
  const { tagName } = componentDef;
  const angularComponentName = `${toPascalCase(tagName)}Angular`;
  const litComponentType = toPascalCase(tagName);

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
    const name = m.name || m.fieldName;
    const lt = getLowerType(m.type?.text);
    // simple types
    const isSimple = lt === "string" || lt === "boolean";
    // If CEM has "attribute" set AND it is simple, it is treated as an attribute.
    // Everything else is considered a complex property.
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
        else if (trimmed.length > 0) defaultCode = trimmed; // falls schon TS-Literal
      }

      // FFor arrays, [] is practical; for objects {}
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

  // --- Event listeners with cleanup ---
  const eventListeners = (componentDef.events || [])
    .map((event: any) => {
      const eventName = toCamelCase(event.name);
      return `
    nativeElement.addEventListener("${event.name}", (event: Event) => {
      this.${eventName}.emit(event as CustomEvent);
    }, { signal: this._listenerCtl.signal });`;
    })
    .join("");

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

  const allBindings = [templateBindingsSimple, templateBindingsComplex]
    .filter(Boolean)
    .join("\n      ");

  // --- Assemble ---
  return `
// THIS FILE IS AUTO-GENERATED BY THE WRAPPER-GENERATOR SCRIPT. DO NOT EDIT.

import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  CUSTOM_ELEMENTS_SCHEMA,
  booleanAttribute,
} from "@angular/core";
import type { ${litComponentType} } from "@liebherr2/plnext";

@Component({
  selector: "${tagName}-angular",
  standalone: true,
  template: \`
    <${tagName}
      #elementRef
      ${allBindings}
    >
      <ng-content></ng-content>
    </${tagName}>
  \`,
  styles: [":host { display: inline-block; }"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ${angularComponentName} implements AfterViewInit, OnDestroy {
  @ViewChild("elementRef") elementRef!: ElementRef<${litComponentType}>;
  private _listenerCtl = new AbortController();

  // --- Inputs (simple attributes) ---
  ${inputsSimple}

  // --- Inputs (complex properties) ---
  ${inputsComplex}

  // --- Outputs ---
  ${outputs}

  // --- Lifecycle hooks ---
  ngAfterViewInit() {
    const nativeElement = this.elementRef.nativeElement;
    ${eventListeners}
  }

  ngOnDestroy() {
    this._listenerCtl.abort();
  }
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

  const generatedFilePaths = [];

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
