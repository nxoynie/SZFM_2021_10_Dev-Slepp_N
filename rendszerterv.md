<h1>Rendszerterv</h1>
<h2>Telepítési terv</h2>
Az alkalmazásunkat a felhasználók egy webes felületen érhetik majd el.</br>
A felhasználóknak nem szükséges semmi mást feltelepíteni egy használni kívánt böngészőn kívül.</br>
Ez a böngésző lehet:</br>
-Google Chrome</br>
-Opera</br>
-Safari</br>
-Firefox</br>
-Microsoft Edge</br>
</br>
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
<h2>Projekt terv:</h2>


<h3>Projektszerepkörök, felelősségek:</h3>
<h4>Scrum Master:</h4>
<p>Felügyeli a folyamat fenntartását, segíti a csapatot probléma esetén. Kezeli a projekt main ágát.<br>
Felügyeli, hogy a csapattagok betartják-e a Scrum szabályokat, tartják-e a sprint határidejét.</p>
<h4>Csapat:</h4>
<p>Felelősek azért, hogy az aktuális sprintre bevállalt feladatokat elvégezzék.</p>

<h3>Projektmunkások és szerepköreik:</h3>
<p>Papp Csenge: Scrum Master, Csapat<br>
Zselenák Flórián: Csapat<br>
Hosszú Szilárd: Csapat<br>
Semendi Ádám: Csapat<br>
Szatmári Boldizsár: Csapat</p>

<h3>Ütemterv:</h3>
<p>A sprintek megkezdése előtti két hétben el kell készülnie a projekt dokumentumainak. A projekt kivitelezésére 5 egyhetes sprint áll rendelkezésre. Az első 2 sprint alatt el kell készülnie egy projektet bemutató demónak, melyet a megrendelő értékelhet a kész projekt átvétele előtt.</p>

<h3>Mérföldkövek:</h3>
<p>1. Funkciók meghatározása<br>
2. UI megtervezése<br>
3. Funkciók kivitelezése<br>
4. UI kivitelezése<br>
5. Funkciók integrálása<br>
6. UI, Funkciók tesztelése</p>

<h2>Architekturális terv:</h2>
<p>A projekt során egy 3-rétegű Ionic framework segítségével megírt PHP webapplikáció fog megszületni.<br>
Az applikáció adatbázisa MySQL alapú.<br>
A rendszer könnyen bõvíthetõ extra funkciókkal.<br>
Biztonsági funkciókra nincs szükség.</p>

![Képernyőterv az weblapról Dark Mode-ban](resources/architectural_plan.png)

<h2>Fizikai környezet</h2>
<ul>
<li> Az kérdőív a könnyű hozzáférhetőség és gyors működés érdekében a legtöbb modern böngészőben működni fog, így a legtöbb grafikus felülettel rendelkező operációs rendszer alatti működés alapvető.</li>
<ul>
    <li>Windows környezet alatt</li>
    <li>Linux környezet alatt</li>
    <li>macOS környezet alatt</li>
    <li>Android környezet alatt</li>
    <li>iOS környezet alatt</li>
    </ul>
<li>Ajánlott böngészők:</li>
    <ul>
    <li>Google Chrome</li> 
    <li>Mozilla Firefox</li>
    <li>Microsoft Edge</li>
    <li>Safari</li>
    <li>Opera</li>
    </ul>
<li>Ajánlott Architektúrák:</li>
    <ul>
    <li>ARM</li> 
    <li>ARM64</li>
    <li>x64</li>
    <li>x86</li>
    </ul>
<li> Csak saját komponenseket használunk fel</li>
<li>Fejlesztői eszközök:</li>
<ul>
    <li>Visual Studio</li>
    <li>Intellij</li>
    <li>Github</li>
    <li>Trello</li>
    </ul>
</ul>
<h2>Funkcionális terv</h2>
<p>
	Az önök elképzelései alapján a szoftver reszponzív dizájnt fog kapni. A válaszok
	rövid és tömör megfogalmazást kapnak. A felhasználóknak számmal kellesz válaszolniuk a különböző
	kérdésekre. A kérdőív első felében súly lesz számolva az alapján, hogy a kitöltő mennyire jártas az adott témában.
	A második fele fogja a becslést segíteni a súly alapján. A dizájn sötét móddal is el lesz látva azok számára
	akik jobban preferálják. Miután a kérdőív kitöltésre került, a kérdőív ID-je, témaismeretség súlya valamint a válaszokra adott
	értékek egy központi adatbázisba tárolásra kerülnek.
	Ha a kérdőív elegendő választ gyűjt össze, létrejön a becslés számítása ami kérésre a kitöltők e-mail címére kiküldésre kerül.
	A termék a támadók ellen is védve kell, hogy legyen, így az XSS ellen a bemenet vágva lesz, valamint a lehetséges SQL Injection elkerülése érdekében
	erre is fel lesz készítve a termék így kellő biztonságot fog önöknek nyújtani. Mivel cégünk backend fejlesztői keretrendszer nélkül dolgoznak
	ezért ezeket a lépéseket manuálisan saját algoritmussal fogják megoldani.
	A megvalósításhoz rétegelt architektúra fog struktúrában létrejönni, hogy minden funkció a maga feladatát lássa el.
	A biztonság érdekében különböző tesztesetek lesznek végrehajtva, hogy megyőzzük önöket a termék biztonsága érdekében a natív PHP backend miatt.
</p>

