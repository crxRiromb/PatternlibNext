# Angular Wrapper for Liebherr2 Patternlib Next

## Single Build

```bash
yalc link @liebherr2/plnext
npm install
npm run build
```

## Watch Build + Publish via Yalc

```bash
yalc link @liebherr2/plnext
npm install
npm yalc:watch
```

## Commands archive

```bash
yalc publish

# symlinks
yalc link @liebherr2/plnext

# fügt Eintrag in package.json unter dependencies 
# für das Release sollte der Eintrag zu peerDependencies geändert werden
yalc add @liebherr2/plnext 
```
