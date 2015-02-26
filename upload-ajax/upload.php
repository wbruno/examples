<?php

if (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
  file_put_contents('uploads/post.txt', 'name=' . $_POST['name'] . ',count=' . $_POST['i'] . PHP_EOL, FILE_APPEND);
  move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $_FILES['file']['name']);

  $ret = array('status' => 'ok');
} else {
  $ret = array('error' => 'no_file');
}

header('Content-Type: application/json');
echo json_encode($ret);
exit;