<h2>Adatbázis terv</h2>
<p>
Mivel az adatok egy központi adatbázisba lesznek tárolva ezért elengedhetetlen a megfelelő adatkezelés.
A szoftver két adatbázistáblát fog tartalmazni ami a következőképpen fog kinézni:</br>
"kerdoivek" tábla: </br>
<ul>
<li>1.oszlop: id </li>
<li>2.oszlop: súly </li>
<li>4.oszlop: első érték </li>
<li>5.oszlop: második érték </li>
<li>6.oszlop: harmadik érték </li>
<li>7.oszlop: negyedik érték </li>
<li>8.oszlop: ötödik érték </li>
<li>9.oszlop: dátum </li>
</ul>
Az első oszlop a beküldött kérdőív azonosítóját tartalmazza ami autoincrement tulajdonsággal rendelkezik és generált.
A súly a PHP backend részlegén kerül kiszámításra a kérdőív első feléből amihez a "helyes_adatok" tábla ad irányt.
A következő oszlopok az egyes eredményekre adott választ fogják külön tárolni, majd az utolsó oszlop a beküldés dátumát
statisztika számolásához egy opcionális paraméter.</br>
"helyes_adatok" tábla: </li>
<li>1.oszlop: első érték </li>
<li>2.oszlop: második érték </li>
<li>3.oszlop: harmadik érték </li>
<li>4.oszlop: negyedik érték </li>
<li>5.oszlop: ötödik érték </li>
A tábla a súly kiszámításához ad segítséget amiből ki lehet számolni a beküldő jártasságát a témában.
A táblák között nem szerepel kapcsolat se függőség.
</p>

<h2>Üzleti folyamatok</h2>
Az üzleti folyamatok az alábbiak alapján fog létrejönni:</br>
<img src="resources/rt_funk.png">

Ahogy a képen is látható, a felhasználó közvetlen a kérdőívet éri el. Miután a kérdőív kitöltésre került
Az adatt továbítódik a feldolgozószkriptnek ami a bemenetet támadási értékek esetén semlegesíti. Miután
megtörtént az adatok előkészítése továbítja az adatbázissal kapcsolatban lévő interfésznek. Ez az interfész 
biztonságos kapcsolódást nyújt az adatbázishoz, a bemenet itt is előkészített formában kerül továbításra az esetleg XSS védelmi hiba miatt az SQL injection kikerülése érdekében.
Ha a kapcsolat létrejött és sikeresen megtörtént az adatbázisba írás továbbítja az adatfeldolgozó interfésznek a választ és a felhasználó informatív
üzenetben részesül annak kapcsán, hogy az adata feldolgozásra került-e.
Az adatfeldolgozó interfészben lévő ellenőrző szkript meghívásra került ha elegendő adat került az adatábizsba
és becslő interfész dolgozni kezd, majd elkészíti a becslést és ha a felhasználó kérte akkor e-mailben választ kap. Egyéb esetben egy fájlba íródik
a létrejött becslést. Továbbá a program log rendszerrel lesz ellátva, hogy az egyes események megfelelően követhetőek legyenek.


<p>

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
<p><strong>- Penetration teszt</strong></p>

<h3>Tesztelés kontrollja</h3>
<p>A kérdőív akkor megy át a tesztelés teljes fázisán, ha:
  <ul>
   <li>Átmegy a Unit teszteken</li>
     <li> Átmegy a Penetration teszten</li>
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

<h2>Telepítési terv</h2>
Az alkalmazásunkat a felhasználók egy webes felületen érhetik majd el.</br>
A felhasználóknak nem szükséges semmi mást feltelepíteni egy használni kívánt böngészőn kívül.</br>
Ez a böngésző lehet:</br>
-Google Chrome</br>
-Opera</br>
-Safari</br>
-Firefox</br>
-Microsoft Edge</br>
</br>

<h2>Implementációs terv</h2>

A weboldal alapjaa html és css lesz, működéséért egy php kód fog felelni.</br>
A kinyert adatokat egy MySQL alapú adatbázisban tároljuk.</br>
A felhasználó az oldalra érkezésekor kiválaszthatja, hogy melyik kérdőívet szeretné kitölteni.</br>
Ennek kiválasztása után a kérdőív előtti teszthez kerül, aminek helyes kitöltése után léphet tovább a valódi kérdőívhez.</br>
Azt, hogy a teszten elegendő pontszámot ért e el a kitöltő, egy php kóddal ellenőrizzük le.</br>
Php kód lesz azért is a felelős, hogy a kérdőív kitöltése közben a kitöltő ne tudjon rossz választ adni (számok helyett betűk, stb.).</br>
A kitöltés elvégzése után az adatbázisba továbbitjuk a kinyert információkat.</br>
Amikor szükségünk lesz egy statisztikára, az adatbázisból hivjuk meg az adatokat, és egy algoritmussal elvégeztetjük a statisztikák elkészítését.</br>

A statisztikákat megjelenitjük az oldalon és lehetőséget kinálunk ezek kimentésére.</br> 
<h3>A rendszer követelményei</h3>


A statisztikákat megjelenitjük az oldalon és lehetőséget kinálunk ezek kimentésére.</br> 

A statisztikákat megjelenitjük az oldalon és lehetőséget kinálunk ezek kimentésére.</br> 

<h3>Absztrakt domain modell</h3>

Alkalmazásunk olyan részekből fog állni, melyek PHP, HTML és CSS részeket foglalnak magukba.
Megvalósításra egy olyan rétegelt felépítésre gondoltunk, mely a következőket valósítja meg:
<ul>
   <li>Frontend felület, melyet a felhasználó lát és ezzel interakcionál</li>
   <li>Backend felület, mely az adatbázissal való kapcsolatot biztosítja </li>
</ul>
Alkalmazásunk a felhasználó által megadott válaszokat egy form-on keresztül fogja megtenni.
Ennek validálásáért egy olyan komponens fog felelni, mely figyeli a beírt adat helyességét és validitását.
<img src="resources/adm.png">

<h2>A rendszer követelményei</h2>


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
