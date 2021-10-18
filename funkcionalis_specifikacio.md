<h1>Funckionális specifikáció</h1><br>

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
A jelenlegi rendszer funkcionalitás szempontjából elavult, nem fenntartható az effajta működés
<br>
a jövőre nézve. 
<strong>Ennek a rendszernek és kiértékelésnek szeretné a megrendelő az egyszerűsítését és automatizálását.</strong></p>

<h2>Vágyálom rendszer leírása:</h2>
Egy olyan rendszer szükséges számunkra amely kérdőív kitöltése kapcsán adatok feldolgozását teszi lehetővé.
Funkcionalitást tekintve a rendszer egy kerdőívből álljon, tehát a felhasználó egy barátságos és egyértelmű
felületet kell, hogy kapjon amin elsősorban fel kell, hogy mérjük tudását és a kérdőív másik felében megfelelő
súlyozással tudjuk a válaszát feldolgozni. Amint ecseteltem, a kérdőív első része egy felmérés arról, hogy az
illetőnek a témával kapcsolatban mennyi tudása van. A második felében pedig egyszerű kérdésekre vár választ a rendszer
annak függvényében, hogy a feldolgozott adatból később egy jövőbeli becslést hajtsunk végre automatizáltan.

<h2>A rendszerre vonatkozó szabályok leírása</h2><br>

- A rendszer a megadott adatokat adatbázisban tárolja
- Átlátható kód
- Legnépszerűbb böngészők támogatása (Chrome, Firefox, Edge, Opera, Safari)
- Mobil böngészőn megfelelő megjelenítés
- Igényes kinézet, egyszerű kezelhetőség
- Reszponzivitás, azaz különböző méretű eszközönként megfelelő megjelenés

<h2>Igényelt üzleti folyamatok modellje</h2>
Az üzleti folyamat modelljében látható, hogyan valósul meg az adatnak a feldolgozása a felhasználótól az automatizációs rendszeren keresztül.
<img src="resources/uzleti_folyamat_modell.png">
A modell kimutatja, hogy az adatbevitel űrlapon keresztül történik.
Az adat az üzleti logika kapcsán feldolgozásra kerül adatbázis segítségével, továbbá elegendő adat mennyiség és minőség után egy becslést határoz meg a rendszer.

<h2>Képernyőterv<h2>

<p>Light Mode:</p>

![Képernyőterv az weblapról Light Mode-ban](resources/questionare_light_mode.png)

<p>Dark Mode:</p>

![Képernyőterv az weblapról Dark Mode-ban](resources/questionare_dark_mode.png)

<h2>Fogalomszótár</h2><br>

- Felmérés - több felhasználó által megadott adat (kérdésekre válaszok) összesítése, összevetése.

- Questionarre - Kérdőív, mely a felmérést megvalósítja, több kérdés feltétele során.

- Reszponzivitás - Optimális megjelenítés a lehető legtöbb eszközön.

- Adat - Olyan ismert vagy megfigyelt tény melyek számmal leirhatók, és számítástechnikai eszközökkel feldolgozhatóak, megjeleníthetők.

- Adatfeldolgozás - Az a folyamat mely során az adat feldolgozásra kerül.

- Automatizált - Egy olyan folyamat, mely emberi beavatkozást nem (vagy kevésbé) igényel.

- Felhasználói felület - A rendszer azon elemei, mely közvetlenül a felhasználóval lépnek interakcióba, és barátságos megjelenéssel rendelkeznek.

- Becslés - Egy téma kapcsán egy esemény vagy érték hozzávetőleges meghatározása.
  
 <h2>Használati esetek:</h2>
A rendszer célja nem más, mint hogy az ADMINISZTRÁTOROK álltal létrehozozz kérdőíveket, az oldal LÁTOGATÓI tudják kitölteni, igy adatokat biztosítva a felméréshez.</br>
Az ADMINOK és a LÁTOGATÓK különbözőképpen tudják majd használni a rendszert:</br>
</br>
1. ADMINOK:</br>
1.1. Kérdőívek létrehozása a rendszerbe.</br>
1.1.2. A kérdőívekhez egy teszt csatolása, amiből kiderül, hogy a kitöltőnek mennyi tudása van a felmérés témakörében.</br>
1.1.3. A kérdőívekhez témában megfelelő kép feltöltése.</br>
1.2. A felmérés statisztikáinak elérése.</br>
1.2.1. A statisztikák megtekintése.</br>
1.2.2. A statisztikák kimentése a használt eszközre.</br>
1.2.3. A statisztikák elmentése és tárolása egy adatbázisban</br>
1.3. A már létező kérdőívek törlése.</br>
</br>
2. LÁTOGATÓK:</br>
2.1. Kérdőívek és az azt megelőző tesztek kitöltése.</br>
2.2. Váltás éjszakai és nappali mód között.</br>
2.3. A LÁTOGATÓ eldöntheti, hogy anonim szeretne e maradni, vagy a kitöltéséhez adja a nevét.</br></br>

