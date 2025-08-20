# Angular Template

## Test App Dev Mode + Packages tgz

This configuration allows you to test the application in development mode while using the local packages from the `tgz` files.

```bash
remove node_modules + package-lock.json
npm run prepare:dev:tgz
npm run dev:tgz
```

## Archiv (remove later)

/_ Alias _/
"baseUrl": "./",
"paths": {
"@liebherr2/plnext": ["../../packages/lit/dist"],
"@liebherr2/plnext/_": ["../../packages/lit/dist/_"],
"@liebherr2/angularnext": ["../../packages/angular-wrapper/dist"],
"@liebherr2/angularnext/_": ["../../packages/angular-wrapper/dist/_"]
}
