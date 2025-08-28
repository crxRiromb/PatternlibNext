# Liebherr2 Angular Wrapper Next (@liebherr2/angularnext)

## 1. Dev Mode with file watch

Hints:

- der src wird nicht gewatcht, da sonst eine Endlosschleife entsteht (da generate:wrappers den src ändert)
- Bei manuellen Änderungen im src muss der build manuell ausgeführt werden (npm run build)

```bash
npm run prepare:dev
npm run dev
```

## 2. ci Build (no file watch)

```bash
npm run prepare:ci
npm run build:ci
```

## 3. tgz Build tarball archive (for registry simulation)

- builds dist folder
- creates tgz file

```bash
npm run prepare:tgz
npm run build:tgz
```
