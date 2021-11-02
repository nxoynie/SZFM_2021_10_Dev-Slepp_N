<?php

/*

        Adatbáziskezelő függvények
            - connectdb() -> NEM KELL MEGHIVNI
            - querry_the_data() -> kinyeri az adatokat az adatbazisbol majd tombbkent adja vissza JSON objektumokkal
            - insert_the_data(JSON objektum) -> A megadott JSON objektumot az adatbazishoz adja, visszateresi ertek: 1-siker, -1-kudarc 

            *JSON objektum = {
                                "suly" = x
                                "elso_ertek" = x
                                "masodik_ertek" = x
                                "harmadik_ertek" = x
                                "negyedik_ertek" = x
                                "otodik_ertek" = x
                            }


*/

function querry_the_data(){

    $conn = connectdb();

    $sth = mysqli_query($conn, "SELECT * FROM kerdoivek;");
    $rows = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $rows[] = $r;
    }

    mysqli_close($conn);

    return json_encode($rows);
}

function insert_the_data($jsonobj){
    $data = json_decode($jsonobj, true);

    $suly = $data['suly'];
    $elso_ertek = $data['elso_ertek'];
    $masodik_ertek = $data['masodik_ertek'];
    $harmadik_ertek = $data['harmadik_ertek'];
    $negyedik_ertek = $data['negyedik_ertek'];
    $otodik_ertek = $data['otodik_ertek'];

  
    $datum = date("Y/m/d H:i:s");

    $conn = connectdb();
 
    $stmt = $conn->prepare("INSERT INTO kerdoivek (suly, elso_ertek, masodik_ertek, harmadik_ertek,
    negyedik_ertek, otodik_ertek, datum) 
    VALUES (?,?,?,?,?,?,?)");
    $stmt->bind_param("diiiiis", $suly,$elso_ertek,$masodik_ertek,$harmadik_ertek,$negyedik_ertek,$otodik_ertek,$datum);
    $stmt->execute();
    
    $flag = $conn-> affected_rows;
    $stmt -> close();
    $conn -> close();
    
    return $flag;
}

function connectdb(){
    $ini_array = parse_ini_file("config/config.ini");
    $username = $ini_array["username"];
    $password = $ini_array["password"];
    $host = $ini_array["host"];
    $dbname = $ini_array["dbname"];

    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}

?>
