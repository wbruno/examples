<?php

header('Content-Type: application/json');
if (isset($_FILES['file'])) {
  file_put_contents('uploads/post.txt', 'name=' . $_POST['name'] . ',count=' . $_POST['i'] . PHP_EOL, FILE_APPEND);
  move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $_FILES['file']['name']);

  echo json_encode('{ status: "ok" }');
} else {
  echo json_encode('{ error: "no_file" }');
}
exit;
