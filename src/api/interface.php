<?php

/*
JSON objektum = {
    "elso_ertek" = int(1-4)
    "masodik_ertek" = int(1-4)
    "harmadik_ertek" = int(1-4)
    "negyedik_ertek" = int(1-4)
    "otodik_ertek" = int(1-4)
    "predikcios_ertek" = int(1-5)
}
*/

require_once("../php/json_process.php");
require_once("../php/database_agent.php");

try{
$raw_input = json_decode(
                        file_get_contents("php://input")
                        );

if($raw_input === null){
    http_response_code(400);
    throw new Exception("Invalid JSON input");
}

$sanitazed_input = prepare_input($raw_input);

$correct_answers = [
    "elso_ertek" => 3,
    "masodik_ertek" => 3,
    "harmadik_ertek" => 4,
    "negyedik_ertek" => 3,
    "otodik_ertek" => 2
];

$correct = 0;
foreach($correct_answers as $key=>$i){
    if($sanitazed_input -> $key === $i){
        $correct++;
    }
}

$data = json_encode(
    (object)[
        "suly"=>$correct/count($correct_answers),
        "predikcios_ertek" => $sanitazed_input->predikcios_ertek
    ]
    );

insert_the_data($data);




die(json_encode((object)[
    "success" => True
]));

}
catch(Exception $e){
    die(json_encode((object)[
        "success" => False,
        "message" => $e->getMessage()
    ]));
}
?>