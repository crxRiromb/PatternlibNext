# Liebherr2 Patternlib Next (@liebherr2/patternlib-next)

There are three main ways to build and test the Angular Wrapper package:

## 1. Dev Mode with file watch

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
