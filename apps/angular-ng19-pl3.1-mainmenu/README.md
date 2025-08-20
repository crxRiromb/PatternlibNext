# Angular Template

## Build and Run

```bash
yalc link @liebherr2/plnext
yalc link @liebherr2/angularnext
npm install
npm run serve
```

    "@liebherr2/angularnext": "file:../../packages/angular-wrapper/liebherr2-angularnext-0.0.1.tgz",
    "@liebherr2/plnext": "file:../../packages/lit/liebherr2-plnext-0.0.1.tgz",

/_ Alias _/
"baseUrl": "./",
"paths": {
"@liebherr2/plnext": ["../../packages/lit/dist"],
"@liebherr2/plnext/_": ["../../packages/lit/dist/_"],
"@liebherr2/angularnext": ["../../packages/angular-wrapper/dist"],
"@liebherr2/angularnext/_": ["../../packages/angular-wrapper/dist/_"]
}
