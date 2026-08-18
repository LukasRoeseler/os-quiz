# MüCOS Open Science: Folien

Ein Foliensatz im Design des Quiz, mit Presenter-Ansicht für Videoaufnahmen.

## Benutzung

1. `presenter.html` öffnen, das ist Ihre eigene Ansicht (aktuelle Folie, nächste
   Folie, Sprechernotizen, Timer).
2. Button **„Publikumsansicht öffnen"** klicken, das öffnet `index.html` in
   einem zweiten Fenster, ohne Notizen. Dieses Fenster auf den
   Aufnahme-/Freigabe-Bildschirm ziehen.
3. Navigation in der Presenter-Ansicht (Pfeiltasten, Leertaste, oder die
   Buttons) steuert automatisch auch die Publikumsansicht mit.
4. **„Alle Folien"** öffnet eine Liste aller Folientitel zum direkten Sprung.

Die Publikumsansicht funktioniert auch für sich allein (`index.html` direkt
öffnen): Pfeiltasten oder Klick links/rechts navigieren.

## Inhalte bearbeiten

Alle Folien stehen in [`slides-data.js`](slides-data.js) als einfaches
JavaScript-Array. Pro Folie:

- `section`: Kapitel-Label über dem Titel
- `title`: Überschrift der Folie
- `bullets`: Stichpunkte (3–5 empfohlen)
- `notes`: Sprechernotizen (nur in der Presenter-Ansicht sichtbar)
- `figure` (optional): Name einer der fünf hinterlegten Grafiken in
  [`slides-common.js`](slides-common.js) (`forschungszyklus`, `fiveschools`,
  `kano`, `registeredreport`, `openaccess`)
- `refs` (optional): Liste von `{label, url}` für Quellenlinks am Folienrand

Eine neue Folie einfügen: einfach ein weiteres Objekt an der gewünschten
Stelle im Array ergänzen, kein Rebuild nötig, ein Browser-Reload genügt.

## Design

Nutzt dieselben Design-Variablen wie das Quiz (`style.css`), inklusive
MüCOS-Logo (`../assets/mucos-logo.jpg`).
