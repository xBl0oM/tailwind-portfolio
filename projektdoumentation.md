# Projekt-Dokumentation
Jan Frey

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|23.08|0.01|Das Projekt wurde augesezt.|
|30.08|0.02|Erste Seiten wie die Home Page wurden hinzugefügt.|
|06.9|0.03|Alle Seiten wurden hinzugefügt.|
|13.9|0.1|Alle Seiten wurden hinzugefügt.|
|14.10|0.2|Animationen wurden hinzugefügt.|
|25.10|1|Animationen wurden verbessert.|

## 1 Informieren

### 1.1 Ihr Projekt

In diesem Projekt überarbeite ich meine bereits vorhandene Portfolio Webseite

### 1.2 User Stories

| US-№ | Verbindlichkeit | Typ  | Beschreibung                       |
| ---- | --------------- | ---- | ---------------------------------- |
|1|Muss|Qualität|Als ein Benutzer möchte ich, dass die Webseite responsive ist, damit ich die Webseite auf vielen unterschiedlichen Geräten benutzen kann.|
|2|Muss|Qualität|Als Benutzer möchte ich eine Navbar, die sich je nach Gerät verändert, damit ich die Displaygrösse meines Geräts möglichst gut ausnutzen kann.|
|3|Muss|Qualität|Als Benutzer möchte ich Animationen auf der Webseite haben, damit das Benutzererlebnis möglichst spassig ist.|


### 1.3 Testfälle

| TC-№ | Ausgangslage | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
|1.1|Webseite ist für unterschiedliche Geräte angepasst|Benutzer öffnet Webseite auf dem Tablet|Webseite ist responsive.|
|2.1|Webseite ist angepasst|benutzer öffnet Webseite auf dem Handy|Navbar wird horizontal angezeigt, damit die Breite des Handys ausgenutzt werden kann.|
|3.1|Webseite wird geöffnet|-|Begrüssungsanimation wird abgespielt.|

## 2 Planen

| AP-№ | Frist | Zuständig | Beschreibung | geplante Zeit |
| ---- | ----- | --------- | ------------ | ------------- |
| 1.A  | 30.08 | Jan | Implementierung von Media Queries für eine responsive Gestaltung | 90 min |
| 2.A  | 06.09 | Jan | Entwicklung einer dynamischen Navbar, die sich je nach Gerätegrösse ändert | 270 min |
| 2.B  | 13.09 | Jan | Optimierung der Navbar für mobile Geräte | 90 min |
| 3.A  | 14.10 | Jan | Design und Implementierung einer Begrüssungsanimation beim Laden der Webseite | 180 min |
| 3.B  | 14.10 | Jan | Einbindung von weiteren Micro-Animationen für Buttons und Links | 90 min |
| 3.C  | 25.10 | Jan | Testen und Feintuning der Animationen  | 90 min |

Total: 7 Arbeitspakete


## 3 Entscheiden

Ich habe mich Entschieden alles geplante umzusetzten.

## 4 Realisieren

| AP-№ | Datum | Zuständig | geplante Zeit | tatsächliche Zeit |
| ---- | ----- | --------- | ------------- | ----------------- |
| 1.A  |   30.08    |Jan           | 90 min              |             100 min      |
| 2.A  |   06.09    |   Jan        |    270 min          |    300 min            |
|2.B|13.10|Jan|90 min|90 min|
|3.A|14.10|Jan|180 min|200 min|
|3.B|14.10|Jan|90 min|100 min|
|3.C|25.10|Jan|90 min| 100 min|

## 5 Kontrollieren

### 5.1 Testprotokoll

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |    25.10   |   Funktioniert       |     Jan   |
| 2.1  |  25.10     |      Funktioniert    |   jan     |
| 3.1  |  25.10     |       Funktioniert   |   Jan     |



### 5.2 Exploratives Testen

| BR-№ | Ausgangslage | Eingabe | Erwartete Ausgabe | Tatsächliche Ausgabe |
| ---- | ------------ | ------- | ----------------- | -------------------- |
| I    |      Webseite ist geöffnet        |   User endet die Displaygrösse      |   Webseite passt sich an die Displaygrösse an                |   Webseite passt sich an die Displaygrösse an                   |
| II  |         Webseite ist auf dem Handy geöffnet     |      User öffnet die Navbar   |          Navbar ist Horizontal         |       Navbar ist Horizontal               |
| III  |      Webseite wird geöffnet        |     -    |           Animationen werden abgespielt        |                 Animationen werden abgespielt     |



