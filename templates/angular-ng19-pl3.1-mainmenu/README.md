# Angular Template

## Build and Run

```bash
yalc link @liebherr2/plnext
yalc link @liebherr2/angularnext
npm install
npm run serve
``` 

## Command archive

```bash
yalc link @liebherr2/plnext
yalc link @liebherr2/angularnext

npx ng cache clean
```

## Integration tests (package.json)
"start": "ng serve --preserve-symlinks",

"@liebherr2/plnext": "0.0.1",
"@liebherr2/angularnext": "0.0.1",

"@liebherr2/plnext": "file:../../",
"@liebherr2/angularnext": "file:../../wrappers/angular/dist",

"@liebherr2/angularnext": "file:.yalc/@liebherr2/angularnext",
"@liebherr2/plnext": "file:.yalc/@liebherr2/plnext",
