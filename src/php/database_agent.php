<?php

/*

        Adatbáziskezelő függvények
            - connectdb() -> NEM KELL MEGHIVNI
            - querry_the_data() -> kinyeri az adatokat az adatbazisbol majd tombbkent adja vissza JSON objektumokkal
            - insert_the_data(JSON objektum) -> A megadott JSON objektumot az adatbazishoz adja, visszateresi ertek: 1-siker, -1-kudarc 

            *JSON objektum = {
                                "suly" = double
                                "predikcio" = int(1-5)
                            }


*/

function querry_the_data($database) {

    $conn = connectdb();

    $sth = mysqli_query($conn, "SELECT * FROM $database;");
    $rows = array();
    while($r = mysqli_fetch_assoc($sth)) {
        $rows[] = $r;
    }

    mysqli_close($conn);

    return json_encode($rows);
}

function querry_latest_average($database) {

    $conn = connectdb();

    $sth = mysqli_query($conn, "SELECT atlag FROM $database WHERE datum = (SELECT max(datum) FROM $database);");
    $average = mysqli_fetch_row($sth)[0];
        
    mysqli_close($conn);

    return $average;
}

function insert_the_data($jsonobj, $database) {
    $data = json_decode($jsonobj);
    $suly = $data->suly;
    $predikcios_ertek = $data->predikcios_ertek;

  
    $datum = date("Y/m/d H:i:s");

    $conn = connectdb();
 
    $stmt = $conn->prepare("INSERT INTO $database (suly, predikcio, datum) 
    VALUES (?,?,?)");
    $stmt->bind_param("dis", $suly,$predikcios_ertek,$datum);
    $stmt->execute();
    
    $flag = $conn-> affected_rows;
    $stmt -> close();
    $conn -> close();
    
    return $flag;
}

function insert_average_data($average, $database) {
    $date = date("Y/m/d H:i:s");

    $conn = connectdb();
    
    $stmt = $conn->prepare("INSERT INTO $database (atlag, datum) VALUES (?,?)");

    $stmt->bind_param("ds", $average, $date);
    $stmt->execute();
        
    $stmt -> close();
    $conn -> close();
}

function data_to_csv($database) {

    $conn = connectdb();

    $sth = mysqli_query($conn, "SELECT * FROM $database;");

    $f = fopen('php://memory', 'w');

    $fields = array('atlag', 'datum'); 
    fputcsv($f, $fields, ',');

    while($row = mysqli_fetch_assoc($sth)) { 
        $linedata = array($row['atlag'], $row['datum']);

        fputcsv($f, $linedata, ',');
    }

    fseek($f, 0); 
     
    header('Content-Type: text/csv'); 
    header('Content-Disposition: attachment; filename="' . $database . ".csv" . '";'); 
     
    fpassthru($f); 
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
