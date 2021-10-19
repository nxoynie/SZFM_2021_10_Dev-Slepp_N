<h1>Rendszerterv</h1>

<h2>A rendszer célja</h2>
<p><strong>Az általunk létrehozni kívánt rendszer célja, hogy az Önök elvárásait elégítse ki a lehető legnagyobb mértékben. Ennek a rendszernek a céljai a következők:
   </strong>
  <ul>
   <li>Karbantarhatóság és adatok egyszerű feldolgozásának biztosítása.</li>
   <li>Helyes, pontos működés biztosítása.</li>
   <li>Megjelenése minden eszközön használható és reszponzív.</li>
   <li>Az utómunka (ez esetben a válaszok rögzítése, feldolgozása) meggyorsítása, egyszerűvé, automatizáltáttá tétele.</li>
   <li>Egy olyan felület biztosítása melyen található, Világos illetve Sötét mód, mely nagyítása lehetséges, biztosítva a felhasználók számára a kellemes és egyszerű kitöltést.</li>
   <li>A jelenlegi papír alapú rendszer teljes felváltása.</li>
</ul></p>

<h2>Tesztterv</h2>

<h3>Tesztelés elvei:</h3>

<p>
   <ul>
  <li>Tesztelés során szeretnénk meggyőződni arról, hogy az elkészült kérdőív megfelelően fogadja, feldolgozzza és tárolja a kapott válaszokat. </li>
  <li>Szeretnénk meggyőződni arról ,hogy minden alap, mindennapi használatban lévő gyakori eszközözön(telefon, laptop, számítógép) modellen, operációs rendszeren, böngészőben megfelelően funkcionál, reszponzív és felhasználóbarát az elkészült kérdőív. </li>
  <li>Fontos, hogy az elkészült projekt teljesítse a reszponzivitás elveit és egyszerűen használható legyen, ezzel garantálva azt ,hogy a kérdőívet továbbra is a népesség széles köre kitöltheti, így különböző rétegekből nyerhetünk adatokat. </li>
</ul>      
</p>

<h3>Tesztelés folyamat</h3>
<p><strong>- Manuális tesztelés</strong></p>
<ul>
   <li>Tesztelés különböző böngészőkben.</li>
   <li>Tesztelés különböző eszközökön.</li>
   <li>Tesztelés különböző operációs rendszereken.</li>
</ul>
<p><strong>- Unit tesztelés</strong></p>

<h3>Tesztelés kontrollja</h3>
<p>A kérdőív akkor megy át a tesztelés teljes fázisán, ha:
  <ul>
   <li>Átmegy a Unit teszteken</li>
   <li>Megjelenése minden eszközön használható és reszponzív.</li>
    <li>A válaszok eltárolása minden eszközön <strong>HELYESEN</strong> megtörténik.</li>
</ul>
</p>

<h3>Tesztesetek</h3>
<p>Manuális tesztelés esetén:
  <ul>
   <li>Tesztelés Windows operációs rendszeren, Opera böngészőben.</li>
   <li>Tesztelés Windows operációs rendszeren, Firefox böngészőben.</li>
   <li>Tesztelés Windows operációs rendszeren, Chrome böngészőben.</li>
   <li>Tesztelés Linux operációs rendszeren, Opera böngészőben.</li>
   <li>Tesztelés Linux operációs rendszeren, Firefox böngészőben.</li>
   <li>Tesztelés Linux operációs rendszeren, Chrome böngészőben.</li>
   <li>Tesztelés macOS operációs rendszeren, Opera böngészőben.</li>
   <li>Tesztelés macOS operációs rendszeren, Firefox böngészőben.</li>
   <li>Tesztelés macOS operációs rendszeren, Chrome böngészőben.</li>
   <li>IOS alapú telefonon.</li>
   <li>Android alapú telefonon.</li>
   <li>IOS alapú tableten.</li>
   <li>Windows alapú tableten.</li>
</ul>
</p>
<h3>Sikeres teszt kritériumai:</h3>
<p>- A kérdőív reszponzív, felhasználóbarát az összes tesztelt eszközön, megfelelően dolgozza fel és tárolja az adatokat minden esetben. Illetve átmegy a Unit teszteken.</p>

<h3>Karbantartási terv</h3>
<p>
   <ul>
   <li>A dependenciák időszakos ellenőrzése, hogy megakadályozzuk az adat kiszivárgást és biztosítsuk a rendszer biztonságosságát. </li>
   <li>Az adatbázisban tárolt adatok meglétének időszakos ellenőrzése, elkerülve azt az eshetőséget ,hogy régebbi adatok eltűnjenek esetlegesen erőforrás hiánya miatt. </li>
   <li>Reszponzivitás időszakos ellenőrzése Major Software Update esetén. </li>
   <li>Meglévő technológiák újabbakra cserélése igény és szükség esetén. </li>
   <li>Kérdések időszakos cseréje/bővítése, újabb témában való válaszgyűjtés igényének esetén. </li>
   </ul>
</p>

<h3>A rendszer követelményei</h3>

A rendszer követelményei javarészt az olyan követelményeket foglal magába, melyek megvalósítását megcélozza a rendszerterv.
Ezek a következők:

|Modul| ID | Név |V.| Kifejtés|
|---|---|---|---|---|
|-| K01| Adatbázisban tárolás|-|A rendszer a kapott válaszokat egy adatbázisban eltárolja.|
|-| K02| Szám érték elvárása válaszként|-|A kérdésekre válaszként <strong>CSAK</strong> szám értéket fogad el.|
|-| K03| Tizedes számok helyes bevitele|-|A rendszer a kérdésre adott esetleges tizedes számot helyesen kezeli (pont-vessző probléma).|
|-| K04| Mérhető, gépi módon feldolgozható statisztika|-|Az adatbázisban való tárolás olyan formában történik melyből egyszerűen, <strong>GÉPI</strong> módon készíthetőek statisztikák, kimutatások.|
|-| K05| Egyszerűen kezelhető rendszer|-|A kérdőív egyszerűen kezelhető az end-user számára.|
|-| K06| Felhasználó jártasságának felmérése a témában|-|Hasonlóan a jelenlegi papír alapú rendszerhez, szeretnénk implementálni olyan kérdéseket a predikció előtt ami felméri ,hogy a válaszadó tulajdonképpen mennyire jártas-e a témában. Ezzel szeretnénk kiszűrni a szimpla tippeket a valóságos spekulációk közül.|
|-| K07| Rövid kérdések|-|A figyelem fenntartása érdekében maximum két, három soros kérdések szerepelhet a kérdőívben.|
|-| K08| Webes reszponzív dizájn megléte|-|Hogy továbbra is a populáció nagy százalékának lehetősége legyen kitölteni a kérdőívet, hasonlóan a jelenlegi papíralapú rendszerhez, ezért a weboldal dizájnjának reszponzívnak kell lennie és megfelelően megjelennie és használhatónak lennie a jelenleg használt legtöbb eszközön(számítógépek, telefonok, tabletek) illetve modellen.|
|-| K09| A rendszer egy kérdőívből álljon|-|A rendszer célja továbbra is egyértelműen az adatgyűjtés legyen, ezért egy egyszerűen kezelhető barátságos kérdőívből kell állnia.|
|-| K10| Megfelelő súlyozás|-|A kapott válaszokat megfelelő súlyozással kell feldolgoznunk, mely függ a válaszadó előzetes tudásától, hogy megfelelő és valós statisztikát kaphassunk.|