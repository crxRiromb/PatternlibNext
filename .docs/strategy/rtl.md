# Right-to-Left (RTL) Support

- Der Browser wählt automatisch die korrekte Richtung, basierend auf dem dir-Attribut auf deinem <html>-Tag oder einem Elternelement gesetzt ist.

+-----------------------------+---------------------------+-------------------------+--------------------------+
| Zweck                       | Logische Eigenschaft      | Verhalten bei LTR       | Verhalten bei RTL        |
|                             | (Modern & Empfohlen)      | (dir="ltr")             | (dir="rtl")              |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| HORIZONTALER ABSTAND                                                                                         |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| Außenabstand (Start)        | margin-inline-start       | margin-left             | margin-right             |
| Außenabstand (Ende)         | margin-inline-end         | margin-right            | margin-left              |
| Innenabstand (Start)        | padding-inline-start      | padding-left            | padding-right            |
| Innenabstand (Ende)         | padding-inline-end        | padding-right           | padding-left             |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| RAHMEN                                                                                                       |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| Rahmen (Start)              | border-inline-start       | border-left                | border-right               |
| Rahmen (Ende)               | border-inline-end         | border-right               | border-left                |
| Radius (Start-Oben)         | border-start-start-radius | border-top-left-radius     | border-top-right-radius    |
| Radius (Start-Unten)        | border-end-start-radius   | border-bottom-left-radius  | border-bottom-right-radius |
| Radius (Ende-Oben)          | border-start-end-radius   | border-top-right-radius    | border-top-left-radius     |
| Radius (Ende-Unten)         | border-end-end-radius     | border-bottom-right-radius | border-bottom-left-radius  |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| POSITIONIERUNG                                                                                               |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| Position (Start)            | inset-inline-start        | left                    | right                    |
| Position (Ende)             | inset-inline-end          | right                   | left                     |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| TEXT                                                                                                         |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| Textausrichtung             | text-align: start         | text-align: left        | text-align: right        |
| Textausrichtung             | text-align: end           | text-align: right       | text-align: left         |
+-----------------------------+---------------------------+-------------------------+--------------------------+
| Schriftzeichenrichtung      | direction: ltr            | direction: ltr          | direction: rtl           |
+-----------------------------+---------------------------+-------------------------+--------------------------+
