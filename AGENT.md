# AGENT.md

## Geltungsbereich

Diese Datei gilt für das gesamte Repository. Untergeordnete `AGENT.md`-Dateien dürfen Regeln für ihren Ordner ergänzen, aber nicht die Grundsätze dieses Dokuments abschwächen.

## Projektauftrag

Das **Australian Labradoodle Handbuch** ist ein kostenloser, nicht kommerzieller und praxisnaher Begleiter für eine Person, die einen jungen Welpen im Alter von ungefähr 8 bis 16 Wochen betreut.

Das Projekt soll keine allgemeine Enzyklopädie und kein kommerzielles Produkt werden. Es soll im konkreten Alltag helfen. Eine Person mit einem jammernden, beißenden oder unruhigen Welpen soll auf dem Smartphone möglichst innerhalb von 15 Sekunden den passenden Einstieg finden.

## Prioritäten

Bei jeder Änderung gilt folgende Reihenfolge:

1. fachliche Sicherheit und Aktualität,
2. konkrete Hilfe im Alltag,
3. mobile Lesbarkeit,
4. verständliche Navigation,
5. visuelle Konsistenz,
6. technische Einfachheit.

Neue Funktionen sind nur sinnvoll, wenn sie einem aktuellen Nutzerproblem dienen. Keine Erweiterung allein für technische Eleganz, Marketing oder mögliche spätere Monetarisierung.

## Bestehende technische Architektur

- Statisches HTML, CSS und Vanilla JavaScript.
- Veröffentlichung direkt über GitHub Pages.
- Kein Build-Schritt.
- Kein Framework einführen, sofern dies nicht ausdrücklich verlangt wird.
- Bestehende Dateinamen und URLs nicht ohne zwingenden Grund ändern.
- Tagesseiten: `tag-1.html` bis `tag-4.html`.
- Wochenseiten: `woche-1.html` bis `woche-4.html`.
- Gemeinsame Styles und Scripts bevorzugen statt Inline-Duplikaten.
- Illustrationen befinden sich unter `assets/illustrations/`.

## Sicherheitsregel vor jeder Änderung

Vor dem Bearbeiten:

1. relevante Dateien vollständig lesen,
2. bestehende Klassen, IDs und Linkziele prüfen,
3. keine vermutete Struktur überschreiben,
4. bei größeren Änderungen einen kleinen, überprüfbaren Plan erstellen.

Nach dem Bearbeiten:

1. alle veränderten internen Links prüfen,
2. Tag- und Wochenkarten auf der Startseite testen,
3. mobile Darstellung bei ungefähr 320 px, 375 px und 768 px Breite prüfen,
4. Browser-Konsole auf Fehler prüfen,
5. sicherstellen, dass GitHub Pages ohne Build-Schritt funktioniert.

## Definition of Done

Eine Änderung ist erst fertig, wenn:

- die betreffende Seite auf Mobilgeräten lesbar ist,
- sämtliche neuen Links funktionieren,
- keine bestehende Seite oder Navigation beschädigt wurde,
- Bilder einen sinnvollen `alt`-Text besitzen oder bei rein dekorativer Funktion `alt=""` verwenden,
- interaktive Elemente mit Tastatur bedienbar sind,
- Touch-Ziele mindestens ungefähr 44 × 44 px groß sind,
- keine horizontale Scrollleiste auf schmalen Displays entsteht,
- neue fachliche Aussagen durch etablierte Quellen gedeckt sind,
- der Inhalt konkrete Handlungen statt nur Theorie bietet.

## Inhaltliche Grundsätze

Empfehlungen müssen sich an moderner, belohnungsbasierter Lerntheorie und etablierten veterinärmedizinischen beziehungsweise verhaltensmedizinischen Leitlinien orientieren.

Bevorzugte Primär- und Fachquellen:

- AVSAB für Training, Verhalten und Sozialisation,
- WSAVA für Ernährung, Körperzustand und Impfgrundlagen,
- Fear Free für stressarmes Handling und kooperative Pflege,
- ESCCAP für Parasitenmanagement,
- offizielle Veterinär- und Tierschutzstellen,
- ALAA ausschließlich für rassespezifische Größen- und Standardangaben.

Praktische Programme oder Trainerquellen dürfen ergänzen, aber nie alleinige Grundlage für gesundheitliche oder verhaltensmedizinische Aussagen sein.

