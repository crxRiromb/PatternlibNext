# Mono Repo Approach

This project uses a monorepo structure to manage the 
- Lit web component library, 
- the Angular wrapper library, 
- the React wrapper library, 
- and any related applications in a single repository.

## Centralized Dependency Management

- The Lit Project as well as all Wrapper Projects manage dependencies in the root package.json, e.g. TypeScript, ESLint, etc
- This eliminates version conflicts between projects and ensures consistency.
- Updating a dependency is done in one place, applying the change to all projects simultaneously.

## Specific Dependency Management for Wrappers

- Only specific dependencies for each project are defined in their respective package.json files, keeping the root package.json clean and focused on shared dependencies.

## Dependency Management for Template Apps

- All Template Apps manage their own dependencies in their respective package.json files.
- This allows each Template App to be self-contained and reduces the risk of breaking changes affecting other projects.
