<?php

if( $_SERVER['REQUEST_METHOD']==='POST' ) {
    echo file_put_contents('answers.json', $_POST['data'] . "," . PHP_EOL, FILE_APPEND);
}