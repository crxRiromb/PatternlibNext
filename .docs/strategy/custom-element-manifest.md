# Custom Elements Manifest

The custom-elements.json file is a standardized, machine-readable description of web component's public API.
It provides information for the tooling ecosystem and make the components machine-readable.

## Advantages

- Tooling Interoperability: It provides a single, standard format for tools like Storybook, VS Code to understand the component's API.

- Automated Documentation: Enables tools like Storybook to automatically generate Controls, Args tables, and API documentation directly from your JSDoc comments.

- Enhanced IDE Experience: Powers features like autocompletion for attributes in HTML, type-checking for properties, and hover-info that displays your JSDoc descriptions directly in the editor.

## The Workflow

1. Component Source Code (with JSDoc) 
2. Analyzer Tool (@custom-elements-manifest/analyzer)
3. custom-elements.json
4. Use in Tooling Ecosystem (Storybook, IDEs, etc.)