Bei Informationen, die sich ändern können, vor dem Schreiben aktuelle Quellen prüfen. Quellenstand und Abrufdatum bei größeren Fachartikeln dokumentieren.

## Nicht zulässige Inhalte

- Dominanz- oder Rangordnungsmythen als Trainingsgrundlage,
- „Alpha“-Methoden im Sinne von Einschüchterung oder Unterwerfung,
- Leinenruck, körperliche Korrekturen, Schnauzengriff, Festhalten bis zur Aufgabe,
- absichtliches Ignorieren von Panik,
- Strafe bei Unfällen im Haus,
- medizinische Diagnosen aus der Ferne,
- pauschale Gewichtsangaben ohne Größenklasse und Körperzustand,
- erfundene rechtliche Pflichten oder kantonale Regeln,
- formelle „Tierarztfreigabe“ als Voraussetzung für alltägliche Welpenübungen.

## Schreibstil

Schreibe auf Deutsch, ruhig, freundlich und direkt.

Bevorzugt:

- kurze Absätze,
- konkrete Beispiele,
- klare Zeit- oder Schrittangaben,
- realistische Erwartungen,
- eine Handlung pro Schritt,
- verständliche Wörter statt Fachjargon.

Vermeide:

- lange theoretische Einleitungen,
- Schuldzuweisungen,
- absolute Garantien,
- dramatisierende Formulierungen,
- unnötige Wiederholungen,
- Formulierungen wie „der Welpe muss einfach lernen, dass …“, wenn der Trainingsweg nicht erklärt wird.

## Standardstruktur für Szenarien

Neue Alltagsszenarien verwenden möglichst diese Reihenfolge:

1. `📍 Situation` – ein realistisches Beispiel,
2. `🤔 Warum passiert das?` – kurze Erklärung,
3. `✅ So gehst du vor` – konkrete Schritte,
4. `❌ Vermeiden` – typische Fehler,
5. `🐶 Australian-Labradoodle-Tipp` – nur wenn wirklich rassespezifisch,
6. `💡 Merksatz` – ein kurzer, handlungsrelevanter Satz,
7. `⚠️ Wann Hilfe nötig ist` – nur wenn fachlich relevant,
8. Quellenhinweis.

Nicht jeder Artikel benötigt jeden Abschnitt. Die Seite darf nicht künstlich verlängert werden.

## Fachliche Leitlinien für häufige Themen

### Crate Training

- Die Crate ist ein sicherer Ruheort, keine Strafe.
- Toilettenbedarf, Frust, Nähebedürfnis und Panik unterscheiden.
- Dauer, Distanz und geschlossene Tür nicht gleichzeitig steigern.
- Bei jungen Welpen im Zweifel einen kurzen, langweiligen Toilettengang anbieten.
- Panik nicht „aussitzen“.
- Ruhiges Verhalten belohnen, aber Grundbedürfnisse nicht ignorieren.

### Alleinbleiben

- Vorbereitung kann ab den ersten Tagen beginnen.
- Zuerst Ruhe bei Bewegung der Bezugsperson im selben Raum.
- Danach Sekunden außer Sicht innerhalb der Wohnung.
- Erst danach sehr kurze echte Abwesenheiten hinter der Haustür.
- Die Entspannung des Welpen bestimmt den Fortschritt, nicht ein Wochenziel.

### Fütterung und Belohnungen

- Nur festgelegte erwachsene Bezugspersonen füttern und belohnen.
- Kinder, Besucher und fremde Personen geben keine Leckerlis.
- Belohnt wird ruhiges, erwünschtes Verhalten; nicht Hochspringen oder forderndes Bellen.
- Ausnahmen wie Hundesitter oder Trainer handeln nach denselben Regeln.

### Pflege

- Kooperative, kleinschrittige Gewöhnung.
- Der Welpe darf Pausen erhalten und ausweichen.
- Kurze positive Einheiten sind besser als seltene lange Sitzungen.
- Beim Australian Labradoodle besonders Achseln, hinter den Ohren, Brust, Beine und Geschirrbereich berücksichtigen.

### Gewicht

- Mini-, Medium- und Standard-Linien unterscheiden.
- Keine einzelne Sollzahl als allgemeingültig darstellen.
- Elterngewicht, bisherige Wachstumskurve und Body Condition Score einbeziehen.
- Bei auffälligem Verlauf zur Tierarztpraxis verweisen.

