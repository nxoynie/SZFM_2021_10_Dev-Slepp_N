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
