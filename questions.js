// Open Science Quiz: Fragenpool (bilingual)
// Quellen: Open-Science-Buch (opensciencebuch-git) und MüCOS-Infomodule.
// Format: correct = Array von Indizes in "choices" (gilt für de UND en, Reihenfolge ist identisch).
// Länge(correct) > 1 bedeutet "mehrere Antworten möglich".

window.OS_QUIZ_CATEGORY_KEYS = ['konzepte', 'planung', 'materialien', 'veroeffentlichung', 'kommunikation', 'praxis'];

window.OS_QUIZ_CATEGORY_LABELS = {
  de: {
    konzepte: 'Open Science Konzepte',
    planung: 'Forschungsfragen & Planung',
    materialien: 'Materialien & Daten',
    veroeffentlichung: 'Veröffentlichung',
    kommunikation: 'Kommunikation',
    praxis: 'Praxis an der Universität Münster',
  },
  en: {
    konzepte: 'Open Science Concepts',
    planung: 'Research Questions & Planning',
    materialien: 'Materials & Data',
    veroeffentlichung: 'Publication',
    kommunikation: 'Communication',
    praxis: 'Practice at the University of Münster',
  },
};

window.OS_QUIZ_QUESTIONS = [

  // ---- Open Science Konzepte / Open Science Concepts ----
  {
    id: 'konzepte-1',
    categoryKey: 'konzepte',
    difficulty: 'mittel',
    correct: [0],
    de: {
      question: 'Welche der folgenden gehört NICHT zu Fecher & Friesikes (2014) fünf „Schools of Thought" von Open Science?',
      choices: ['Exzellenz-Schule', 'Infrastruktur-Schule', 'Mess-Schule (Measurement)', 'Pragmatik-Schule'],
      explanation: 'Die fünf Schools sind: Infrastruktur, Öffentlichkeit (Public), Messbarkeit (Measurement), Demokratie und Pragmatismus. Exzellenz ist keine eigenständige Denkschule in diesem Modell.',
    },
    en: {
      question: 'Which of the following is NOT one of Fecher & Friesike\'s (2014) five "Schools of Thought" of Open Science?',
      choices: ['Excellence School', 'Infrastructure School', 'Measurement School', 'Pragmatic School'],
      explanation: 'The five schools are Infrastructure, Public, Measurement, Democratic, and Pragmatic. Excellence is not a school in this model.',
    },
  },
  {
    id: 'konzepte-2',
    categoryKey: 'konzepte',
    difficulty: 'schwer',
    correct: [1],
    de: {
      question: 'Manche Open-Science-Facetten gelten mittlerweile als selbstverständliche „Hygienefaktoren" statt als positive Zusatzleistung. Welche Praktik nennt das Kursmaterial ausdrücklich als Ausnahme, für die das (noch) nicht gilt?',
      choices: ['Open Access', 'Citizen Science', 'Open Data', 'Reproduzierbarer Code'],
      explanation: 'Damit Wissenschaft schnell und vertrauenswürdig wächst, müssen Befunde prüfbar sein (Open Access, Open Data, Open Code); das gilt inzwischen fast als selbstverständlich. Citizen Science wird explizit als Facette genannt, für die diese Kano-Logik (noch) nicht zutrifft.',
    },
    en: {
      question: 'Some Open Science facets are now treated as self-evident "hygiene factors" rather than a positive extra. Which practice does the course material explicitly name as an exception where this is not (yet) the case?',
      choices: ['Open Access', 'Citizen Science', 'Open Data', 'Reproducible Code'],
      explanation: 'For science to grow quickly and trustworthily, findings must be checkable (Open Access, Open Data, Open Code); this is now nearly taken for granted. Citizen Science is explicitly named as a facet where this "Kano" logic does not (yet) apply.',
    },
  },
  {
    id: 'konzepte-3',
    categoryKey: 'konzepte',
    difficulty: 'schwer',
    correct: [0, 2, 3, 5],
    de: {
      question: 'Welche der folgenden gehören zu den vier Mertonschen Normen der Wissenschaft? (Mehrere Antworten möglich.)',
      choices: ['Universalismus', 'Autonomie', 'Organisierter Skeptizismus', 'Desinteressiertheit', 'Exzellenz', 'Kommunismus'],
      explanation: 'Robert Mertons vier Normen sind Kommunismus (wissenschaftliches Wissen gehört allen Forschenden gemeinsam), Universalismus, Desinteressiertheit und organisierter Skeptizismus. „Autonomie" und „Exzellenz" werden in Open-Science-Debatten oft diskutiert, gehören aber nicht zu diesen vier Normen.',
    },
    en: {
      question: 'Which of the following belong to Robert Merton\'s four norms of science? (Multiple answers possible.)',
      choices: ['Universalism', 'Autonomy', 'Organized Skepticism', 'Disinterestedness', 'Excellence', 'Communalism'],
      explanation: 'Merton\'s four norms are Communalism (scientific knowledge belongs jointly to all scientists), Universalism, Disinterestedness, and Organized Skepticism. "Autonomy" and "Excellence" are often discussed in Open Science debates but are not among these four norms.',
    },
  },
  {
    id: 'konzepte-4',
    categoryKey: 'konzepte',
    difficulty: 'schwer',
    correct: [2],
    de: {
      question: 'Nosek beschreibt eine Abfolge von Schritten, in der sich eine gewünschte Verhaltensänderung in der Wissenschaftskultur durchsetzt. Welcher Schritt kommt direkt nach „möglich" und vor „normativ"?',
      choices: ['belohnend', 'notwendig', 'einfach', 'freiwillig'],
      explanation: 'Die Reihenfolge lautet: möglich → einfach → normativ → belohnend → notwendig, mit Infrastruktur als Fundament der Pyramide.',
    },
    en: {
      question: 'Nosek describes a sequence of steps by which a desired culture change takes hold in science. Which step comes directly after "possible" and before "normative"?',
      choices: ['rewarded', 'necessary', 'easy', 'voluntary'],
      explanation: 'The sequence is: possible → easy → normative → rewarded → necessary, with infrastructure as the foundation of the pyramid.',
    },
  },
  {
    id: 'konzepte-5',
    categoryKey: 'konzepte',
    difficulty: 'mittel',
    correct: [3],
    de: {
      question: 'Welche Aussage zur „San Francisco Declaration on Research Assessment" (DORA) trifft zu?',
      choices: [
        'DORA fordert, den Journal Impact Factor stärker in Berufungsverfahren zu gewichten.',
        'DORA ist ein für alle deutschen Hochschulen verpflichtender gesetzlicher Standard.',
        'DORA bezieht sich ausschließlich auf Zeitschriften der Lebenswissenschaften.',
        'DORA rät von journalbezogenen Metriken wie dem Impact Factor als Qualitätsmaß ab.',
      ],
      explanation: 'DORA (seit 2012, mittlerweile über 25.000 Unterzeichnende aus 165 Ländern) empfiehlt explizit, journal-level-Metriken nicht als Ersatz für eine inhaltliche Bewertung einzelner Artikel oder Forschender heranzuziehen.',
    },
    en: {
      question: 'Which statement about the San Francisco Declaration on Research Assessment (DORA) is correct?',
      choices: [
        'DORA calls for weighting the Journal Impact Factor more heavily in hiring decisions.',
        'DORA is a legally binding standard for all German universities.',
        'DORA applies exclusively to life-science journals.',
        'DORA advises against using journal-level metrics like the Impact Factor as a quality proxy.',
      ],
      explanation: 'DORA (since 2012, now over 25,000 signatories from 165 countries) explicitly recommends not using journal-level metrics as a substitute for assessing individual articles or researchers.',
    },
  },
  {
    id: 'konzepte-6',
    categoryKey: 'konzepte',
    difficulty: 'schwer',
    correct: [0],
    de: {
      question: 'Was unterscheidet den „TOP Factor" (topfactor.org) rechnerisch vom Journal Impact Factor?',
      choices: [
        'Er ist eine Summe mehrerer Kriterien, kein Quotient wie der Impact Factor.',
        'Er ist wie der Impact Factor ein Quotient aus Zitationen und Artikelzahl.',
        'Er misst ausschließlich die statistische Power publizierter Studien.',
        'Er wird nur von den Zeitschriften selbst berechnet, ganz ohne externe Prüfung.',
      ],
      explanation: 'Die TOP Guidelines (Nosek et al., 2015) umfassen 10 Kriterien; der TOP Factor ist ihre Summe, kompensierbar zwischen Kriterien. Der (ebenfalls etwas irreführend benannte) Impact Factor ist dagegen ein echter Quotient.',
    },
    en: {
      question: 'Arithmetically, how does the "TOP Factor" (topfactor.org) differ from the Journal Impact Factor?',
      choices: [
        'It is a sum of several criteria, not a ratio like the Impact Factor.',
        'Like the Impact Factor, it is a ratio of citations to articles.',
        'It measures only the statistical power of published studies.',
        'It is calculated solely by the journals themselves, with no external check.',
      ],
      explanation: 'The TOP Guidelines (Nosek et al., 2015) comprise 10 criteria; the TOP Factor is their sum, so points on one criterion can compensate for a missing point on another. The Impact Factor, by contrast, is a true ratio.',
    },
  },
  {
    id: 'konzepte-7',
    categoryKey: 'konzepte',
    difficulty: 'leicht',
    correct: [1],
    de: {
      question: 'Der Grundsatz „So offen wie möglich, so geschlossen wie nötig" (u. a. in Horizon Europe verankert) beschreibt am ehesten welches Prinzip?',
      choices: [
        'Alle Forschungsdaten müssen ausnahmslos veröffentlicht werden.',
        'Offenheit ist der Standardfall, Ausnahmen sind mit Begründung erlaubt.',
        'Forschungsdaten dürfen erst nach Ablauf des Urheberrechts geöffnet werden.',
        'Nur Fördermittelgeber entscheiden über die Offenheit von Forschungsdaten.',
      ],
      explanation: 'Das Prinzip macht Offenheit zum Standardfall, lässt aber begründete Ausnahmen zu, etwa aus Datenschutz-, Patent- oder Sicherheitsgründen.',
    },
    en: {
      question: 'The principle "As open as possible, as closed as necessary" (enshrined in Horizon Europe, among others) describes which idea?',
      choices: [
        'All research data must be published without exception.',
        'Openness is the default; justified exceptions are allowed.',
        'Research data may only be opened once copyright has expired.',
        'Only funders decide whether research data is open.',
      ],
      explanation: 'The principle makes openness the default while allowing justified exceptions, for example for data protection, pending patents, or security reasons.',
    },
  },
  {
    id: 'konzepte-8',
    categoryKey: 'konzepte',
    difficulty: 'leicht',
    correct: [2],
    de: {
      question: 'Was beschreibt der Begriff „Dual-Use" in Abwägungen zu Open Science?',
      choices: [
        'Ergebnisse werden bei zwei Zeitschriften parallel eingereicht.',
        'Ein Datensatz wird für zwei unabhängige Studien verwendet.',
        'Forschung könnte sowohl nützlich als auch schädlich genutzt werden.',
        'Zwei Personen teilen sich die Erstautor*innenschaft.',
      ],
      explanation: 'Dual-Use-Bedenken (z. B. bei Biosicherheits- oder KI-Forschung) sind nur in wenigen Feldern real relevant, werden aber gelegentlich pauschal als Einfallstor genutzt, um Offenheit generell einzuschränken.',
    },
    en: {
      question: 'What does the term "dual-use" describe in Open Science trade-offs?',
      choices: [
        'Results are submitted to two journals in parallel.',
        'A dataset is used for two independent studies.',
        'Research could be used for both beneficial and harmful purposes.',
        'Two people share first authorship.',
      ],
      explanation: 'Dual-use concerns (e.g. in biosecurity or AI research) are genuinely relevant only in a few fields, but are occasionally used as a blanket argument to restrict openness in general.',
    },
  },

  // ---- Forschungsfragen & Planung / Research Questions & Planning ----
  {
    id: 'planung-1',
    categoryKey: 'planung',
    difficulty: 'leicht',
    correct: [3],
    de: {
      question: 'Was bezeichnet der Begriff „HARKing"?',
      choices: [
        'Eine statistische Korrektur für multiple Vergleiche.',
        'Die Kombination mehrerer Studien in einer Metaanalyse.',
        'Ein Registrierungsformat für Datenmanagementpläne.',
        'Eine Hypothese wird nach der Datenanalyse so umformuliert, als sei sie vorher aufgestellt worden.',
      ],
      explanation: 'HARK steht für „Hypothesizing After the Results are Known". Es entsteht oft durch Overfitting: Werden viele Modelle an einem Datensatz ausprobiert und im Nachhinein das beste Ergebnis als ursprüngliche Hypothese präsentiert, lässt sich Signal nicht mehr von Rauschen unterscheiden.',
    },
    en: {
      question: 'What does the term "HARKing" describe?',
      choices: [
        'A statistical correction for multiple comparisons.',
        'Combining several studies into a meta-analysis.',
        'A registration format for data management plans.',
        'A hypothesis is reworded after the analysis as if it had been stated beforehand.',
      ],
      explanation: 'HARK stands for "Hypothesizing After the Results are Known". It often arises from overfitting: trying many models on a dataset and presenting the best-fitting one afterward as the original hypothesis makes it impossible to tell signal from noise.',
    },
  },
  {
    id: 'planung-2',
    categoryKey: 'planung',
    difficulty: 'mittel',
    correct: [0],
    de: {
      question: 'Was ist die Kernaussage der von Simmons, Nelson & Simonsohn (2012) vorgeschlagenen „21-Word Solution"?',
      choices: [
        'Eine kurze Selbstverpflichtung zur Offenlegung zentraler methodischer Entscheidungen.',
        'Ein Vorschlag zur einheitlichen Formulierung von Autor*innenschaft.',
        'Ein Kriterienkatalog für FAIR-konforme Datensätze.',
        'Eine Kurzfassung des CRediT-Systems.',
      ],
      explanation: 'Wortlaut sinngemäß: „Wir berichten, wie wir die Stichprobengröße festgelegt haben, alle Datenausschlüsse, alle Manipulationen und alle Messungen der Studie."',
    },
    en: {
      question: 'What is the core idea of the "21-Word Solution" proposed by Simmons, Nelson & Simonsohn (2012)?',
      choices: [
        'A short self-commitment to disclose key methodological decisions.',
        'A proposal for a standardized way of stating authorship.',
        'A criteria checklist for FAIR-compliant datasets.',
        'A condensed version of the CRediT system.',
      ],
      explanation: 'Roughly worded: "We report how we determined our sample size, all data exclusions, all manipulations, and all measures in the study."',
    },
  },
  {
    id: 'planung-3',
    categoryKey: 'planung',
    difficulty: 'mittel',
    correct: [1],
    de: {
      question: 'Die Metapher vom „Garden of Forking Paths" beschreibt in der Methodendiskussion vor allem:',
      choices: [
        'Die Aufteilung eines Forschungsprojekts in mehrere Publikationen.',
        'Die vielen unkontrollierten Analyseoptionen, die falsch-positive Befunde begünstigen.',
        'Die unterschiedlichen Karrierewege nach der Promotion.',
        'Die verschiedenen Peer-Review-Modelle einer Zeitschrift.',
      ],
      explanation: 'Eine gute Präregistrierung „raubt Forschenden alle Freiheitsgrade" (Wicherts et al., 2016) und verhindert, dass im Nachhinein der günstigste von vielen möglichen Analysepfaden gewählt wird.',
    },
    en: {
      question: 'In methodology discussions, the "Garden of Forking Paths" metaphor mainly describes:',
      choices: [
        'Splitting a research project into several publications.',
        'The many uncontrolled analytic choices that favor false-positive findings.',
        'The different career paths after a doctorate.',
        'The different peer-review models a journal can use.',
      ],
      explanation: 'A good preregistration "robs researchers of all their degrees of freedom" (Wicherts et al., 2016), preventing the post-hoc choice of the most favorable among many possible analysis paths.',
    },
  },
  {
    id: 'planung-4',
    categoryKey: 'planung',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Wodurch unterscheidet sich Stage 2 von Stage 1 bei einem Registered Report?',
      choices: [
        'Die Relevanz der Fragestellung wird erneut bewertet.',
        'Sie findet vor der Datenerhebung statt.',
        'Nur die Einhaltung des vorab akzeptierten Plans wird geprüft.',
        'Sie ist optional und nur bei signifikanten Ergebnissen nötig.',
      ],
      explanation: 'Die „in-principle acceptance" nach Stage 1 bindet die Publikationsentscheidung an die Qualität von Fragestellung und Methode statt an das Ergebnis. In Stage 2 wird nur noch geprüft, ob der akzeptierte Plan eingehalten wurde, nicht ob die Ergebnisse „interessant" sind.',
    },
    en: {
      question: 'How does Stage 2 differ from Stage 1 in a Registered Report?',
      choices: [
        'The relevance of the research question is reassessed.',
        'It takes place before data collection.',
        'Only compliance with the previously accepted plan is checked.',
        'It is optional and only needed for significant results.',
      ],
      explanation: 'The "in-principle acceptance" after Stage 1 ties the publication decision to the quality of the question and method rather than the outcome. Stage 2 only checks whether the accepted plan was followed, not whether the results are "interesting".',
    },
  },
  {
    id: 'planung-5',
    categoryKey: 'planung',
    difficulty: 'schwer',
    correct: [1],
    de: {
      question: 'Laut MüCOS-Infomodul boten zum Erhebungszeitpunkt wie viele Zeitschriften das Registered-Report-Format als reguläre oder Sonderausgaben-Option an?',
      choices: ['34', '89', '156', '212'],
      explanation: 'Das MüCOS-Infomodul nennt konkret 89 Zeitschriften, die zu diesem Zeitpunkt Registered Reports anboten.',
    },
    en: {
      question: 'According to the MüCOS module, how many journals offered the Registered Report format (as a regular or special-issue option) at the time of writing?',
      choices: ['34', '89', '156', '212'],
      explanation: 'The MüCOS module cites the specific figure of 89 journals offering Registered Reports at that time.',
    },
  },
  {
    id: 'planung-6',
    categoryKey: 'planung',
    difficulty: 'leicht',
    correct: [3],
    de: {
      question: 'Wann wird ein Datenmanagementplan (DMP) typischerweise erstellt und wofür wird er genutzt?',
      choices: [
        'Er wird erst nach Abschluss der Datenerhebung erstellt, um die Daten zu archivieren.',
        'Er ist nur bei qualitativen Studien nötig.',
        'Er wird ausschließlich von der IT-Abteilung erstellt.',
        'Er entsteht vor Projektbeginn und kann Voraussetzung für eine Förderung sein.',
      ],
      explanation: 'Ein DMP legt vor Projektstart fest, wie mit Daten und Ergebnissen umgegangen wird, und wird bei vielen Drittmittelgebern als Teil des Förderantrags mitbegutachtet.',
    },
    en: {
      question: 'When is a data management plan (DMP) typically created, and what is it used for?',
      choices: [
        'It is created only after data collection ends, to archive the data.',
        'It is only needed for qualitative studies.',
        'It is created exclusively by the IT department.',
        'It is created before the project starts and can be a funding prerequisite.',
      ],
      explanation: 'A DMP is set up before a project begins and is reviewed alongside the funding proposal by many funders.',
    },
  },
  {
    id: 'planung-7',
    categoryKey: 'planung',
    difficulty: 'schwer',
    correct: [0],
    de: {
      question: 'Ein einzelner, exakt spezifizierter Korrelationstest hält die nominelle Falsch-Positiv-Rate von 5% ungefähr ein. Was passiert, wenn stattdessen mehrere naheliegende Analysevarianten (z. B. ein- vs. zweiseitig, Pearson/Spearman/Kendall) ausprobiert und nur der kleinste p-Wert berichtet wird?',
      choices: [
        'Sie kann deutlich über 5% ansteigen.',
        'Sie bleibt bei 5%, da alle Varianten gültige Tests sind.',
        'Sie sinkt, weil mehr Tests die statistische Power erhöhen.',
        'Es entsteht kein Problem, solange am Ende nur ein p-Wert berichtet wird.',
      ],
      explanation: 'Genau das ist die Gefahr unspezifizierter Analysepläne bzw. „researcher degrees of freedom": Simulationen zu diesem Beispiel zeigen einen Anstieg auf über 10%, je nach Zahl der ausprobierten Varianten sogar deutlich mehr.',
    },
    en: {
      question: 'A single, exactly specified correlation test keeps the nominal false-positive rate at roughly 5%. What happens if several plausible analysis variants (e.g. one- vs. two-tailed, Pearson/Spearman/Kendall) are tried instead, and only the smallest p-value is reported?',
      choices: [
        'It can rise well above 5%.',
        'It stays at 5%, since all variants are valid tests.',
        'It decreases, because more tests increase statistical power.',
        'No problem arises as long as only one p-value is reported in the end.',
      ],
      explanation: 'This is exactly the danger of unspecified analysis plans, i.e. "researcher degrees of freedom": simulations of this example show a rise above 10%, and considerably more depending on how many variants are tried.',
    },
  },
  {
    id: 'planung-8',
    categoryKey: 'planung',
    difficulty: 'leicht',
    correct: [1],
    de: {
      question: 'Wie ist „statistische Power" korrekt definiert?',
      choices: [
        'Der Anteil signifikanter Ergebnisse in einer Zeitschrift.',
        'Die Wahrscheinlichkeit, einen real existierenden Effekt einer bestimmten Größe zu entdecken.',
        'Die Wahrscheinlichkeit, dass ein Nullergebnis publiziert wird.',
        'Die Anzahl der Freiheitsgrade eines statistischen Tests.',
      ],
      explanation: 'Statistische Power ist die Wahrscheinlichkeit, einen real existierenden Effekt einer bestimmten Größe mit dem gewählten Studiendesign auch statistisch zu entdecken.',
    },
    en: {
      question: 'What is the correct definition of "statistical power"?',
      choices: [
        'The proportion of significant results in a journal.',
        'The probability of detecting a real effect of a given size.',
        'The probability that a null result gets published.',
        'The number of degrees of freedom of a statistical test.',
      ],
      explanation: 'Statistical power is the probability of statistically detecting a real effect of a given size with the chosen study design.',
    },
  },
  {
    id: 'planung-9',
    categoryKey: 'planung',
    difficulty: 'schwer',
    correct: [2],
    de: {
      question: '72 Forschende schlugen 2018 (Benjamin et al.) vor, das konventionelle Signifikanzniveau für NEUE Entdeckungen zu verschärfen. Von welchem auf welchen Wert?',
      choices: ['von 1% auf 0,1%', 'von 10% auf 5%', 'von 5% auf 0,5%', 'von 5% auf 1%'],
      explanation: 'Der Vorschlag lautete, das Signifikanzniveau für neue Befunde von 5% auf 0,5% zu senken, um die Rate falsch-positiver Entdeckungen zu reduzieren.',
    },
    en: {
      question: 'In 2018, 72 researchers (Benjamin et al.) proposed tightening the conventional significance threshold for NEW discoveries. From which value to which value?',
      choices: ['from 1% to 0.1%', 'from 10% to 5%', 'from 5% to 0.5%', 'from 5% to 1%'],
      explanation: 'The proposal was to lower the significance threshold for new findings from 5% to 0.5%, in order to reduce the rate of false-positive discoveries.',
    },
  },

  // ---- Materialien & Daten / Materials & Data ----
  {
    id: 'materialien-1',
    categoryKey: 'materialien',
    difficulty: 'leicht',
    correct: [2],
    de: {
      question: 'In den FAIR-Prinzipien für Forschungsdaten steht das „A" für „Accessible". Was bedeutet das konkret laut MüCOS-Infomodul?',
      choices: [
        'Daten müssen archiviert, aber nicht öffentlich zugänglich sein.',
        'Daten dürfen nur von autorisierten Personen gelesen werden.',
        'Daten können öffentlich und ohne Kosten geöffnet werden.',
        'Daten müssen ausführlich kommentiert sein.',
      ],
      explanation: 'FAIR steht für Findable, Accessible, Interoperable, Reusable. „Accessible" meint explizit: öffentlich und ohne Kosten zu öffnen.',
    },
    en: {
      question: 'In the FAIR principles for research data, "A" stands for "Accessible". What does this concretely mean per the MüCOS module?',
      choices: [
        'Data must be archived but not publicly accessible.',
        'Data may only be read by authorized persons.',
        'Data can be opened publicly and at no cost.',
        'Data must be extensively commented.',
      ],
      explanation: 'FAIR stands for Findable, Accessible, Interoperable, Reusable. "Accessible" explicitly means: can be opened publicly and free of charge.',
    },
  },
  {
    id: 'materialien-2',
    categoryKey: 'materialien',
    difficulty: 'mittel',
    correct: [3],
    de: {
      question: 'Worin unterscheiden sich die CARE-Prinzipien von den FAIR-Prinzipien?',
      choices: [
        'CARE ersetzt FAIR vollständig und macht es überflüssig.',
        'CARE gilt nur für quantitative, FAIR nur für qualitative Daten.',
        'CARE bezieht sich ausschließlich auf Software, FAIR ausschließlich auf Rohdaten.',
        'CARE betont zusätzlich Nutzen und Kontrolle für die von den Daten betroffenen Gemeinschaften.',
      ],
      explanation: 'CARE steht für Collective Benefit, Authority to Control, Responsibility und Ethics. Es wurde speziell für Daten von bzw. über indigene Gemeinschaften entwickelt und ergänzt die eher technischen FAIR-Prinzipien um eine ethisch-politische Dimension, z. B. bei Hochwassergefahrenkarten oder Bürger*innenbeteiligung.',
    },
    en: {
      question: 'How do the CARE principles differ from the FAIR principles?',
      choices: [
        'CARE fully replaces FAIR and makes it redundant.',
        'CARE applies only to quantitative data, FAIR only to qualitative data.',
        'CARE applies only to software, FAIR only to raw data.',
        'CARE additionally emphasizes benefit for and control by the communities the data concerns.',
      ],
      explanation: 'CARE stands for Collective Benefit, Authority to Control, Responsibility, and Ethics. It was developed specifically for data by or about indigenous communities and adds an ethical-political dimension to the more technical FAIR principles, e.g. in flood-risk maps or citizen participation.',
    },
  },
  {
    id: 'materialien-3',
    categoryKey: 'materialien',
    difficulty: 'schwer',
    correct: [1],
    de: {
      question: 'Die TRUST-Prinzipien richten sich, anders als FAIR, vor allem an wen?',
      choices: [
        'An einzelne Forschende, die ihre Rohdaten benennen.',
        'An Repositorien, die Daten langfristig vertrauenswürdig aufbewahren.',
        'An Zeitschriften, die über Registered Reports entscheiden.',
        'An Ethikkommissionen bei der Prüfung von Studienanträgen.',
      ],
      explanation: 'TRUST steht für Transparency, Responsibility, User focus, Sustainability und Technology. Die Prinzipien richten sich, anders als FAIR (das sich auf Daten selbst bezieht), an digitale Repositorien und Infrastrukturen.',
    },
    en: {
      question: 'Unlike FAIR, the TRUST principles are addressed mainly to whom?',
      choices: [
        'To individual researchers naming their raw data.',
        'To repositories responsible for trustworthy, long-term data storage.',
        'To journals deciding on Registered Reports.',
        'To ethics committees reviewing study applications.',
      ],
      explanation: 'TRUST stands for Transparency, Responsibility, User focus, Sustainability, and Technology. Unlike FAIR (which concerns the data itself), these principles are addressed to digital repositories and infrastructures.',
    },
  },
  {
    id: 'materialien-4',
    categoryKey: 'materialien',
    difficulty: 'schwer',
    correct: [0],
    de: {
      question: 'In der psychologischen Fachsprache bezeichnet „Replikation" (im Unterschied zu „Reproduktion") typischerweise:',
      choices: [
        'Die erneute Datenerhebung mit neuen Daten, um einen Befund zu überprüfen.',
        'Die erneute Analyse derselben Rohdaten mit demselben Code.',
        'Das bloße Kopieren eines Artikels in ein anderes Repositorium.',
        'Eine rein statistische Simulation ohne empirische Daten.',
      ],
      explanation: 'In der Psychologie meint „Reproduktion" das erneute Auswerten derselben Daten (auch „komputationale Reproduzierbarkeit" genannt), während „Replikation" auf neuen Daten beruht. In den Wirtschaftswissenschaften wird „Replication" dagegen oft für beide Fälle verwendet, ein häufiger Quell von Verwirrung zwischen Disziplinen.',
    },
    en: {
      question: 'In psychology terminology, "replication" (as opposed to "reproduction") typically refers to:',
      choices: [
        'Collecting new data to re-test a finding.',
        'Re-analyzing the same raw data with the same code.',
        'Simply copying an article into another repository.',
        'A purely statistical simulation without empirical data.',
      ],
      explanation: 'In psychology, "reproduction" means re-analyzing the same data (also called "computational reproducibility"), while "replication" relies on new data. Economics often uses "replication" for both cases, a frequent source of cross-disciplinary confusion.',
    },
  },
  {
    id: 'materialien-5',
    categoryKey: 'materialien',
    difficulty: 'leicht',
    correct: [2],
    de: {
      question: 'Die „Reproducibility Project: Psychology"-Studie (Open Science Collaboration, 2015) fand, dass ungefähr wie viel Prozent der untersuchten psychologischen Befunde erfolgreich repliziert wurden?',
      choices: ['etwa 90%', 'etwa 65%', 'etwa 50%', 'etwa 20%'],
      explanation: 'Nur rund die Hälfte der überprüften Befunde replizierte erfolgreich, ein zentraler Auslöser der sogenannten Replikationskrise.',
    },
    en: {
      question: 'The "Reproducibility Project: Psychology" study (Open Science Collaboration, 2015) found that roughly what percentage of the examined psychological findings replicated successfully?',
      choices: ['about 90%', 'about 65%', 'about 50%', 'about 20%'],
      explanation: 'Only about half of the examined findings replicated successfully, a key trigger of the so-called replication crisis.',
    },
  },
  {
    id: 'materialien-6',
    categoryKey: 'materialien',
    difficulty: 'mittel',
    correct: [3],
    de: {
      question: 'Bei welcher Form der Replikation testen mehrere unabhängige Labore gleichzeitig denselben Befund mit einem identischen, vorab abgestimmten Protokoll?',
      choices: ['Konzeptuelle Replikation', 'Interne Replikation', 'Close Replication', 'Registered Replication Report'],
      explanation: 'Eine Registered Replication Report (RRR) koordiniert viele Standorte mit demselben Protokoll gleichzeitig. Close Replication nutzt ähnliche Methoden, aber unabhängig geplant; konzeptuelle Replikation testet dieselbe Hypothese bewusst mit anderen Methoden; interne Replikation erfolgt innerhalb derselben Publikation durch dieselbe Gruppe.',
    },
    en: {
      question: 'In which form of replication do several independent labs simultaneously test the same finding using an identical, pre-agreed protocol?',
      choices: ['Conceptual replication', 'Internal replication', 'Close replication', 'Registered Replication Report'],
      explanation: 'A Registered Replication Report (RRR) coordinates many sites running the same protocol at the same time. Close replication uses similar methods but is planned independently; conceptual replication deliberately tests the same hypothesis with different methods; internal replication happens within the same publication by the same group.',
    },
  },
  {
    id: 'materialien-7',
    categoryKey: 'materialien',
    difficulty: 'mittel',
    correct: [0],
    de: {
      question: 'Was macht der Dienst CODECHECK?',
      choices: [
        'Er prüft community-basiert, ob veröffentlichter Code die Ergebnisse reproduziert.',
        'Er prüft automatisiert die sprachliche Qualität von Manuskripten.',
        'Er vergibt automatisch DOIs für Preprints.',
        'Er ist ein eigenes Peer-Review-Modell für qualitative Forschung.',
      ],
      explanation: 'CODECHECK ist ein community-getragener Dienst, der prüft, ob veröffentlichter Code die berichteten Ergebnisse tatsächlich reproduziert; zertifizierte Berichte werden öffentlich gemacht (z. B. auf Zenodo).',
    },
    en: {
      question: 'What does the CODECHECK service do?',
      choices: [
        'It uses community reviewers to check whether published code reproduces the results.',
        'It automatically checks the language quality of manuscripts.',
        'It automatically assigns DOIs to preprints.',
        'It is a standalone peer-review model for qualitative research.',
      ],
      explanation: 'CODECHECK is a community-run service that checks whether published code actually reproduces the reported results; certified reports are made publicly available (e.g. on Zenodo).',
    },
  },
  {
    id: 'materialien-8',
    categoryKey: 'materialien',
    difficulty: 'leicht',
    correct: [1],
    de: {
      question: 'Was gehört idealerweise zu einem vollständigen „Replication Package" zu einem quantitativen Artikel?',
      choices: [
        'Nur der finale, aufbereitete Datensatz, ohne Code.',
        'Rohdaten, Analysecode und ein Codebook zur eigenständigen Reproduktion.',
        'Ausschließlich das PDF des veröffentlichten Artikels.',
        'Eine Liste aller Ko-Autor*innen mit Kontaktdaten.',
      ],
      explanation: 'Ein Replication Package soll es Dritten ermöglichen, die berichteten Ergebnisse ohne Rückfrage bei den Autor*innen nachzuvollziehen, idealerweise „auf Knopfdruck" (Push-Button-Replicability).',
    },
    en: {
      question: 'What ideally belongs in a complete "replication package" for a quantitative article?',
      choices: [
        'Only the final, processed dataset, without code.',
        'Raw data, analysis code, and a codebook enabling independent reproduction.',
        'Only the PDF of the published article.',
        'A list of all co-authors with contact details.',
      ],
      explanation: 'A replication package should let others reproduce the reported results without contacting the authors, ideally "at the push of a button" (push-button replicability).',
    },
  },
  {
    id: 'materialien-9',
    categoryKey: 'materialien',
    difficulty: 'leicht',
    correct: [2],
    de: {
      question: 'Was bewirken „Open Science Badges" (z. B. für Open Data, Open Materials, Preregistration) auf einem Artikel?',
      choices: [
        'Sie ersetzen den Peer-Review-Prozess vollständig.',
        'Sie werden automatisch vergeben, ohne dass eine Prüfung stattfindet.',
        'Sie kennzeichnen sichtbar nachprüfbar eingehaltene Open-Science-Praktiken.',
        'Sie zeigen an, wie oft ein Artikel zitiert wurde.',
      ],
      explanation: 'Badges signalisieren Leser*innen auf einen Blick, dass geprüfte Kriterien erfüllt sind, etwa Daten mit persistentem Identifier.',
    },
    en: {
      question: 'What do "Open Science Badges" (e.g. for Open Data, Open Materials, Preregistration) signal on an article?',
      choices: [
        'They fully replace the peer-review process.',
        'They are awarded automatically, without any check.',
        'They visibly mark verifiably followed Open Science practices.',
        'They show how often an article has been cited.',
      ],
      explanation: 'Badges signal to readers at a glance that checked criteria are met, for instance data deposited with a persistent identifier.',
    },
  },
  {
    id: 'materialien-10',
    categoryKey: 'materialien',
    difficulty: 'leicht',
    correct: [3],
    de: {
      question: 'Was regelt die Lizenz, unter der geteilte Forschungsmaterialien veröffentlicht werden (z. B. CC BY, CC0)?',
      choices: [
        'Ob die Daten FAIR-konform sind.',
        'Wie lange ein Repositorium die Daten mindestens speichern muss.',
        'Ob ein Peer-Review-Verfahren nötig ist.',
        'Ob Materialien genannt, verändert oder kommerziell genutzt werden dürfen.',
      ],
      explanation: 'Lizenzen regeln Nennungspflicht, Bearbeitungs- und kommerzielle Nutzungsrechte, unabhängig davon, ob die Daten FAIR sind oder wie lange sie archiviert werden.',
    },
    en: {
      question: 'What does the license under which shared research materials are published (e.g. CC BY, CC0) regulate?',
      choices: [
        'Whether the data is FAIR-compliant.',
        'How long a repository must retain the data at minimum.',
        'Whether a peer-review process is required.',
        'Whether materials may be credited, modified, or used commercially.',
      ],
      explanation: 'Licenses govern attribution requirements and modification/commercial-use rights, independently of whether the data is FAIR or how long it is archived.',
    },
  },

  // ---- Veröffentlichung / Publication ----
  {
    id: 'veroeffentlichung-1',
    categoryKey: 'veroeffentlichung',
    difficulty: 'schwer',
    correct: [1],
    de: {
      question: 'Bei welchem Open-Access-Typ fallen für die Autor*innen keine Publikationsgebühren an und die Artikel sind sofort frei verfügbar?',
      choices: ['Gold Open Access', 'Diamond Open Access', 'Hybrid Open Access', 'Green Open Access über eine Moving Wall'],
      explanation: 'Diamond Open Access: sofort frei verfügbar, keine Article Processing Charges. Bei Gold OA zahlen die Autor*innen; Hybrid ist abo-basiert mit optionaler Freischaltung; eine Moving Wall setzt eine Embargofrist voraus.',
    },
    en: {
      question: 'In which Open Access type do authors pay no publication fees AND articles are immediately freely available?',
      choices: ['Gold Open Access', 'Diamond Open Access', 'Hybrid Open Access', 'Green Open Access via a moving wall'],
      explanation: 'Diamond Open Access: immediately free, no article processing charges. Gold OA requires author payment; Hybrid is subscription-based with optional paid access; a moving wall requires an embargo period.',
    },
  },
  {
    id: 'veroeffentlichung-2',
    categoryKey: 'veroeffentlichung',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Was bezeichnet „Green Open Access"?',
      choices: [
        'Bezahlung durch Autor*innen für sofortige freie Verfügbarkeit.',
        'Eine Zeitschrift, die ausschließlich zu Umweltthemen veröffentlicht.',
        'Das Selbstarchivieren einer Manuskriptversion durch die Autor*innen, unabhängig vom Zeitschriftenmodell.',
        'Ein Peer-Review-Modell mit anonymen Gutachten.',
      ],
      explanation: 'Green OA nutzt das Zweitveröffentlichungsrecht der Autor*innen, etwa auf der eigenen Website oder einem Repositorium, unabhängig davon, ob die Zeitschrift selbst Open Access anbietet.',
    },
    en: {
      question: 'What does "Green Open Access" refer to?',
      choices: [
        'Authors paying for immediate free availability.',
        'A journal that publishes exclusively on environmental topics.',
        'Authors self-archiving a manuscript version, independent of the journal\'s own model.',
        'A peer-review model with anonymous reviews.',
      ],
      explanation: 'Green OA relies on authors\' secondary-publication rights, e.g. on their own website or a repository, regardless of whether the journal itself offers open access.',
    },
  },
  {
    id: 'veroeffentlichung-3',
    categoryKey: 'veroeffentlichung',
    difficulty: 'mittel',
    correct: [0],
    de: {
      question: 'Warum wird Hybrid Open Access im MüCOS-Material kritisch bewertet („Double Dipping")?',
      choices: [
        'Die Universität zahlt sowohl das Zeitschriften-Abonnement als auch die Open-Access-Gebühr.',
        'Autor*innen werden bei Hybrid-Zeitschriften zweimal begutachtet.',
        'Hybrid-Zeitschriften führen grundsätzlich keine Peer-Review durch.',
        'Zwei Autor*innen müssen sich die Publikationskosten teilen.',
      ],
      explanation: 'Double Dipping bedeutet: Die Institution zahlt einmal für das Abonnement der gesamten Zeitschrift und ein zweites Mal, damit einzelne Artikel frei zugänglich werden.',
    },
    en: {
      question: 'Why is Hybrid Open Access criticized in the MüCOS material as "double dipping"?',
      choices: [
        'The university pays both the journal subscription and the open access fee.',
        'Authors at hybrid journals are reviewed twice.',
        'Hybrid journals fundamentally do not conduct peer review.',
        'Two authors must split the publication costs.',
      ],
      explanation: 'Double dipping means the institution pays once for the whole-journal subscription and a second time so that individual articles become freely accessible.',
    },
  },
  {
    id: 'veroeffentlichung-4',
    categoryKey: 'veroeffentlichung',
    difficulty: 'leicht',
    correct: [1],
    de: {
      question: 'Was ermöglicht der DEAL-Konsortialvertrag deutschen Forschenden?',
      choices: [
        'Kostenlosen Zugang zu allen internationalen Literaturdatenbanken.',
        'Bundesweit ausgehandelte, kostenfreie Open-Access-Konditionen bei Vertragsverlagen.',
        'Eine verpflichtende Nutzung ausschließlich von Diamond-Open-Access-Zeitschriften.',
        'Eine automatische Begutachtung im Registered-Report-Format.',
      ],
      explanation: 'DEAL bündelt die Verhandlungsmacht deutscher Wissenschaftsorganisationen gegenüber großen Verlagen, um Open-Access-Publizieren ohne individuelle Zusatzkosten zu ermöglichen.',
    },
    en: {
      question: 'What does the DEAL consortium agreement enable for German researchers?',
      choices: [
        'Free access to all international literature databases.',
        'Nationally negotiated, no-extra-cost open access conditions at partner publishers.',
        'A mandatory requirement to use only Diamond Open Access journals.',
        'Automatic review under the Registered Report format.',
      ],
      explanation: 'DEAL pools the negotiating power of German research organizations against large publishers to enable open-access publishing without individual extra costs.',
    },
  },
  {
    id: 'veroeffentlichung-5',
    categoryKey: 'veroeffentlichung',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Wofür wurde das CRediT-System (Contributor Roles Taxonomy) eingeführt?',
      choices: [
        'Um die klassische Autor*innenreihenfolge durch eine rein alphabetische Sortierung zu ersetzen.',
        'Um Peer-Reviewer*innen anhand ihrer Gutachten zu benoten.',
        'Um Beiträge zu einer Publikation über standardisierte Rollen differenziert zu dokumentieren.',
        'Um automatisch den Journal Impact Factor einer Zeitschrift zu berechnen.',
      ],
      explanation: 'CRediT (Holcombe, 2019) macht einzelne Beiträge sichtbar, etwa Statistik, Datenerhebung oder Konzeption, statt einer pauschalen „Autor*innenschaft" und wirkt so gegen Ehrenautor*innenschaften.',
    },
    en: {
      question: 'Why was the CRediT system (Contributor Roles Taxonomy) introduced?',
      choices: [
        'To replace the traditional author order with purely alphabetical sorting.',
        'To grade peer reviewers based on their reviews.',
        'To document contributions to a publication in a differentiated way via standardized roles.',
        'To automatically calculate a journal\'s Impact Factor.',
      ],
      explanation: 'CRediT (Holcombe, 2019) makes individual contributions visible, such as statistics, data collection, or conceptualization, instead of a blanket "authorship", helping counter honorary authorship.',
    },
  },
  {
    id: 'veroeffentlichung-6',
    categoryKey: 'veroeffentlichung',
    difficulty: 'mittel',
    correct: [3],
    de: {
      question: 'Bei welchem Peer-Review-Modell ist die Qualitätskontrolle am transparentesten nachvollziehbar?',
      choices: [
        'Gutachten bleiben grundsätzlich vertraulich.',
        'Gutachten werden nur bei Annahme des Artikels veröffentlicht.',
        'Gutachten werden nur auf explizite Anfrage der Autor*innen offengelegt.',
        'Gutachten werden unabhängig vom Ausgang, Annahme oder Ablehnung, veröffentlicht.',
      ],
      explanation: 'Nur wenn Gutachten unabhängig vom Ergebnis veröffentlicht werden, ist die Qualitätskontrolle vollständig nachvollziehbar. Das verbreitete „Open Peer Review" (Veröffentlichung nur bei Annahme) gilt im Kursmaterial als „nur halb passender Name", da abgelehnte Artikel unrevidiert anderswo eingereicht werden können.',
    },
    en: {
      question: 'In which peer-review model is quality control most transparently traceable?',
      choices: [
        'Reviews remain confidential in principle.',
        'Reviews are published only if the article is accepted.',
        'Reviews are disclosed only at the authors\' explicit request.',
        'Reviews are published regardless of the outcome, acceptance or rejection.',
      ],
      explanation: 'Only when reviews are published regardless of outcome is quality control fully traceable. The widespread "Open Peer Review" (published only upon acceptance) is called a "half-fitting name" in the course material, since rejected articles can be resubmitted elsewhere unrevised.',
    },
  },
  {
    id: 'veroeffentlichung-7',
    categoryKey: 'veroeffentlichung',
    difficulty: 'schwer',
    correct: [0],
    de: {
      question: 'Beim Publish-Review-Curate-Modell (PRC), z. B. über Peer Community In (PCI), in welcher Reihenfolge laufen die Schritte ab?',
      choices: [
        'Erst Preprint, dann Begutachtung, dann Kuratierung durch Zeitschriften.',
        'Erst Begutachtung durch eine Zeitschrift, dann Preprint, dann Kuratierung.',
        'Erst Kuratierung, dann Begutachtung, dann Preprint.',
        'Alle drei Schritte laufen zeitgleich ab.',
      ],
      explanation: 'PRC kehrt die klassische Reihenfolge um: publish → review → curate. Preprints erhalten über PCI eine positive Begutachtung und können danach ohne weitere Review bei „PCI-freundlichen" Zeitschriften veröffentlicht werden.',
    },
    en: {
      question: 'In the Publish-Review-Curate (PRC) model, e.g. via Peer Community In (PCI), in what order do the steps happen?',
      choices: [
        'First preprint, then review, then curation by journals.',
        'First journal review, then preprint, then curation.',
        'First curation, then review, then preprint.',
        'All three steps happen simultaneously.',
      ],
      explanation: 'PRC reverses the classic order: publish → review → curate. Preprints receive a positive review via PCI and can then be published without further review at "PCI-friendly" journals.',
    },
  },
  {
    id: 'veroeffentlichung-8',
    categoryKey: 'veroeffentlichung',
    difficulty: 'mittel',
    correct: [1],
    de: {
      question: 'Was bedeutet „Results-blind Peer Review"?',
      choices: [
        'Gutachtende kennen weder die Namen der Autor*innen noch der Institution.',
        'Die Begutachtung erfolgt, ohne dass die Gutachtenden die Ergebnisse kennen.',
        'Es findet gar keine Begutachtung statt.',
        'Nur die Ergebnisse, nicht aber Methode oder Einleitung, werden begutachtet.',
      ],
      explanation: 'Results-blind Review bewertet Fragestellung und Methodik, bevor die Ergebnisse bekannt sind, ähnlich der Logik von Registered Reports, aber ohne den vollen Stage-1/Stage-2-Prozess.',
    },
    en: {
      question: 'What does "results-blind peer review" mean?',
      choices: [
        'Reviewers know neither the authors\' names nor their institution.',
        'The review happens without reviewers knowing the results.',
        'No review takes place at all.',
        'Only the results, not the method or introduction, are reviewed.',
      ],
      explanation: 'Results-blind review assesses the question and methodology before the results are known, similar to the logic of Registered Reports but without the full Stage 1/Stage 2 process.',
    },
  },
  {
    id: 'veroeffentlichung-9',
    categoryKey: 'veroeffentlichung',
    difficulty: 'leicht',
    correct: [2],
    de: {
      question: 'Was ist PubPeer?',
      choices: [
        'Ein Repositorium für Registered Reports.',
        'Ein automatisches Tool zur FAIR-Prüfung von Datensätzen.',
        'Eine Plattform für öffentliche, ggf. anonyme Kommentare zu veröffentlichten Artikeln.',
        'Der offizielle Retraction-Prozess großer Verlage.',
      ],
      explanation: 'PubPeer ermöglicht es, nach der Veröffentlichung Kommentare zu einem Artikel zu hinterlassen, teils anonym, und ist so ein Instrument der nachträglichen Qualitätskontrolle.',
    },
    en: {
      question: 'What is PubPeer?',
      choices: [
        'A repository for Registered Reports.',
        'An automated tool for checking FAIR compliance of datasets.',
        'A platform for public, sometimes anonymous, comments on published articles.',
        'The official retraction process used by large publishers.',
      ],
      explanation: 'PubPeer lets people leave comments on an article after publication, sometimes anonymously, serving as a tool for post-publication quality control.',
    },
  },
  {
    id: 'veroeffentlichung-10',
    categoryKey: 'veroeffentlichung',
    difficulty: 'schwer',
    correct: [1, 3, 4],
    de: {
      question: 'Welche der folgenden Open-Access-Typen werden im MüCOS-Material aufgrund von Kosten- bzw. Fairness-Bedenken kritisch bewertet? (Mehrere Antworten möglich.)',
      choices: ['Diamond', 'Hybrid', 'Green', 'Moving Wall', 'Promotional'],
      explanation: 'Diamond und Green gelten als positiv. Hybrid wird wegen „Double Dipping" kritisiert, Moving Wall wegen der Verzögerung des freien Zugangs, und Promotional wird als „Open Washing" bezeichnet.',
    },
    en: {
      question: 'Which of the following Open Access types are viewed critically in the MüCOS material due to cost or fairness concerns? (Multiple answers possible.)',
      choices: ['Diamond', 'Hybrid', 'Green', 'Moving Wall', 'Promotional'],
      explanation: 'Diamond and Green are viewed positively. Hybrid is criticized for "double dipping", Moving Wall for delaying free access, and Promotional is labeled "open washing".',
    },
  },

  // ---- Kommunikation / Communication ----
  {
    id: 'kommunikation-1',
    categoryKey: 'kommunikation',
    difficulty: 'leicht',
    correct: [1],
    de: {
      question: 'Was ist eine „Lay Summary"?',
      choices: [
        'Eine verkürzte Zusammenfassung für Fachkolleg*innen.',
        'Eine für Laien verständliche Zusammenfassung eines Forschungsartikels.',
        'Ein Peer-Review-Gutachten.',
        'Ein rechtlicher Haftungsausschluss.',
      ],
      explanation: 'Lay Summaries übersetzen Fachartikel in allgemeinverständliche Sprache für eine breitere Öffentlichkeit.',
    },
    en: {
      question: 'What is a "lay summary"?',
      choices: [
        'A condensed summary for fellow specialists.',
        'A plain-language summary of a research article for non-experts.',
        'A peer-review report.',
        'A legal disclaimer.',
      ],
      explanation: 'Lay summaries translate academic articles into plain language for a broader public.',
    },
  },
  {
    id: 'kommunikation-2',
    categoryKey: 'kommunikation',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Welche Klarstellung macht das Kursmaterial ausdrücklich zu Citizen Science?',
      choices: [
        'Laien widerlegen dabei eigenständig professionelle Forschung.',
        'Citizen Science ist ausschließlich in den Naturwissenschaften zulässig.',
        'Bürger*innen erhalten unter Anleitung Einblick und tragen zur Wissensgenerierung bei.',
        'Citizen Science ersetzt die Notwendigkeit eines Ethikantrags.',
      ],
      explanation: 'Die Klarstellung richtet sich gegen ein Missverständnis, wonach Citizen Science Laien in Konkurrenz zur „klassischen" Forschung setzt. Tatsächlich geht es um begleitete Teilhabe am Forschungsprozess.',
    },
    en: {
      question: 'What clarification does the course material explicitly make about citizen science?',
      choices: [
        'That laypeople independently refute professional research.',
        'That citizen science is only permitted in the natural sciences.',
        'That citizens gain guided insight and contribute to knowledge generation.',
        'That citizen science removes the need for ethics approval.',
      ],
      explanation: 'The clarification pushes back against a misunderstanding that citizen science pits laypeople against "classical" research. It actually means guided participation in the research process.',
    },
  },
  {
    id: 'kommunikation-3',
    categoryKey: 'kommunikation',
    difficulty: 'leicht',
    correct: [3],
    de: {
      question: 'Welches der folgenden ist ein im Kurs genanntes Citizen-Science-Beispiel?',
      choices: [
        'Ein Peer-Review-Verfahren für studentische Abschlussarbeiten.',
        'Eine automatisierte FAIR-Prüfung von Forschungsdaten.',
        'Ein Zitationsindex für Fachzeitschriften.',
        'Ein Bürger*innen-Projekt zum ferngesteuerten Betrieb von Weltraumteleskopen.',
      ],
      explanation: 'Weitere genannte Beispiele sind das Liebesbriefarchiv (linguistisch-kulturhistorische Auswertung durch Bürger*innen) und das Portal mitforschen.org.',
    },
    en: {
      question: 'Which of the following is a citizen-science example named in the course?',
      choices: [
        'A peer-review process for student theses.',
        'An automated FAIR check for research data.',
        'A citation index for academic journals.',
        'A citizen project remotely operating space telescopes.',
      ],
      explanation: 'Other examples named include a love-letter archive (linguistic and cultural analysis by citizens) and the mitforschen.org portal.',
    },
  },
  {
    id: 'kommunikation-4',
    categoryKey: 'kommunikation',
    difficulty: 'leicht',
    correct: [0],
    de: {
      question: 'Was zeichnet Open Educational Resources (OER) am ehesten aus?',
      choices: [
        'Lehrmaterialien, die frei zugänglich bzw. nutzbar sind.',
        'Ausschließlich staatlich geprüfte Schulbücher.',
        'Lehrmaterialien, die nur an der eigenen Universität verwendet werden dürfen.',
        'Forschungsdaten, die im Unterricht analysiert werden.',
      ],
      explanation: 'OER umfasst ein breites Spektrum an Lehrmaterialien (Bücher, Folien, Erklärvideos), deren gemeinsames Merkmal die freie Zugänglichkeit bzw. Nutzbarkeit ist.',
    },
    en: {
      question: 'What best characterizes Open Educational Resources (OER)?',
      choices: [
        'Teaching materials that are freely accessible or usable.',
        'Only state-approved textbooks.',
        'Teaching materials restricted to use at one\'s own university.',
        'Research data analyzed in class.',
      ],
      explanation: 'OER spans a broad range of teaching materials (books, slides, explainer videos) whose common feature is free accessibility or usability.',
    },
  },
  {
    id: 'kommunikation-5',
    categoryKey: 'kommunikation',
    difficulty: 'schwer',
    correct: [1],
    de: {
      question: 'Welches Spannungsfeld beschreibt das Kursmaterial bei der öffentlichen Kommunikation von Wissenschaftsproblemen (z. B. Replikationskrise)?',
      choices: [
        'Es gibt keinen Unterschied zwischen interner und externer Kommunikation.',
        'Offene Selbstkritik ist intern nötig, kann öffentlich aber Vertrauen kosten.',
        'Öffentliche Kommunikation über Probleme in der Wissenschaft ist grundsätzlich untersagt.',
        'Nur Fachzeitschriften dürfen über Reproduzierbarkeitsprobleme berichten.',
      ],
      explanation: 'Die Herausforderung besteht darin, Probleme intern klar zu benennen, ohne dass eine unreflektierte öffentliche Darstellung fälschlich den Eindruck erweckt, Wissenschaft sei grundsätzlich unzuverlässig, obwohl gerade die Fähigkeit zur Selbstkorrektur ein Vertrauensargument ist.',
    },
    en: {
      question: 'What tension does the course material describe regarding public communication of problems in science (e.g. the replication crisis)?',
      choices: [
        'There is no difference between internal and external communication.',
        'Open self-criticism is necessary internally but can damage public trust.',
        'Public communication about problems in science is categorically forbidden.',
        'Only academic journals are allowed to report on reproducibility problems.',
      ],
      explanation: 'The challenge is naming problems clearly internally without an unreflective public account creating the false impression that science is generally unreliable, when the capacity for self-correction is itself a reason for trust.',
    },
  },
  {
    id: 'kommunikation-6',
    categoryKey: 'kommunikation',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Wie lange garantieren Zenodo bzw. OSF laut Kursmaterial mindestens die Verfügbarkeit archivierter Materialien?',
      choices: ['10 bzw. 25 Jahre', '2 bzw. 5 Jahre', '20 bzw. 50 Jahre', '15 bzw. 30 Jahre'],
      explanation: 'Zenodo und OSF garantieren laut Kursmaterial die Verfügbarkeit für mindestens 20 bzw. 50 Jahre, relevant auch für die langfristige Verfügbarkeit von OER.',
    },
    en: {
      question: 'According to the course material, for how long do Zenodo and OSF, respectively, guarantee the availability of archived materials at minimum?',
      choices: ['10 and 25 years', '2 and 5 years', '20 and 50 years', '15 and 30 years'],
      explanation: 'Per the course material, Zenodo and OSF guarantee availability for at least 20 and 50 years respectively, also relevant to the long-term availability of OER.',
    },
  },

  // ---- Praxis an der Universität Münster / Practice at the University of Münster ----
  {
    id: 'praxis-1',
    categoryKey: 'praxis',
    difficulty: 'leicht',
    correct: [0],
    de: {
      question: 'An wen wenden Sie sich an der Universität Münster bei Fragen zur Präregistrierung oder zu Registered Reports?',
      choices: ['MüCOS', 'Stabsstelle Datenschutz', 'Arbeitsstelle Forschungstransfer', 'Koordination Diversity'],
      explanation: 'MüCOS (Münster Center for Open Science) ist Ansprechpartner für Präregistrierung, Registered Reports und weitere Open-Science-Praktiken entlang des Forschungszyklus.',
    },
    en: {
      question: 'At the University of Münster, who do you contact with questions about preregistration or Registered Reports?',
      choices: ['MüCOS', 'Data Protection Office', 'Research Transfer Office', 'Diversity Coordination'],
      explanation: 'MüCOS (Münster Center for Open Science) is the contact point for preregistration, Registered Reports, and other Open Science practices across the research cycle.',
    },
  },
  {
    id: 'praxis-2',
    categoryKey: 'praxis',
    difficulty: 'mittel',
    correct: [1],
    de: {
      question: 'Wer ist an der Universität Münster die zentrale Anlaufstelle für Fragen zu Open Data und Forschungsdatenmanagement?',
      choices: ['MüCOS', 'Service Center for Data Management', 'Ethikräte der Fachbereiche', 'Vertrauensperson des Senats'],
      explanation: 'Das Service Center for Data Management berät konkret zu Forschungsdatenmanagement, etwa zur FAIR-Aufbereitung von Daten.',
    },
    en: {
      question: 'At the University of Münster, who is the central contact point for questions on open data and research data management?',
      choices: ['MüCOS', 'Service Center for Data Management', 'Faculty ethics boards', 'Senate ombudsperson'],
      explanation: 'The Service Center for Data Management advises specifically on research data management, e.g. FAIR-compliant data preparation.',
    },
  },
  {
    id: 'praxis-3',
    categoryKey: 'praxis',
    difficulty: 'mittel',
    correct: [2],
    de: {
      question: 'Verstöße gegen gute wissenschaftliche Praxis (GWP) werden an der Universität Münster von wem untersucht bzw. sanktioniert?',
      choices: ['Der Pressestelle', 'Dem Prüfungsamt', 'Einer Vertrauensperson bzw. Untersuchungskommission des Senats', 'Der Stabsstelle Datenschutz'],
      explanation: 'Für Verstöße gegen gute wissenschaftliche Praxis existiert ein geregeltes Verfahren über eine Vertrauensperson bzw. eine Untersuchungskommission des Senats.',
    },
    en: {
      question: 'At the University of Münster, who investigates or sanctions violations of good scientific practice?',
      choices: ['The press office', 'The examinations office', 'A Senate ombudsperson or investigation committee', 'The Data Protection Office'],
      explanation: 'Violations of good scientific practice go through a formal procedure involving a Senate ombudsperson or investigation committee.',
    },
  },
  {
    id: 'praxis-4',
    categoryKey: 'praxis',
    difficulty: 'leicht',
    correct: [3],
    de: {
      question: 'Wer berät an der Universität Münster zu Fragen der Anonymisierung und zum Datenschutz von Forschungsdaten?',
      choices: ['MüCOS', 'Die Koordination Diversity', 'Die Arbeitsstelle Forschungstransfer', 'Die Stabsstelle Datenschutz'],
      explanation: 'Datenschutzrechtliche Fragen zu Forschungsdaten werden von der Stabsstelle Datenschutz geklärt.',
    },
    en: {
      question: 'At the University of Münster, who advises on anonymization and data protection for research data?',
      choices: ['MüCOS', 'Diversity Coordination', 'Research Transfer Office', 'Data Protection Office'],
      explanation: 'Data-protection questions regarding research data are handled by the Data Protection Office.',
    },
  },
];
