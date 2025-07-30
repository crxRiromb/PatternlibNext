# Angular Wrapper for Liebherr2 Patternlib Next

## Build and Run

```bash
yalc add @liebherr2/plnext # erzeugt Fehler, sihe unten
npm install
npm run build
```

## Hinweis zu 'yalc add @liebherr2/plnext'

Nach 'yalc add @liebherr2/plnext' wird die Abhängigkeit in der package.json bei dependencies hinzugefügt und nicht in peerDependencies.

Richtig wäre (manuell ändern):
```json
  "peerDependencies": {
    "@angular/common": "^19.0.0",
    "@angular/core": "^19.0.0",
    "@liebherr2/plnext": "file:.yalc/@liebherr2/plnext"
  },
```
