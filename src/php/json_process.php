<?php

function prepare_input($obj){
    $tmp = [];

    foreach(["elso_ertek","masodik_ertek","harmadik_ertek","negyedik_ertek","otodik_ertek","predikcios_ertek"]
     as $key)
     {
            
        $tmp[$key] = (int)$obj->$key;
     }

     return (object) $tmp;
    
}



