<?php
 
if( $_SERVER['REQUEST_METHOD']=='POST' ){
  $id_produto = (int)getPost('id_produto');
  $voto = (int)getPost('voto');
 
  $sql = "INSERT INTO voto (`id_produto`, `voto`, `ip`, `data`) VALUES ( {$id_produto}, {$voto}, '{$_SERVER['REMOTE_ADDR']}', NOW() )";
  echo $sql;
}
 
 
function getPost( $key ){
  return isset( $_POST[ $key ] ) ? filter( $_POST[ $key ] ) : null;
}
function filter( $str ){
  return addslashes( $str );//a cargo do leitor
}
