// MüCOS Open Science slide deck: content.
// Edit this file to change slides. Each entry:
//   section  - small label above the title (chapter name)
//   title    - main slide headline
//   bullets  - array of short bullet strings (keep to 3-5 per slide)
//   notes    - speaker notes shown only in the presenter view
//   figure   - optional key into MUCOS_SLIDES_COMMON.FIGURES (see slides-common.js)
//   refs     - optional array of {label, url}

window.MUCOS_SLIDES = [
  {
    section: 'MüCOS',
    title: 'Open Science: Grundlagen für die eigene Forschungspraxis',
    bullets: [
      'Ein Kurs entlang des Forschungszyklus',
      'Konzepte, Praxis und Ansprechpersonen an der Universität Münster',
    ],
    notes: 'Begrüßung. Kurzer Überblick, dass der Kurs entlang der vier Phasen des Forschungszyklus aufgebaut ist und am Ende ein Quiz als Abschlussprüfung wartet.',
    figure: null,
    refs: [{ label: 'MüCOS', url: 'https://www.uni-muenster.de/MueCOS/index.html' }],
  },

  // ---- Einleitung ----
  {
    section: 'Einleitung',
    title: 'Wozu Open Science? Pragmatische Gründe',
    bullets: [
      'Anforderungen an Forschung durch Institutionen und Drittmittelgeber ändern sich',
      'Drittmittelgeber fordern zunehmend Datenmanagementpläne',
      'Open-Access-Publikationen werden zur Voraussetzung für Förderung',
    ],
    notes: 'Viele Forschende beschäftigen sich mit Open Science nicht aus Überzeugung, sondern weil Förderer und Institutionen es zunehmend verlangen. Das ist ein legitimer, pragmatischer Einstieg.',
    figure: null,
  },
  {
    section: 'Einleitung',
    title: 'Wozu Open Science? Karrierevorteil',
    bullets: [
      'Höhere Qualität in weiteren Forschungsaspekten braucht zusätzliche Ressourcen',
      'Es lohnt sich zu verstehen, welche Qualitätskriterien in die Forschungsbewertung einfließen',
      'Richtig umgesetzt: schnellerer Wissensfortschritt, also exzellente Forschung',
    ],
    notes: 'Beispiel: gründliche Dokumentation und Veröffentlichung von Materialien fließt zunehmend in Berufungs- und Förderentscheidungen ein.',
    figure: null,
  },
  {
    section: 'Einleitung',
    title: 'Wozu Open Science? Gesellschaftliche Verantwortung',
    bullets: [
      'Offen zugängliche Forschung ist Voraussetzung für Qualitätssicherung',
      'Ohne verfügbare Daten kann die Datenqualität nicht beurteilt werden',
      'Wissenschaft ist Vertrauensangriffen ausgesetzt; Open Science ermöglicht Kontrolle und stellt Vertrauen her',
    ],
    notes: 'Diese dritte Perspektive ist am wenigsten karriereorientiert, aber am wichtigsten für die Gesellschaft: Offenheit ist die Grundlage dafür, dass Forschung überhaupt geprüft werden kann.',
    figure: null,
  },
  {
    section: 'Einleitung',
    title: 'Lernziele dieses Kurses',
    bullets: [
      'Verschiedene Facetten von Open Science kennen',
      'Zusammenhang zwischen Problemen im Wissenschaftssystem und Lösungsansätzen verstehen',
      'Best Practices in der eigenen Forschung einsetzen (z. B. Daten teilen, Open Access)',
      'Praktiken im eigenen Feld vor dem Hintergrund von Open Science bewerten',
      'Zur Offenheit und Robustheit der Forschung im eigenen Feld beitragen',
    ],
    notes: 'Diese fünf Lernziele strukturieren, was am Ende des Kurses erwartet werden kann. Ziel ist nicht nur Wissen, sondern auch eigenes Handeln.',
    figure: null,
  },
  {
    section: 'Einleitung',
    title: 'Der Forschungszyklus als roter Faden',
    bullets: [
      'Forschungsfragen & Planung',
      'Materialien & Daten',
      'Veröffentlichung',
      'Kommunikation, und zurück zu neuen Forschungsfragen',
    ],
    notes: 'Der Kurs folgt diesen vier Stufen. MüCOS hat für jede Stufe konkrete Ansprechpersonen und Angebote an der Universität Münster.',
    figure: 'forschungszyklus',
  },

  // ---- Open Science Konzepte ----
  {
    section: 'Open Science Konzepte',
    title: 'Klammerbegriff: Fünf Denkschulen',
    bullets: [
      'Infrastruktur: Plattformen zum Speichern und Veröffentlichen von Forschungsmaterialien',
      'Öffentlichkeit: Einbindung der Gesellschaft in den Forschungsprozess (Citizen Science)',
      'Messbarkeit: Alternativen zu klassischen Metriken wie dem Impact Factor',
      'Demokratie: Zugang zu Wissen für alle',
      'Pragmatismus: mehr Effizienz der Wissenschaft durch offene Forschungsdaten',
    ],
    notes: 'Fecher & Friesike (2014) fassen unter "Open Science" fünf unterschiedliche Denkschulen zusammen. Der Begriff ist also kein einheitliches Konzept, sondern ein Dach über sehr verschiedenen Anliegen.',
    figure: 'fiveschools',
    refs: [{ label: 'Fecher & Friesike (2014), Opening Science', url: 'https://link.springer.com/chapter/10.1007/978-3-319-00026-8_2' }],
  },
  {
    section: 'Open Science Konzepte',
    title: 'MüCOS-Konzept: Der Forschungszyklus',
    bullets: [
      'MüCOS strukturiert seine Angebote entlang der vier Phasen des Forschungszyklus',
      'Für jedes Feld gibt es eine konkrete Ansprechperson an der Universität Münster',
      'Ziel: Open Science nicht als Zusatzaufwand, sondern als integrierten Teil des Forschungsprozesses verstehen',
    ],
    notes: 'Diese Folie verweist zurück auf die Zyklus-Grafik und leitet zur Übersicht der Ansprechpersonen am Ende des Kurses über.',
    figure: null,
    refs: [{ label: 'MüCOS', url: 'https://www.uni-muenster.de/MueCOS/index.html' }],
  },
  {
    section: 'Open Science Konzepte',
    title: 'Das Kano-Modell auf Open Science angewendet',
    bullets: [
      'Hygienefaktoren: selbstverständlich erwartet (z. B. Open Access, Open Data, Open Code)',
      'Luxusfaktoren: positiv überraschend, noch nicht selbstverständlich (z. B. Citizen Science)',
      'Die Grenze verschiebt sich über Zeit: Nutzung offener Praktiken in der Psychologie stieg von 49% (2010) auf 87% (2020)',
    ],
    notes: 'Manche Open-Science-Facetten sind vom "netten Extra" zum Standard geworden. Citizen Science gilt im Kursmaterial explizit als Beispiel, das diesen Schritt noch nicht vollzogen hat.',
    figure: 'kano',
  },
  {
    section: 'Open Science Konzepte',
    title: 'Denkschulen und Absichten',
    bullets: [
      'Hinter einzelnen Praktiken stehen unterschiedliche Absichten',
      'Beispiele: Qualitätssicherung, Demokratisierung, Autonomie, Exzellenz',
      'Wichtig: erkennen, welche Absicht eine konkrete Maßnahme verfolgt, um sie richtig einzuordnen',
    ],
    notes: 'Diese Folie leitet die folgenden vier Einzelfolien (Qualitätssicherung, Demokratisierung, Autonomie, Exzellenz) ein.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Qualitätssicherung',
    bullets: [
      'Offenheit macht Fehler und Schwächen sichtbar und prüfbar',
      'DORA: keine Zeitschriften-Metriken als Proxy für die Qualität einzelner Artikel oder Forschender',
      'TOP Guidelines / TOP Factor: 10 Kriterien für transparente Zeitschriftenpraxis',
    ],
    notes: 'DORA hat inzwischen über 25.000 Unterzeichnende aus 165 Ländern. Der TOP Factor ist eine Summe von Kriterien, kein Quotient wie der Impact Factor.',
    figure: null,
    refs: [
      { label: 'DORA', url: 'https://sfdora.org' },
      { label: 'TOP Guidelines', url: 'https://www.topfactor.org' },
    ],
  },
  {
    section: 'Open Science Konzepte',
    title: 'Demokratisierung',
    bullets: [
      'Zugang zu Wissen für alle, nicht nur für zahlende Institutionen',
      'Bürger*innenbeteiligung am Forschungsprozess (Citizen Science)',
      'Open Access als Gleichheitsfrage zwischen reichen und weniger reichen Institutionen und Ländern',
    ],
    notes: 'Diese Absicht steht oft hinter Diamond Open Access und Citizen-Science-Projekten.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Autonomie',
    bullets: [
      'Wissenschaft soll unabhängig von einzelnen kommerziellen Anbietern bleiben',
      'Lock-in-Effekte durch hohe Wechselkosten vermeiden',
      'Open Source und offene Infrastruktur stärken die Unabhängigkeit von Forschenden und Institutionen',
    ],
    notes: 'Autonomie ist keine der vier Mertonschen Normen, wird in Open-Science-Debatten aber oft als eigenständiges Anliegen diskutiert.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Exzellenz',
    bullets: [
      'Offenheit als Weg zu besserer, nicht nur transparenterer Forschung',
      'Schnellerer, kumulativer Wissensfortschritt durch Nachnutzung von Materialien und Daten',
      'Replikation und Prüfbarkeit erhöhen die Vertrauenswürdigkeit von Befunden',
    ],
    notes: 'Diese Perspektive verbindet Open Science direkt mit der Qualität der Forschung selbst, nicht nur mit Transparenz als Selbstzweck.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Abgrenzung: Was Open Science nicht ist',
    bullets: [
      'Kein Selbstzweck und keine bloße Bürokratie',
      'Kein Ersatz für inhaltliche Qualität der Forschung',
      'Nicht die Forderung, dass ausnahmslos alles offen sein muss',
    ],
    notes: 'Diese Folie bereitet die nächste vor: Offenheit hat legitime Grenzen.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'So offen wie möglich, so geschlossen wie nötig',
    bullets: [
      'Offenheit ist der Standardfall, nicht eine Pflicht ohne Ausnahme',
      'Legitime Gründe für Einschränkung: Datenschutz, Patente, Sicherheit',
      'Der Grundsatz ist u. a. in Horizon Europe verankert',
    ],
    notes: 'Dieser Grundsatz rahmt die folgenden drei Folien zu Dual-Use, Patenten und kritischer Infrastruktur.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Dual-Use als Einfallsargument',
    bullets: [
      'Manche Forschung oder Daten könnten sowohl nützlich als auch schädlich genutzt werden',
      'Echte Dual-Use-Fälle sind selten und betreffen v. a. sicherheitsrelevante Felder',
      'Risiko: Dual-Use wird vorgeschoben, um Offenheit pauschal zu verhindern',
    ],
    notes: 'Wichtig ist die Unterscheidung zwischen begründeten Einzelfällen und pauschaler Abwehrhaltung.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Patente',
    bullets: [
      'Eine Patentanmeldung erfordert in der Regel Geheimhaltung bis zur Einreichung',
      'Nach der Anmeldung ist der Patenttext ohnehin öffentlich',
      'Open Science und Patentierung stehen zeitlich, nicht grundsätzlich, im Konflikt',
    ],
    notes: 'Der Konflikt lässt sich meist durch zeitliche Staffelung lösen: erst anmelden, dann veröffentlichen.',
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Kritische Infrastruktur',
    bullets: [
      'Manche Daten und Methoden betreffen sicherheitsrelevante Infrastruktur (Energie, Gesundheit, Verteidigung)',
      'Hier sind Einschränkungen der Offenheit begründet und notwendig',
      'Abwägung im Einzelfall statt pauschaler Regel',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Open Science Konzepte',
    title: 'Datenschutz',
    bullets: [
      'Personenbezogene Daten dürfen oft nicht vollständig veröffentlicht werden',
      'Lösungen: Anonymisierung/Pseudonymisierung, kontrollierter Zugang statt öffentlichem Download',
      'Ansprechperson an der Universität Münster: Stabsstelle Datenschutz',
    ],
    notes: 'Diese Folie schließt den Konzepte-Block mit dem praktisch wichtigsten Einschränkungsgrund ab.',
    figure: null,
  },

  // ---- Forschungsfragen und Planung ----
  {
    section: 'Forschungsfragen & Planung',
    title: 'Konfirmatorisch vs. explorativ',
    bullets: [
      'Konfirmatorisch: Daten, Analysen und mögliche Ergebnisse stehen vorab fest',
      'Explorativ: ergebnisoffene Annäherung, generiert Fragen für zukünftige Forschung',
      'Faustregel: Ist die Forschung konfirmatorisch, sollte sie präregistriert werden',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Forschungsfragen & Planung',
    title: 'Nachvollziehbarkeit und Prüfbarkeit',
    bullets: [
      'HARKing: eine Hypothese wird nach Kenntnis der Ergebnisse nachträglich umformuliert',
      '"Garden of Forking Paths": viele stille Analyseentscheidungen erhöhen die Falsch-Positiv-Rate',
      'Präregistrierung trennt konfirmatorische von explorativer Forschung sichtbar',
    ],
    notes: 'HARK steht für "Hypothesizing After the Results are Known".',
    figure: null,
  },
  {
    section: 'Forschungsfragen & Planung',
    title: 'Freiheitsgrade in der Forschung',
    bullets: [
      'Freiheitsgrade bestehen in Design, Datenerhebung, Aufbereitung und Analyse, in vielen Fächern',
      'Unspezifizierte Analysepläne können die Falsch-Positiv-Rate von 5% deutlich erhöhen',
      '"21-Word Solution" als Minimalstandard zur Offenlegung zentraler Entscheidungen',
    ],
    notes: 'Eine Übersicht betroffener Fächer findet sich bei UKRN.',
    figure: null,
    refs: [{ label: 'UK Reproducibility Network: Disciplines', url: 'https://www.ukrn.org/disciplines/' }],
  },
  {
    section: 'Forschungsfragen & Planung',
    title: 'Registrierung, Protokolle, Analyseplan',
    bullets: [
      'Präregistrierung: Fragestellung, Design und Analyseplan vorab mit Zeitstempel hinterlegt',
      'Eine gute Präregistrierung "raubt alle Freiheitsgrade" (möglichst präzise, strukturiert, passendes Template)',
      'Plattformen: OSF, ZPID PreReg Service; AsPredicted.org gilt als weniger empfehlenswert (zu knapp)',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 'OSF Registries', url: 'https://osf.io/registries' }],
  },
  {
    section: 'Forschungsfragen & Planung',
    title: 'Datenmanagementplan (DMP)',
    bullets: [
      'Plant den Umgang mit Daten und Ergebnissen vor Projektbeginn',
      'Oft Voraussetzung für Drittmittelförderung, wird mitbegutachtet',
      'Beratung an der Universität Münster: Service Center for Data Management',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 'Forschungsdatenmanagement Uni Münster', url: 'https://www.uni-muenster.de/Forschungsdaten/' }],
  },
  {
    section: 'Forschungsfragen & Planung',
    title: 'Registered Reports',
    bullets: [
      'Stage 1: Begutachtung von Fragestellung und Methode vor der Datenerhebung',
      '"In-principle acceptance" bindet die Publikation an die Qualität des Plans, nicht an das Ergebnis',
      'Stage 2 prüft nur, ob der Plan eingehalten wurde',
      'Beugt Publication Bias vor: nur 44% Hypothesenbestätigung bei Registered Reports vs. 96% üblich',
    ],
    notes: 'Scheel et al. (2021) verglichen die Rate hypothesenbestätigender Ergebnisse in Registered Reports mit der üblichen psychologischen Literatur.',
    figure: 'registeredreport',
  },

  // ---- Materialien und Daten ----
  {
    section: 'Materialien & Daten',
    title: 'Bedeutung von Materialien und Daten',
    bullets: [
      'Grundlage für Nachvollziehbarkeit, Prüfung und Replikation',
      'Spart Kosten, da Daten nicht erneut erhoben werden müssen',
      'Ermöglicht kumulative Forschung',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Daten teilen: Best Practices',
    bullets: [
      'Datenmanagement so früh wie möglich planen, nicht erst bei der Veröffentlichung',
      'Rohdaten, Aufbereitungscode und Analysecode gemeinsam bereitstellen',
      'Struktur und Dokumentation sind wichtiger als die reine Datenmenge',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Checkliste für gute Datenpraxis',
    bullets: [
      'Liegen die Daten in einem offenen, dokumentierten Format vor?',
      'Gibt es ein Codebook für alle Variablen?',
      'Ist eine Lizenz vergeben?',
      'Ist der Datensatz in einem Repositorium mit persistentem Identifier (DOI) hinterlegt?',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Repositorien',
    bullets: [
      'Fachspezifische Repositorien (z. B. PsychArchives) vs. generische (OSF, Zenodo)',
      'Auswahlhilfe: re3data.org',
      'Wichtig: persistenter Identifier (DOI) für dauerhafte Zitierbarkeit',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 're3data', url: 'https://www.re3data.org' }],
  },
  {
    section: 'Materialien & Daten',
    title: 'FAIR-Prinzipien',
    bullets: [
      'Findable, Accessible, Interoperable, Reusable',
      'EU-Bericht: geschätzte jährliche Kosten nicht-FAIRer Daten: 10,2 Milliarden Euro',
      'Selbsttest: FAIRaware Tool',
    ],
    notes: null,
    figure: null,
    refs: [
      { label: 'FAIR Principles', url: 'https://www.go-fair.org/fair-principles/' },
      { label: 'FAIRaware Tool', url: 'https://fairaware.dans.knaw.nl' },
    ],
  },
  {
    section: 'Materialien & Daten',
    title: 'CARE- und TRUST-Prinzipien',
    bullets: [
      'CARE: Collective Benefit, Authority to Control, Responsibility, Ethics, für Daten von/über Gemeinschaften',
      'TRUST: Transparency, Responsibility, User Focus, Sustainability, Technology, für Repositorien',
      'Beide ergänzen FAIR um eine ethische bzw. institutionelle Perspektive',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Codebook und Lizenzen',
    bullets: [
      'Codebook dokumentiert Variablen, Kodierungen und fehlende Werte',
      'Lizenz (z. B. CC BY, CC0) regelt Nennung, Bearbeitung und kommerzielle Nutzung',
      'Erst beides zusammen macht Daten wirklich nachnutzbar',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Probleme mit Reproduzierbarkeit',
    bullets: [
      'Nur rund 50% der geprüften psychologischen Befunde replizierten erfolgreich (OSC, 2015)',
      'Direkte Replikationen machen in vielen Fächern unter 1% aller Publikationen aus',
      'Reproduktion (gleiche Daten) und Replikation (neue Daten): Begriffe unterscheiden sich je nach Fach',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Materialien & Daten',
    title: 'Maßnahmen gegen Reproduzierbarkeitsprobleme',
    bullets: [
      'Spektrum von keiner Maßnahme bis zu systematischer Prüfung aller Studien',
      'Badges für Open Data, Open Materials, Preregistration',
      'Replication Packages: Rohdaten, Code und Codebook gemeinsam',
      'Kooperation mit dem Institute for Replication (I4R) und CODECHECK zur unabhängigen Prüfung',
    ],
    notes: 'Einzelne Zeitschriften (z. B. Meta-Psychology) prüfen inzwischen alle publizierten Studien.',
    figure: null,
  },

  // ---- Veröffentlichung ----
  {
    section: 'Veröffentlichung',
    title: 'Autor*innenschaft',
    bullets: [
      'Kriterien: substantieller Beitrag zu Konzeption, Durchführung oder Analyse UND Zustimmung zur finalen Fassung',
      'Ehrenautor*innenschaft (Nennung ohne echten Beitrag) verstößt gegen gute wissenschaftliche Praxis',
      'Bedeutung und Reihenfolge variieren stark zwischen Fächern',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Reihenfolge, Erstautor*innenschaft, Corresponding Author',
    bullets: [
      'Reihenfolge nach Beitrag (viele Fächer) vs. alphabetisch (z. B. Ökonomie, Teilchenphysik)',
      'Geteilte Erstautor*innenschaft möglich, wenn Beiträge vergleichbar groß sind',
      'Corresponding Author: dauerhaft erreichbare Adresse, ggf. relevant für Fördermittelzuordnung',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'CRediT: Beiträge aufdröseln',
    bullets: [
      'CRediT (Contributor Roles Taxonomy) differenziert Rollen, z. B. Konzeption, Datenerhebung, Statistik, Schreiben',
      'Macht Beiträge sichtbar statt pauschaler "Autor*innenschaft"',
      'Hilft gegen Ehrenautor*innenschaft und bei der Forschungsbewertung',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 'CRediT Taxonomy', url: 'https://credit.niso.org' }],
  },
  {
    section: 'Veröffentlichung',
    title: 'Peer-Review-Modelle',
    bullets: [
      'Klassisch: vertrauliche Begutachtung vor Veröffentlichung in einer Zeitschrift',
      'Alternative: kein Peer Review, reine Preprint-Veröffentlichung',
      'Publish-Review-Curate (PRC): erst Preprint, dann Begutachtung (z. B. via PCI), dann Kuratierung durch Zeitschriften',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Vor der Veröffentlichung: Wer begutachtet?',
    bullets: [
      'Klassisch: die Zielzeitschrift selbst',
      'Externe Services: Peer Community In (PCI), Overlay-Journals (z. B. eLife), F1000Research',
      'Ziel: Unabhängigkeit der Qualitätskontrolle von einzelnen kommerziellen Verlagen',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Anonymität im Peer Review',
    bullets: [
      'Double-blind: Gutachtende und Autor*innen sind einander unbekannt',
      'Single-blind: nur die Autor*innen bleiben anonym',
      'Non-blind / offen: alle Namen bekannt, teils mit signierten Gutachten',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Nachvollziehbarkeit von Peer Review',
    bullets: [
      'Keine Offenlegung: keine externe Prüfbarkeit der Qualitätskontrolle',
      'Offen nur bei Annahme: abgelehnte Artikel bleiben unsichtbar und können unrevidiert woanders eingereicht werden',
      'Immer offen, unabhängig vom Ausgang: einzige Variante mit voller Nachvollziehbarkeit',
    ],
    notes: 'Das verbreitete "Open Peer Review" (nur bei Annahme veröffentlicht) gilt daher als "nur halb passender Name".',
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Nach der Veröffentlichung',
    bullets: [
      'Abgestufte Reaktionen: Kommentar, Correction, Editorial Notice of Concern, Retraction',
      'PubPeer: öffentliche, teils anonyme Post-Publication-Kommentare',
      'Typischer Ablauf: Hinweis, Prüfung durch Herausgeber*innen, Entscheidung',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Veröffentlichung',
    title: 'Open Access: Typen',
    bullets: [
      'Diamond: sofort frei, keine Publikationsgebühren',
      'Gold: sofort frei, Autor*innen zahlen Article Processing Charges',
      'Hybrid: Abo-Modell plus Freikauf einzelner Artikel ("Double Dipping")',
      'Green: Selbstarchivierung, unabhängig vom Zeitschriftenmodell',
    ],
    notes: 'MüCOS-Empfehlung: wenn möglich Diamond OA, sonst die geschlossene Option ohne APCs plus Preprint-Veröffentlichung.',
    figure: 'openaccess',
  },
  {
    section: 'Veröffentlichung',
    title: 'Open Access: Kosten, DEAL, Lock-in',
    bullets: [
      'Wer zahlt? Häufig Autor*innen (APC) oder Institutionen über Rahmenverträge',
      'DEAL-Konsortium: bundesweit ausgehandelte, kostenfreie OA-Konditionen bei Vertragsverlagen',
      'Risiko von Rahmenverträgen: Lock-in durch hohe Wechselkosten, langfristige Bindung an einzelne Verlage',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 'Projekt DEAL', url: 'https://www.projekt-deal.de' }],
  },

  // ---- Kommunikation ----
  {
    section: 'Kommunikation',
    title: 'Kommunikation in die Gesellschaft',
    bullets: [
      'Balance zwischen Robustheit der Befunde und zielgruppengerechter Sprache',
      'Kanäle: Interviews, persönliche Websites, Blogs',
      'MüCOS entwickelt Leitlinien zusammen mit der Pressestelle',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Kommunikation',
    title: 'Citizen Science',
    bullets: [
      'Bürger*innen erhalten unter Anleitung Einblick und tragen zur Wissensgenerierung bei',
      'Beispiele: Liebesbriefarchiv, aim-muenster.de (Betrieb von Weltraumteleskopen)',
      'Portal: mitforschen.org',
    ],
    notes: 'Wichtige Klarstellung: Citizen Science bedeutet nicht, dass Laien klassische Forschung "widerlegen", sondern begleitete Teilhabe am Forschungsprozess.',
    figure: null,
    refs: [{ label: 'mitforschen.org', url: 'https://www.mitforschen.org' }],
  },
  {
    section: 'Kommunikation',
    title: 'Lay Summaries für Forschungsartikel',
    bullets: [
      'Allgemeinverständliche Zusammenfassung eines Fachartikels',
      'Zunehmend von Zeitschriften und Fördermittelgebern erwartet',
      'Erhöht Reichweite und Nachvollziehbarkeit von Forschung für die Öffentlichkeit',
    ],
    notes: null,
    figure: null,
  },
  {
    section: 'Kommunikation',
    title: 'Open Educational Resources (OER)',
    bullets: [
      'Frei zugängliche bzw. nutzbare Lehrmaterialien: Bücher, Folien, Erklärvideos',
      'Verringert Zugangsungleichheit, kann Lernresultate verbessern',
      'Beispiele: FORRT Educational Nexus, OERCommons.org',
    ],
    notes: null,
    figure: null,
    refs: [{ label: 'FORRT Educational Nexus', url: 'https://forrt.org/syllabus/' }],
  },

  // ---- Ansprechpersonen ----
  {
    section: 'Praxis an der Universität Münster',
    title: 'Ansprechpersonen im Überblick',
    bullets: [
      'MüCOS: Präregistrierung, Registered Reports, Open Materials, Reproducible Code, Open Data, CRediT',
      'Service Center for Data Management: Forschungsdatenmanagement, FAIR-Aufbereitung',
      'Stabsstelle Datenschutz: Anonymisierung, datenschutzrechtliche Fragen',
      'Vertrauensperson bzw. Untersuchungskommission des Senats: gute wissenschaftliche Praxis',
      'Arbeitsstelle Forschungstransfer: Citizen Science; Koordination Diversity: Diversity-Fragen',
    ],
    notes: 'Eine vollständige, aktuelle Tabelle findet sich auf der MüCOS-Infomodule-Seite; als Lesezeichen empfohlen.',
    figure: null,
    refs: [{ label: 'Vollständige Übersicht', url: 'https://lukasroeseler.github.io/MueCOS-Infomodule/themen.html' }],
  },

  // ---- Abschluss ----
  {
    section: 'Abschluss',
    title: 'Testen Sie Ihr Wissen',
    bullets: [
      'MüCOS Open Science Quiz als Abschlussprüfung',
      '47 Fragen entlang des Forschungszyklus',
      'Mit Leaderboard und Perzentil-Vergleich',
    ],
    notes: 'Verweis auf den Quiz-Link zum Abschluss der Präsentation.',
    figure: null,
    refs: [{ label: 'Zum Quiz', url: 'https://lukasroeseler.github.io/os-quiz/' }],
  },
];
