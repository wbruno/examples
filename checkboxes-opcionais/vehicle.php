<?php
require 'bd.php';
require 'functions.php';

$id = getPost('id');
$name = getPost('name');
$year = getPost('year');
$model = getPost('model');
$optionals = isset($_POST['optional']) ? $_POST['optional'] : [];


if ($id) {
  //update
  $sql = "UPDATE vehicles SET name = '{$name}', year = '{$year}', model = '{$model}' WHERE id = {$id}";
  echo $sql, '<br /><br />';
  $query = $mysqli->query($sql)or die($mysqli->error);


  $sql = "DELETE FROM vehicle_optional WHERE id_vehicle = {$id}";
  echo $sql, '<br /><br />';
  $mysqli->query($sql)or die($mysqli->error);

  $sql = insert_vehicle_optional($id, $optionals);
  echo $sql;
  $mysqli->query($sql)or die($mysqli->error);
} else {
  //insert

  $sql = "INSERT INTO vehicles (id, name, year, model) VALUES(NULL, '{$name}', '{$year}', '{$model}')";
  echo $sql, '<br /><br />';
  $query = $mysqli->query($sql)or die($mysqli->error);

  $id = $mysqli->insert_id;//ultimo id inserido no banco


  $sql = insert_vehicle_optional($id, $optionals);
  $mysqli->query($sql)or die($mysqli->error);
  // $ret['status'] = 'ok';
  // json_encode($ret);
}

function insert_vehicle_optional($id, $optionals) {
  //optional insert
  $values = [];
  foreach($optionals AS $id_optional) {
    $values[] = "({$id}, {$id_optional})";
  }
  $values = implode(',', $values);

  return "INSERT INTO vehicle_optional (id_vehicle, id_optional) VALUES {$values}";
}
