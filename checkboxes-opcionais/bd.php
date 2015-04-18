<?php
header("Content-Type: text/html; charset=utf-8");

error_reporting(E_ALL);
ini_set('display_errors', true);

$CONFIG = parse_ini_file('config.ini', true);
$DB = $CONFIG['dev'];

$mysqli = new mysqli($DB['host'], $DB['user'], $DB['pass'], $DB['db']);
