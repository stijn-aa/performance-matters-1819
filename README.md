# OBA in Node

Doel van dit blok is om de oba app te laten runnen op een server, hem te optimaliseren en een betekenisvolle offline ervaring toe te voegen.

**Server**

Voor de serverside versie heb ik gebruikt gemaakt van ejs om de verschillende pagina's te vertonen. Hierdoor kan ik variabele van de serverside javascript meegeven aan de html om verschillende onderdelen weer te geven.

**Offline**

Voor de offline ervaring ben ik gegaan voor een pagina met de melding dat je offline bent geheel in de style van de rest van de website. Hiervoor heb ik een service worker geinstaleerd die de css en een offline pagina cached als je de site opkomt. Vervolgens word er gechecked of er een internet verbinding is, zo niet dan wordt de offline pagina weergegeven vanuit de cache.

**Inleiding performance tests**

doel van de optimalisatie is om te onderzoeken wat de effecten zijn op de snelheid van de verschillende onderdelen. De download snelheid staat bij elke test op slow 3g. De site bestaat uit een overzicht site met boeken van de oba met afbeeldingen die extern opgehaald worden. De site heeft een custom-font en een logo.

**Eerste test:**

_Logo: highress png_

_Custom webfont_

_0 optimalisatie_

4.43 sec first meaningfull pixels

![img](/docs/1.png)

7.12 sec font en eerste plaatje

![img](/docs/2.png)

9.37 sec logo

![img](/docs/3.png)
 

|   | Audit Performance_Fast 3g trottle, mobile_ |   |

| --- | --- | --- |
|   | **Metrics** |   |
| First Contentful Paint | Speed Index | Time to Interactive |
| 1.4 s | 1.5 s | 2.0 s |
|   |   |   |
| First Meaningful Paint | First CPU Idle | Estimated Input Latency |
| 1.5 s | 2.0 s | 170 ms |


**Conclusie**

Niet geoptimaliseerde afbeeldingen hakken er erg in en de tekst wordt ook pas weergegeven als de web font geladen is na 7 seconden.

**2de test:**

_Logo: svg_

_Preload Custom webfont_

_0 optimalisatie_

4.38 sec first load

![img](/docs/4.png)

5.12 sec eerste plaatje

![img](/docs/5.png)

6.20 sec font update

![img](/docs/6.png)

|   | Audit Performance_Fast 3g trottle, mobile_ |   |

| --- | --- | --- |
|   | **Metrics** |   |
| First Contentful Paint | Speed Index | Time to Interactive |
| 1.1 s | 1.3 s | 1.7 s |
|   |   |   |
| First Meaningful Paint | First CPU Idle | Estimated Input Latency |
| 1.1 s | 1.7 s | 160 ms |

**Conclusie**

Font en svg zijn meteen aanwezig. Tekst verspringt nog wel als het plaatje word ingeladen en als de font geüpdate word.

**3de test:**

_Logo: svg minified:  87ms > 2 ms_

_Css minified: 204ms > 146ms_

4.26 sec first load

![img](/docs/7.png)

4.63 sec eerste plaatje

![img](/docs/8.png)

6.56 sec font update

![img](/docs/9.png)

|   | Audit Performance_Fast 3g trottle, mobile_ |   |

| --- | --- | --- |
|   | **Metrics** |   |
| First Contentful Paint | Speed Index | Time to Interactive |
| 1.1 s | 1.3 s | 1.7 s |
|   |   |   |
| First Meaningful Paint | First CPU Idle | Estimated Input Latency |
| 1.1 s | 1.6s | 150 ms |




