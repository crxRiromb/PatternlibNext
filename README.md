# Tooling Setup + Development Workflow

## Prerequisites

- Node.js (v22.14.0) and npm (v10.9.2)

## Repo Organization

- Single‑Repo, multi Projects
- Separation of concerns with packages (Libraries) and apps
- Dependency of projects are managed via Tarballs (npm pack) instead of Symlinks (npm link).
- For Storybook Vite alias for the Lit source (hot-reload) are used during development, while wrappers/apps continue to consume the packed artifacts.

## Development Workflow

### Lit Component Development + Storybook Review

- Terminal 1

```bash
# call from root folder
npm run prepare:lit:dev
npm run dev:lit
```

- Terminal 2

```bash
# call from root folder
npm run dev:storybook
```

### Angular App Development with static Lit Components (tgz, no HMR)

```bash
# call from root folder
npm run build:package:lit:tgz
npm run build:package:ng:tgz
npm run prepare:app:ng:tgz
npm run dev:app:ng:tgz
```

### React App Development with static Lit Components (tgz, no HMR)

```bash
# call from root folder
npm run build:package:lit:tgz
npm run build:package:react:tgz
npm run prepare:app:react:tgz
npm run dev:app:react:tgz
```
