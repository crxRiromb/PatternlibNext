# Yalc

Yalc ist ein Tool, das es ermöglicht, lokale Pakete zu verwalten und zu veröffentlichen, ähnlich wie npm link.
Jedoch mit einigen zusätzlichen Funktionen und einer einfacheren Handhabung. 
Es wird ein lokales Store für Packete verwendet.

## yalc Installation

```bash
npm install -g yalc
```

## Alte symlinks entfernen

```bash
npm unlink --no-save @liebherr2/plnext
npm unlink --no-save @liebherr2/angularnext
```

## yalc Packet in Story publishen
```bash
yalc publish # .yalc/@liebherr2/plnext
```

## yalc Packet updaten

```bash
# Änderungen vornehmen
npm run build
yalc publish --push
```

## yalc Packete anzeigen

```bash
yalc installations show
```

## yalc Packete verwenden (z.B. in wrappers/angular)

```bash
yalc add @liebherr2/plnext
npm install
```

