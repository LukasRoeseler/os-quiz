# Open Science Quiz

Ein anspruchsvolles Multiple-Choice-Quiz zu Open Science, entlang des
Forschungszyklus (Forschungsfragen & Planung → Materialien & Daten →
Veröffentlichung → Kommunikation), auf Basis des Open-Science-Buchs und der
MüCOS-Infomodule der Universität Münster.

Spielen: `index.html` direkt öffnen, oder über GitHub Pages sobald aktiviert.

## Datenerhebung

Am Ende jedes Durchlaufs kann (mit einem frei wählbaren Spitznamen, keine
Klarnamenpflicht) das Ergebnis in ein Google Sheet geloggt werden — Grundlage
für Leaderboard und Perzentil-Anzeige. Gespeichert werden: Zeitstempel,
Spitzname, Score, Kategorie-Teilscores und Bearbeitungsdauer — keine weiteren
personenbezogenen Daten.

### Einrichtung des Google Sheets

1. Google Sheet öffnen → **Erweiterungen › Apps Script**.
2. Den Code aus [`sheet-logger.gs.js`](sheet-logger.gs.js) einfügen und speichern.
3. **Bereitstellen › Neue Bereitstellung** → Typ **Web-App** → Ausführen als
   „Ich" → Zugriff **„Alle"** → Bereitstellen.
4. Die resultierende URL (endet auf `/exec`) kopieren.
5. Im GitHub-Repo unter **Settings › Secrets and variables › Actions** ein
   neues Secret `SHEET_WEBHOOK_URL` mit dieser URL anlegen.
6. Bei jedem Push auf `main` baut die GitHub Action die Seite neu und trägt
   die URL automatisch in `index.html` ein (`__SHEET_WEBHOOK_URL__`-Platzhalter
   wird ersetzt) — das Secret landet nie im Quelltext.

Ohne gültige Webhook-URL läuft die App im Demo-Modus: Quiz und Auswertung
funktionieren normal, Leaderboard/Perzentil zeigen einen Hinweis, dass noch
keine Verbindung besteht.

## License

Inhalte und Code in diesem Repository stehen unter
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — siehe `LICENSE`.
