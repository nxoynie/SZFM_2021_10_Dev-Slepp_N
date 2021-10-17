<h1>Követelmény specifikáció</h1>

<h2><strong>Jelenlegi helyzet leírása</strong></h2>
<p>Jelenleg a megrendelő egy <strong>papíralapú</strong> kérdőív rendszert alkamaz. Ennek <strong>hosszadalmas a kiértékelése, <br>
rendezetten tartása</strong>. A jelenlegi rendszeren belül is <strong>léteznek előzetes tudást felmérő kérdések</strong>, 
<br>
melyeket a megrendelő szeretné ,ha implementálnánk a készülő rendszerbe is. A jelenlegi kérdőív kitöltése <br> 
egy <strong>10-20 percet</strong> vesz igénybe, a kérdőíveket tollal töltik ki, így ha valamely résztvevő megváltoztatja
<br>
a véleményét, kisatírozott válaszok jönnek létre, így <strong>jelenleg semmilyen módon sem lehetséges a gépi
<br>
kiértekelés</strong>. Mivel a rendszer papíralapú és a kiértékelése sem gépi, így a kapott válaszoka/jóslatokat 
<br>
kézzel vezetik egy papíralapú füzetbe. Illetve a kiérteklést is kézzel számolják. 
<br>
<strong>Ennek a rendszernek és kiértékelésnek szeretné a megrendelő az egyszerűsítését és automatizálását.</strong></p>

<h2>Vágyálom rendszer leírása:</h2>
Egy olyan rendszerre lenne szükségünk amellyel felmérést tudunk végezni egy adott témakörben. Amitől ez a rendszer különleges lenne számunkra az a reszponzív dizájn, egyértelmű barátságos felület és a könnyen kezelhető adatfeldolgozás.
Egy olyan Questionarre program lenne számunkra szükséges amellyel felmérhetünk, adatot feldolgozhatunk valamint statisztikát állítsunk ki egy felmérés kapcsán.
A rendszer lényege az automatizált és jól alkalmazható statisztikából a következménylevonás melynek segítségével jósolni tudunk adatot. A rendszer értékelje ki a válaszokat majd adjon egy becslést a jövőre tekintve az adott témában.

<h2>Igényelt üzleti folyamatok</h2>
Az üzleti folyamatok kapcsán az alábbi követelmények szerepelnek: </br>
1, Mérhető, gépi módon feldolgozható statisztika</br>
2, Adatbázisban való tárolás</br>
3, Jövőbeli becslés</br>
4, A becslés és jártasság felmérésének külön súlyozása </br>

<h2>A rendszerre vonatkozó szabályok leírása</h2><br>

- A rendszer a megadott adatokat adatbázisban tárolja
- Átlátható kód
- Legnépszerűbb böngészők támogatása (Chrome, Firefox, Edge, Opera, Safari)
- Mobil böngészőn megfelelő megjelenítés
- Igényes kinézet, egyszerű kezelhetőség
- Reszponzivitás, azaz különböző méretű eszközönként megfelelő megjelenés

<h2>Fogalomszótár</h2><br>

- Felmérés - több felhasználó által megadott adat (kérdésekre válaszok) összesítése, összevetése.

- Questionarre - Kérdőív, mely a felmérést megvalósítja, több kérdés feltétele során.

- Reszponzivitás - Optimális megjelenítés a lehető legtöbb eszközön.

- Adat - Olyan ismert vagy megfigyelt tény melyek számmal leirhatók, és számítástechnikai eszközökkel feldolgozhatóak, megjeleníthetők.

- Adatfeldolgozás - Az a folyamat mely során az adat feldolgozásra kerül.

- Automatizált - Egy olyan folyamat, mely emberi beavatkozást nem (vagy kevésbé) igényel.

- Felhasználói felület - A rendszer azon elemei, mely közvetlenül a felhasználóval lépnek interakcióba, és barátságos megjelenéssel rendelkeznek.

- Becslés - Egy téma kapcsán egy esemény vagy érték hozzávetőleges meghatározása.

<h2><strong>Követelménylista</strong></h2>

|Modul| ID | Név |V.| Kifejtés|
|---|---|---|---|---|
|-| K01| Adatbázisban tárol|-|A rendszer a kapott válaszokat egy adatbázisban eltárolja.|
|-| K02| Szám értéket vár válaszként|-|A kérdésekre válaszként <strong>CSAK</strong> szám értéket fogad el.|
|-| K03| Mérhető, gépi módon feldolgozható statisztika|-|Az adatbázisban való tárolás olyan formában történik melyből egyszerűen, <strong>GÉPI</strong> módon készíthetőek statisztikák, kimutatások.|
|-| K04| Egyszerűen kezelhető rendszer|-|A kérdőív egyszerűen kezelhető az end-user számára.|
|-| K05| Felméri a válaszadó jártasságát a témában|-|Hasonlóan a jelenlegi papír alapú rendszerhez, szeretnénk implementálni olyan kérdéseket a predikció előtt ami felméri ,hogy a válaszadó tulajdonképpen mennyire jártas-e a témában. Ezzel szeretnénk kiszűrni a szimpla tippeket a valóságos spekulációk közül.|
|-| K06| Rövid maximum két, három soros kérdések|-|A figyelem fenntartása érdekében maximum két, három soros kérdések szerepelhet a kérdőívben.|
|-| K07| Webes reszponzív dizájn|-|Hogy továbbra is a populáció nagy százalékának lehetősége legyen kitölteni a kérdőívet, hasonlóan a jelenlegi papíralapú rendszerhez, ezért a weboldal dizájnjának reszponzívnak kell lennie és megfelelően megjelennie és használhatóank lennei a jelenleg használt legtöbb eszközön(számítógépek, telefonok, tableket) illetve modellen.|
