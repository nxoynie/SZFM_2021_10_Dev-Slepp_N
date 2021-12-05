<?php
require("../php/database_agent.php");

try {
    $raw_input = json_decode(file_get_contents("php://input"));
    
    if ($raw_input === null) {
        http_response_code(400);
        throw new Exception("Invalid JSON input");
    }
        
    $sanitazed_input = prepare_input($raw_input);*/

    $database = $sanitazed_input -> kerdoiv; //bitcoin/forma1

    $data = json_decode(querry_the_data($database . "_kerdoivek"), true);

    $number_of_rows = count($data);

    $results = [];

    for ($i = 0; $i < $number_of_rows; $i++) {
        $weight = $data[$i]["suly"];
        $prediction = $data[$i]["predikcio"];

        $results[] = $weight * $prediction; 
    }

    $average = array_sum($results) / $number_of_rows;

    if ($average != querry_latest_average($database . "_atlagok")) {
        insert_average_data($average, $database . "_atlagok");
    }
}
catch(Exception $e) {
    die(json_encode((object)[
        "success" => False,
        "message" => $e->getMessage()
    ]));
}
?>