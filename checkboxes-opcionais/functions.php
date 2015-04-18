<?php

function getPost($key) {
  return isset($_POST[$key]) ? filter_input(INPUT_POST, $key) : '';
}
function getGet($key) {
  return isset($_GET[$key]) ? filter_input(INPUT_GET, $key) : '';
}

