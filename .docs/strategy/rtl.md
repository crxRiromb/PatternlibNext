# Right-to-Left (RTL) Support

## 1. Einleitung

- Grundlegendes Ziel ist es das Styling direktionsunabhängig zu gestalten mit 'CSS Logical Properties'.
- Anstatt in "links" und "rechts" zu arbeiten, jetzt "Anfang" (start) und "Ende" (end) verwenden.
- Der Browser wählt automatisch die korrekte Richtung, basierend auf dem dir-Attribut auf deinem <html>-Tag oder einem Elternelement gesetzt ist.
- Es wird zwischen inline und block Achsen unterscheiden
  - inline: 
    - Bezieht sich auf die Richtung, in der der Text fließt - horizontal.
  - block: 
    - Bezieht sich auf die Richtung, in der Blöcke untereinander liegen (also von oben nach unten).
- Wie wird es aktiviert?
  ```html
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <body>
      <my-lit-component></my-lit-component>
    </body>
    </html>
  ```
- Auf drei Bereiche achten:
  - Layout & Abstände (CSS): Der häufigste Anwendungsfall.
  - Grafiken & Icons (CSS/Assets): Alles, was eine visuelle Richtung hat.
  - Funktionalität (JavaScript): Wenn die Logik von der Richtung abhängt.

## 2. Layout & Abstände (CSS)
  ### Inline Axis
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | Purpose                       | Logical Property            | LTR Behavior             | RTL Behavior               |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | INLINE AXIS (Direction-sensitive, e.g., horizontal)                                                                 |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | Sizing                        | inline-size                 | width                    | width                      |
    | Margin Start                  | margin-inline-start         | margin-left              | margin-right               |
    | Margin End                    | margin-inline-end           | margin-right             | margin-left                |
    | Padding Start                 | padding-inline-start        | padding-left             | padding-right              |
    | Padding End                   | padding-inline-end          | padding-right            | padding-left               |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | Border Start                  | border-inline-start         | border-left              | border-right               |
    | Border End                    | border-inline-end           | border-right             | border-left                |
    | Border Top Start Radius       | border-start-start-radius   | border-top-left-radius   | border-top-right-radius    |
    | Border Top End Radius         | border-start-end-radius     | border-top-right-radius  | border-top-left-radius     |
    | Border Bottom Start Radius    | border-end-start-radius     | border-bottom-left-radius| border-bottom-right-radius |
    | Border Bottom End Radius      | border-end-end-radius       | border-bottom-right-radius| border-bottom-left-radius |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | Position Start                | inset-inline-start          | left                     | right                      |
    | Position End                  | inset-inline-end            | right                    | left                       |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+
    | Text Align (start)            | text-align: start           | text-align: left         | text-align: right          |
    | Text Align (end)              | text-align: end             | text-align: right        | text-align: left           |
    +-------------------------------+-----------------------------+--------------------------+----------------------------+


  ### Block Axis
    +----------------------+---------------------------+--------------------------+--------------------------+
    | Purpose              | Logical Property          | LTR Behavior             | RTL Behavior             |
    +----------------------+---------------------------+--------------------------+--------------------------+
    | BLOCK AXIS (Direction-insensitive, e.g., vertical)                                                     |
    +----------------------+---------------------------+--------------------------+--------------------------+
    | Sizing               | block-size                | height                   | height                   |
    | Margin Start         | margin-block-start        | margin-top               | margin-top               |
    | Margin End           | margin-block-end          | margin-bottom            | margin-bottom            |
    | Padding Start        | padding-block-start       | padding-top              | padding-top              |
    | Padding End          | padding-block-end         | padding-bottom           | padding-bottom           |
    | Border Start         | border-block-start        | border-top               | border-top               |
    | Border End           | border-block-end          | border-bottom            | border-bottom            |
    | Position Start       | inset-block-start         | top                      | top                      |
    | Position End         | inset-block-end           | bottom                   | bottom                   |
    +----------------------+---------------------------+--------------------------+--------------------------+

## 3. Grafiken & Icons

### 3.1 CSS Transform
  - Du kannst Icons einfach spiegeln. Dies ist die eleganteste Methode, da du kein separates Icon-Set benötigst.
  - Wenn das Attribute direkt auf der Komponente gesetzt ist
    ```css
      :host([dir="rtl"]) .arrow-right {
        transform: scaleX(-1);
      }
    ```
  - Wenn das Attribute beim HTML-Element gesetzt ist, Attribute wird duch die Kaskade vererbt
    ```css
      [dir="rtl"] .arrow-right {
        transform: scaleX(-1);
      }
    ```

