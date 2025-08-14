# Liebherr2 Patternlib Next

## 1. First setup

1. Install PNPM globally (if not already installed)
```bash
npm install -g pnpm
```

2. Delete all `node_modules` folders and `package-lock.json` files

3. npm dependencies in root
```bash
npm install
```

4. other dependencies in all packages
```bash
pnpm install
```

## 2. Build of Lit Projekt

```bash
pnpm --filter @liebherr2/plnext run build
```

## 3. Build+Open Storybook

```bash
npm run storybook
```

## 4. Command Archive - pnpm

```bash
pnpm m ls
```
