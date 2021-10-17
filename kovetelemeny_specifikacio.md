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