### 3.2 Separate Assets
  - Wenn komplett andere Grafiken gebraucht werden mit CSS-Klassen arbeiten, die per JavaScript setzt werden
  - Alternativ CSS nutzen, um basierend auf dem dir-Attribut eine andere background-image zu laden.

## 4. Funktionalität (JavaScript)

  - Manchmal hängt die Logik von der Richtung ab, z.B. bei einem Karussell das per JavaScript gesteuert wird.
  - Die Buttons 'nächster' und 'vorheriger' müssen entsprechend der Richtung angepasst werden.
  - Richtung per JavaScript abfragen beim HTML-Element (berücksichtigt Kontext)
    - Gibt den tatsächlichen Rendering-Zustand wieder.

    ```javascript
      private get isRTL() {
        return getComputedStyle(this).direction === 'rtl';
      }
    ```
  - Richtung per JavaScript abfragen beim HTML-Element (keine Kontext!)
    - Funktioniert nur wenn das dir-Attribut auf dem HTML-Element gesetzt ist.

    ```javascript
      private get isRTL() {
        return  document.documentElement.dir === 'rtl';
      }
    ```

## 5. Was ist mit Flexbox?

  - Ein Flex-Container verhält sich in RTL-Umgebungen meistens automatisch korrekt, weil Flexbox von Grund auf mit logischen anstatt physischen Richtungen arbeitet.
  - Die horizontale Anordnung (Hauptachse) der Flex-Items kehrt sich automatisch um, während die vertikale Anordnung (Querachse) gleich bleibt.

### 5.1 Die Hauptachse

  - Das gesamte Verhalten von Flexbox hängt von seiner Hauptachse (Main Axis) ab.
  - Bei flex-direction: row (dem Standard) verläuft die Hauptachse entlang der Textrichtung.
  - In einer LTR-Umgebung (Left-to-Right) verläuft die Achse von links nach rechts.
  - In einer RTL-Umgebung (Right-to-Left) wird die Achse vom Browser automatisch umgedreht und verläuft von rechts nach links.
  - Alle Flexbox-Eigenschaften, die sich auf die Hauptachse beziehen, respektieren diese Umkehrung.

### 5.2 Wie verändern sich die wichtigsten Flex-Eigenschaften?

#### flex-direction
  - row (Standard): 
    - In RTL werden die Items von rechts nach links angeordnet. Das erste Element im DOM ist ganz rechts.
  - row-reverse: 
    - Kehrt die Anordnung um. In RTL werden die Items also von links nach rechts angeordnet. Das erste Element im DOM ist ganz links.
  - column und column-reverse: 
    - ⚠️ Wichtig: Diese sind nicht von dir="rtl" betroffen, da die Block-Richtung (von oben nach unten) sich nicht ändert. Ein Spaltenlayout sieht in LTR und RTL identisch aus.

#### justify-content (Anordnung auf der Hauptachse)
  - Da sich die Hauptachse umkehrt, verhalten sich diese Werte spiegelverkehrt:
  - flex-start: Die Items werden am Anfang der Achse ausgerichtet. In RTL ist das rechts.
  - flex-end: Die Items werden am Ende der Achse ausgerichtet. In RTL ist das links.
  - center: Bleibt visuell zentriert.
  - space-between, space-around, space-evenly: Funktionieren wie erwartet, aber der erste und letzte Leerraum sind an die neue Start- (rechts) und End-Position (links) gebunden.

#### align-items (Anordnung auf der Querachse)

  - Diese Eigenschaft ist nicht von dir="rtl" betroffen, da die Querachse (in der Regel vertikal) ihre Richtung nicht ändert. align-items: center zentriert die Items also immer vertikal.

#### Fazit

  +-------------------------------+-------------------------------------+----------------------------------------------+
  | Eigenschaft (Property)        | Verhalten bei LTR (dir="ltr")       | Verhalten bei RTL (dir="rtl")                |
  +-------------------------------+-------------------------------------+----------------------------------------------+
  | flex-direction: row           | Anordnung von links nach rechts     | Anordnung von rechts nach links              |
  | justify-content: flex-start   | Items sind linksbündig              | Items sind rechtsbündig                      |
  | justify-content: flex-end     | Items sind rechtsbündig             | Items sind linksbündig                       |
  | flex-direction: column        | Anordnung von oben nach unten       | Anordnung von oben nach unten (unverändert)  |
  | align-items: flex-start       | Items sind oben ausgerichtet        | Items sind oben ausgerichtet (unverändert)   |
  +-------------------------------+-------------------------------------+----------------------------------------------+