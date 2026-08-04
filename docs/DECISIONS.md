# Projektentscheidungen

Dieses Dokument hält bewusste Entscheidungen fest, damit spätere Änderungen nicht versehentlich gegen die Projektidee arbeiten.

## ADR-001: Statisches HTML, CSS und JavaScript

**Entscheidung:** Das Projekt bleibt ohne Framework und ohne Build-Schritt.

**Gründe:**

- einfache Veröffentlichung über GitHub Pages,
- geringe technische Hürde,
- leicht auf einem Raspberry Pi bearbeitbar,
- keine Abhängigkeit von Paketmanagern,
- bestehende Website funktioniert bereits in dieser Architektur.

Ein Framework wird nur eingeführt, wenn ein konkretes Nutzerproblem mit der bestehenden Architektur nicht zuverlässig lösbar ist und die Änderung ausdrücklich beschlossen wurde.

## ADR-002: Mobile first

**Entscheidung:** Smartphone-Nutzung hat Vorrang vor Desktop-Optimierung.

**Gründe:**

- Besitzer suchen häufig während einer konkreten Situation nach Hilfe,
- das Telefon ist dann meist das verfügbare Gerät,
- kurze, gut scannbare Inhalte reduzieren Stress.

Desktop bleibt vollständig unterstützt, darf aber nicht zu einer überladenen mobilen Version führen.

## ADR-003: Startseite als Übersicht, Detailseiten als Vertiefung

**Entscheidung:** Tages- und Wochenkarten bleiben kurze Zusammenfassungen und führen über echte HTML-Links zu ausführlichen Seiten.

**Gründe:**

- schnelle Orientierung,
- weniger Text auf einmal,
- robuste Navigation ohne JavaScript-Abhängigkeit,
- klare Trennung zwischen Überblick und Anleitung.

## ADR-004: Belohnungsbasiertes Training

**Entscheidung:** Empfehlungen basieren auf positiver Verstärkung, Management, kleinschrittiger Gewöhnung und kooperativer Pflege.

**Ausgeschlossen:** Dominanzmethoden, Einschüchterung, körperliche Strafen und absichtliches Aussitzen von Panik.

## ADR-005: Nicht kommerziell

**Entscheidung:** Die Website dient aktuell einer Person mit einem jungen Welpen und bleibt kostenlos.

Keine Werbung, Affiliate-Links, Tracking-Skripte oder Verkaufsfunnels ohne eine neue ausdrückliche Entscheidung.

## ADR-006: Einheitliche Labradoodle-Illustrationen

**Entscheidung:** Der vorhandene cremefarbene Labradoodle im weichen, flachen Illustrationsstil bleibt die visuelle Figur des Handbuchs.

**Gründe:**

- hohe Wiedererkennbarkeit,
- ruhigere Gestaltung als wechselnde Fotos,
- besseres Verständnis auf kleinen Bildschirmen.

## ADR-007: Keine pauschale Gewichtstabelle

**Entscheidung:** Gewicht wird immer im Zusammenhang mit Größenklasse, Eltern, Wachstumskurve und Body Condition Score erklärt.

**Grund:** Australian Labradoodles reichen von Miniature bis Standard und besitzen keine sinnvolle einzelne Sollzahl für ein bestimmtes Welpenalter.

## ADR-008: Keine allgemeine Schweizer Pflichtenseite

**Entscheidung:** Das Handbuch enthält aktuell keine pauschale Liste gesetzlicher Pflichten für die Schweiz.

**Grund:** Anforderungen unterscheiden sich nach Kanton und Halter lernt lokale Pflichten gegebenenfalls in vorgeschriebenen Kursen. Rechtliche Inhalte werden nur auf ausdrücklichen Wunsch und mit aktueller Prüfung ergänzt.

## ADR-009: Haushaltsregel für Futter

**Entscheidung:** Nur festgelegte erwachsene Bezugspersonen füttern und belohnen. Kinder, Besucher und fremde Personen geben keine Leckerlis.

**Einordnung:** Dies ist eine bewusste Konsistenz- und Managementregel dieses Haushalts, keine universelle Voraussetzung für Bindung.

## ADR-010: Progressive Enhancement

**Entscheidung:** Kerninhalte und Navigation funktionieren ohne JavaScript.

JavaScript darf Suche, Checklisten und Komfort verbessern, aber keine grundlegende Seite unbenutzbar machen.

## Neue Entscheidungen

Neue grundlegende Architektur- oder Inhaltsentscheidungen werden hier ergänzt mit:

- Datum,
- Entscheidung,
- Begründung,
- Auswirkungen,
- möglichen Alternativen.
