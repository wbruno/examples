<?php
  require 'bd.php';
  require 'functions.php';

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>

  <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>

<main>
  <h1>Cadastro de carros famosos</h1>
<?php

$id = (int)getGet('id');
$name = '';
$year = '';
$model = '';


if ($id) {
  $sql = "SELECT id, name, year, model FROM vehicles WHERE id = {$id}";
  $query = $mysqli->query($sql)or die($mysqli->error);

  $vehicle = $query->fetch_object();
  $id = $vehicle->id;
  $name = $vehicle->name;
  $year = $vehicle->year;
  $model = $vehicle->model;
}
?>
  <form method="post" action="vehicle.php">
    <fieldset>
      <label>ID:
        <input type="text" name="id" readonly="readonly" value="<?php echo $id; ?>">
      </label>
      <label>Nome:
        <input type="text" name="name" value="<?php echo $name; ?>" />
      </label>
      <label>Ano de Fabricação:
        <input type="text" name="year" value="<?php echo $year; ?>" maxlength="4" />
      </label>
      <label>Modelo:
        <input type="text" name="model" value="<?php echo $model; ?>" />
      </label>
      <fieldset>
        <legend>Opcionais</legend>
<?php

  $sql = " SELECT `optional`.`id` , `optional`.`name`                   ";
  $sql .= " , ( case when `vehicle_optional`.`id_optional` is not null  ";
  $sql .= "     then 'checked'  end) as checked                         ";
  $sql .= " FROM `optional`                                             ";
  $sql .= " LEFT JOIN `vehicle_optional`                                ";
  $sql .=	" ON `vehicle_optional`.`id_optional` = `optional`.`id`       ";
  $sql .=	" AND `vehicle_optional`.`id_vehicle` = {$id}                 ";
  $sql .=	" ORDER BY `optional`.`id`                                    ";

  $query = $mysqli->query($sql)or die($mysqli->error);
  while($row = $query->fetch_object()) {
?>
    <label>
      <input type="checkbox" name="optional[]" value="<? echo $row->id; ?>" <?php echo $row->checked; ?>/>
    <?php echo $row->name; ?></label>
<?php
  }
?>
    </fieldset>
    <input type="submit" name="save" value="Salvar!!" />
  </fieldset>
</form>
</main>
</body>
</html>
