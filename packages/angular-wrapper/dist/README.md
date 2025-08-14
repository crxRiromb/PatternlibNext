# Angular Wrapper for Liebherr2 Patternlib Next

## package.json

```json
  "types": "./dist/index.d.ts",
  "module": "./dist/fesm2022/liebherr2-angularnext.mjs",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/fesm2022/liebherr2-angularnext.mjs"
    }
  },
  "files": [
    "dist"
  ],
```

```javascript
(function () {
  const originalDefine = customElements.define;
  customElements.define = function (name, constructor, options) {
    if (name === "pl-button") {
      console.log(
        'Treffer! Jemand versucht "pl-button" zu registrieren. Pausiere...',
      );
      debugger; // Hält die Ausführung an dieser Stelle an
    }
    originalDefine.call(this, name, constructor, options);
  };
  console.log('Spion für "pl-button" ist jetzt aktiv.');
})();
```