## UX- und Navigationsregeln

- Startseite bleibt eine kompakte Übersicht.
- Tages- und Wochenkarten führen zu ausführlichen Seiten.
- Bestehende `<a href="…">`-Links bevorzugen; Navigation nicht ausschließlich von JavaScript abhängig machen.
- Auf Mobilgeräten zuerst Kernaussage zeigen, dann Details.
- Längere Inhalte mit klaren Zwischenüberschriften, Karten oder `details`-Elementen portionieren.
- Suchbegriffe und `data-keywords` aktualisieren, wenn neue Inhalte hinzukommen.
- Wichtige Szenarien vom Problemlöser aus erreichbar machen.

## Visuelle Regeln

- Bestehende warme, ruhige Gestaltung fortführen.
- Tage verwenden unterschiedliche Grüntöne.
- Wochen verwenden klar unterscheidbare Kapitel-Farben.
- Problemlöser und Warnbereiche dürfen rote beziehungsweise warme Warnfarben verwenden.
- Labradoodle-Tipps verwenden Türkis.
- Keine grellen Farben oder visuellen Effekte ohne funktionalen Zweck.
- Immer den bestehenden illustrierten Labradoodle-Stil verwenden.
- Keine Stockfotos und keine neue Bildsprache ohne ausdrückliche Zustimmung.
- Bilder nicht als eingebetteten Base64-Code speichern.

## HTML

- Semantische Elemente verwenden: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Überschriftenhierarchie korrekt halten.
- Keine verschachtelten interaktiven Elemente, zum Beispiel kein Button innerhalb eines anklickbaren Links.
- Für echte Navigation echte Links verwenden.
- ARIA nur einsetzen, wenn natives HTML nicht genügt.
- Deutsche Sonderzeichen korrekt als UTF-8 speichern.

## CSS

- Bestehende Klassen und Variablen wiederverwenden.
- Mobile-first oder klar abgegrenzte responsive Regeln.
- Keine pauschalen Selektoren, die alle Links oder Artikel unbeabsichtigt verändern.
- Vor Änderungen an gemeinsamem CSS alle betroffenen Seiten prüfen.
- Animationen dezent halten und `prefers-reduced-motion` respektieren.
- Inline-Styles nur für einmalige, gut begründete Werte; Designregeln gehören in CSS.

## JavaScript

- Progressive Enhancement: Grundnavigation und Inhalte funktionieren ohne JavaScript.
- Keine Abhängigkeiten hinzufügen, wenn Vanilla JavaScript ausreicht.
- Event Listener nicht mehrfach registrieren.
- Fehler einzelner optionaler Komponenten dürfen die Navigation nicht blockieren.
- Lokale Speicherung nur für harmlose Nutzerpräferenzen und Checklisten verwenden.
- Kein Tracking, keine Werbung und keine Analyse-Skripte ohne ausdrückliche Entscheidung.

## Tests bei jeder Inhaltsseite

- Direktlink funktioniert.
- Zurücklink führt zur sinnvollen Übersicht.
- Nächster beziehungsweise vorheriger Abschnitt funktioniert, falls vorhanden.
- Bild wird geladen.
- Alt-Text ist korrekt.
- Text ist bei 200 % Zoom verständlich.
- Seite bleibt ohne JavaScript benutzbar.
- Warnhinweise sind sachlich und nicht alarmistisch.

## Git-Regeln für Codex

- Kleine, thematisch geschlossene Commits.
- Aussagekräftige Commit-Nachrichten im Imperativ, zum Beispiel `Add harness acclimation scenario`.
- Keine generierten oder temporären Dateien committen.
- Keine bestehenden Inhalte löschen, nur weil sie redundant erscheinen, ohne dies vorher zu begründen.
- Bei einem größeren Umbau zuerst einen separaten Branch verwenden.
- Vor dem Push Diff prüfen und ausdrücklich bestätigen, welche Dateien verändert wurden.

## Entscheidungsregel bei Unsicherheit

Wenn eine gewünschte Änderung mehrere vertretbare Lösungen hat:

1. bestehende Architektur bevorzugen,
2. kleinste robuste Änderung wählen,
3. keine neue Abhängigkeit einführen,
4. fachliche Unsicherheit transparent markieren,
5. bei potenziell riskanten Inhaltsänderungen nachfragen.
