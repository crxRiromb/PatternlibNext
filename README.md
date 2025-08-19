# Tooling/Build Setup

## Prerequisites

- Node.js (v22.14.0) and npm (v10.9.2)

## Repo Organization

- Single‑Repo, multi Projects
- Separation of concerns with packages (Libraries) and apps
- Dependency of projects are managed via Tarballs (npm pack) instead of Symlinks (npm link).
- For Storybook Vite alias for the Lit source (hot-reload) are used during development, while wrappers/apps continue to consume the packed artifacts.

# Liebherr2 Patternlib Next

npm link @liebherr2/plnext
npm link @liebherr2/plnext @liebherr2/reactnext
npm link @liebherr2/plnext @liebherr2/angularnext

## Remove old 'npm link' references

npm unlink --global @liebherr2/angularnext
npm unlink --global @liebherr2/plnext
npm unlink --global @liebherr2/reactnext

npm unlink --no-save @liebherr2/plnext
npm unlink --no-save @liebherr2/reactnext
npm unlink --no-save @liebherr2/angularnext
