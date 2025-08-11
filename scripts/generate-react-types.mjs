import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('custom-elements.json', 'utf-8'));
const components = manifest.modules.flatMap(module => module.declarations.filter(d => d.customElement));

let dtsContent = `
// THIS FILE IS AUTO-GENERATED. DO NOT EDIT.
declare global {
  namespace JSX {
    interface IntrinsicElements {
`;

components.forEach(component => {
  const tagName = component.tagName;

  // prevent 'undefined' tagName
  if (!tagName) {
    return;
  }

  const props = (component.attributes || [])
    .map(attr => {
      const type = attr.type?.text || 'string';
      const tsType = type === 'boolean' ? 'boolean' : 'string'; // Vereinfachung, kann erweitert werden
      const propName = attr.name;
      return `        '${propName}'?: ${tsType};`;
    })
    .join('\n');

  dtsContent += `
      '${tagName}': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
${props}
      }, HTMLElement>;
`;
});

dtsContent += `
    }
  }
}
`;

fs.writeFileSync('dist/custom-elements.d.ts', dtsContent);
console.log('✅ React type definitions generated in dist/custom-elements.d.ts');
