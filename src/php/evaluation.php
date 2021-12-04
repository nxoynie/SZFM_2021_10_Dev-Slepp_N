<?php
require("../php/database_agent.php");

$data = json_decode(querry_the_data(), true);

$number_of_rows = count($data);

$results = [];

for ($i = 0; $i < $number_of_rows; $i++) {
    $weight = $data[$i]["suly"];
    $prediction = $data[$i]["predikcio"];

    $results[] = $weight * $prediction; 
}

$average = array_sum($results) / $number_of_rows;

if ($average != querry_latest_average()) {
    insert_average_data($average);
}
?>