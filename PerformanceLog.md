**Inleiding**

Voor performance marters heb ik mijn site geoptimaliseerd en geoptimaliseerd om te onderzoeken wat de effecten zijn op de snelheid van de verschillende onderdelen. De download snelheid staat bij elke test op slow 3g. De site bestaat uit een overzicht site met boeken van de oba met afbeeldingen die extern opgehaald worden. De site heeft een custom-font en een logo.

**Eerste test:**

_Logo: highress png_

_Custom webfont_

_0 optimalisatie_

4.43 sec first meaningfull pixels

 image/

7.12 sec font en eerste plaatje

 image/

9.37 sec logo

 image/
 

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

 image/

5.12 sec eerste plaatje

 image/

6.20 sec font update

 image/

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

 image/

4.63 sec eerste plaatje

 image/

6.56 sec font update

 image/

|   | Performance |   |
| --- | --- | --- |
|   | **Metrics** |   |
| First Contentful Paint | Speed Index | Time to Interactive |
| 1.1 s | 1.3 s | 1.7 s |
|   |   |   |
| First Meaningful Paint | First CPU Idle | Estimated Input Latency |
| 1.1 s | 1.6s | 150 ms |