<h2>Funkció – követelmény megfeleltetés</h2>
A rendszer legfontosabb dolga az adatok eltárolása lesz, ezek egy adatbázisrendszerbe lesznek bevezetve.</br>
Válasznak a látogató csak számot irhat be, ezt ellenőrizni foglyuk.</br>
A statisztikákat nem az adminisztrátoroknak kell megcsinálniuk, ezt egy algoritmus csinálja majd meg.</br>
A rendszer a weben keresztül lesz elérhető, fontos, hogy bármilyen böngészőben és eszközön elérhető legyen,</br> ezért reszponziv webdizájnt alkalmazunk az oldal megvalósításához.</br> 

<h2>Használati esetek:</h2>
A rendszer célja nem más, mint hogy az ADMINISZTRÁTOROK álltal létrehozozz kérdőíveket, az oldal LÁTOGATÓI tudják kitölteni, igy adatokat biztosítva a felméréshez.</br>
Az ADMINOK és a LÁTOGATÓK különbözőképpen tudják majd használni a rendszert:</br>
</br>
1. ADMINOK:</br>
1.1. Kérdőívek létrehozása a rendszerbe.</br>
1.1.2. A kérdőívekhez egy teszt csatolása, amiből kiderül, hogy a kitöltőnek mennyi tudása van a felmérés témakörében.</br>
1.1.3. A kérdőívekhez témában megfelelő kép feltöltése.</br>
1.2. A felmérés statisztikáinak elérése.</br>
1.2.1. A statisztikák megtekintése.</br>
1.2.2. A statisztikák kimentése a használt eszközre.</br>
1.2.3. A statisztikák elmentése és tárolása egy adatbázisban</br>
1.3. A már létező kérdőívek törlése.</br>
</br>
2. LÁTOGATÓK:</br>
2.1. Kérdőívek és az azt megelőző tesztek kitöltése.</br>
2.2. Váltás éjszakai és nappali mód között.</br>
2.3. A LÁTOGATÓ eldöntheti, hogy anonim szeretne e maradni, vagy a kitöltéséhez adja a nevét.</br></br>

<h2>A rendszer céljai és nem céljai</h2>
A rendszer céljai: </br>
-nagy mennyiségű minta gyűjtése</br>
-becslés megadása a jövőre tekintve egy adott témában</br>
-adatok eltárolása</br>
-eltárolt adatokhoz statisztika készítése</br>
-könnyen használható felület biztosítása a látogatóknak</br>
-számban kifejezett válaszok eltárolása</br>
-reszponzív webdizájn</br>
-egyszerű mód kérdőívek készítésére</br></br>
Nem a rendszer céljai:</br>
-a jövő pontos meghatározása</br>
-akárkinek lehetőséget adni egy kérdőív elkészítéséhez</br>
-a nem anonim kitöltők adatainak felhasználása</br>
-szöveges választ elfogadni</br>


<h2>Forgatókönyvek</h2><br>

A felhasználó megkezdi a kérdőívet valamilyen böngésző segítségével. <br>
A kitöltés során különböző kérdéseket kap, melyeket megválaszol. <br>
Első körben elképzelhető egy felmérés, mely a felhasználó jártasságát célozza meg az adott témakörben. <br>
Ezután, legfőképp olyan kérdéseket fog kapni, melyeket egy 1-5-ig terjedő skálán meg tud válaszolni, vagy szám értéket ad meg, vagy olyan típusú kérdést kap, melyre érkezett válasz átalakítható szám értékké. <br>

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
|-| K07| A rendszer egy kérdőívból álljon|-|A rendszer célja továbbra is egyértelműen az adatgyűjtés legyen, ezért egy egyszerűen kezelhető barátságos kérdőívből kell állnia.|
|-| K08| Megfelelő súlyozás|-|A kapot válaszokat megfelelő súlyozással kell feldolgoznunk, mely függ a válaszadó előzetes tudásától, hogy megfelelő és valós statisztikát kaphassunk.|
=======

<h2>Funkció – követelmény megfeleltetés</h2>
A rendszer legfontosabb dolga az adatok eltárolása lesz, ezek egy adatbázisrendszerbe lesznek bevezetve.</br>
Válasznak a látogató csak számot irhat be, ezt ellenőrizni foglyuk.</br>
A statisztikákat nem az adminisztrátoroknak kell megcsinálniuk, ezt egy algoritmus csinálja majd meg.</br>
A rendszer a weben keresztül lesz elérhető, fontos, hogy bármilyen böngészőben és eszközön elérhető legyen,</br> ezért reszponziv webdizájnt alkalmazunk az oldal megvalósításához.</br> 

