# Style Guide

## Gestaltungsziel

Die Website soll ruhig, warm, freundlich und leicht erfassbar wirken. Sie wird überwiegend auf dem Smartphone verwendet und muss auch in stressigen Alltagssituationen schnell scannbar bleiben.

## Grundprinzipien

- Mobile first
- Viel Weißraum
- Klare visuelle Hierarchie
- Pro Karte oder Abschnitt nur eine Hauptaussage
- Illustrationen unterstützen das Verständnis
- Keine grellen Farben oder überladenen Bedienelemente

## Kapitel-Farbsprache

### Erste vier Tage

Unterschiedliche Grüntöne signalisieren Eingewöhnung und Sicherheit.

- Tag 1: dunkleres Waldgrün
- Tag 2: mittleres Grün
- Tag 3: Salbei
- Tag 4: helleres Grün

### Wochen

- Woche 1: Blau
- Woche 2: warmes Gelb
- Woche 3: Orange
- Woche 4: Violett

### Weitere Bereiche

- Problemlöser: warme Rot- oder Rosatöne
- Australian-Labradoodle-Tipps: Türkis
- Merksätze: ruhiges Hellgrün
- Hinweise: warmes Gelb

Farben müssen ausreichenden Kontrast besitzen. Farbe darf nie die einzige Informationsträgerin sein.

## Illustrationen

- Immer derselbe cremefarbene Australian Labradoodle im bestehenden weichen, flachen Illustrationsstil
- Vorhandene Dateien unter `assets/illustrations/` wiederverwenden
- Keine Stockfotos
- Keine neue Cartoon- oder Strichfiguren-Sprache ergänzen
- Neue Bilder müssen stilistisch zum vorhandenen Set passen
- Bilddateien sinnvoll benennen, zum Beispiel `buersten.png` oder `crate.png`
- Keine Beschriftung direkt in das Bild einbauen, wenn HTML-Text möglich ist

### Alt-Texte

- Inhaltlich relevante Bilder: kurze Beschreibung der Handlung
- Dekorative Bilder: `alt=""`
- Alt-Texte nicht mit „Bild von“ beginnen

## Typografie

- Bestehende Schriftfamilie beibehalten
- Fließtext mobil mindestens ungefähr 16 px
- Zeilenhöhe ungefähr 1.55 bis 1.75
- Textspalten nicht unnötig breit
- Überschriften kurz und handlungsorientiert
- Keine langen Textpassagen in Großbuchstaben

## Karten

Karten haben:

- gut erkennbare Grenzen oder Hintergrundflächen
- abgerundete Ecken
- ausreichenden Innenabstand
- eine eindeutige Überschrift
- kurze Beschreibung
- sichtbaren Link oder eine klar erkennbare gesamte Linkfläche

Bei einer vollständig anklickbaren Karte muss die Karte ein echtes `<a>`-Element sein. Keine verschachtelten Links oder Buttons darin.

## Mobile Darstellung

Bei ungefähr 320 bis 430 px Breite:

- Inhalte untereinander anordnen
- keine horizontale Scrollleiste
- Touch-Ziele mindestens ungefähr 44 px
- Karten nicht mit zu viel Vorschautext füllen
- Bilder kleiner als auf Desktop darstellen
- längere Inhalte durch Zwischenüberschriften, Karten oder `details` gliedern
- Hauptaktion klar kennzeichnen

## Desktop Darstellung

Desktop darf großzügiger sein, aber nicht wesentlich mehr Inhalt auf einmal erzwingen. Die mobile Informationshierarchie bleibt auch auf großen Bildschirmen bestehen.

## Emojis

Emojis dienen als Orientierung, nicht als Dekoration.

- `📍` Situation
- `🤔` Erklärung
- `✅` Vorgehen
- `❌` Vermeiden
- `🐶` Labradoodle-Tipp
- `💡` Merksatz
- `⚠️` wichtiger Hinweis
- `📦` Crate
- `🚽` Stubenreinheit
- `🪥` Fellpflege
- `🦮` Geschirr und Leine
- `😴` Schlaf
- `🍖` Futter

Nicht jede Überschrift benötigt ein Emoji.

## Bewegung

- Animationen nur mit funktionalem Zweck
- Dauer kurz und ruhig
- Keine dauerhaften Bewegungen, die beim Lesen ablenken
- `prefers-reduced-motion: reduce` respektieren

## Barrierefreiheit

- Sichtbarer Tastaturfokus
- Semantische Überschriftenreihenfolge
- Formulare besitzen Labels
- Navigation funktioniert mit Tastatur und ohne JavaScript
- Kontrast und Zoom bis 200 Prozent prüfen

## Änderungen am gemeinsamen CSS

Vor dem Commit mindestens prüfen:

- Startseite
- alle vier Tageskarten
- alle vier Wochenkarten
- eine Tagesdetailseite
- eine Wochendetailseite
- Problemlöser
- mobile Navigation
- Suchfunktion und Checklisten
