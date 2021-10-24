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