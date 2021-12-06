<?php
require("../php/database_agent.php");
require_once("../php/json_process.php");

try {
    $raw_input = json_decode(file_get_contents("php://input"));
    
    if ($raw_input === null) {
        http_response_code(400);
        throw new Exception("Invalid JSON input");
    }
        
    $sanitazed_input = prepare_input($raw_input);

    $database = $sanitazed_input -> kerdoiv; //bitcoin/forma1

    data_to_csv($database . "_atlagok");
}
catch(Exception $e) {
    die(json_encode((object)[
        "success" => False,
        "message" => $e->getMessage()
    ]));
}
?>