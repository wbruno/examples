<?php
/**
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-03-28
 * @file process.php
 */


function getPost($key) {
    return isset($_POST[$key]) ? $_POST[$key] : '';
}
function maskLink($link) {
    return 'http://site.com.br/?redirect='.md5($link);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $text = str_replace('__AMP__', '&', getPost('text'));

    $ret = preg_replace_callback(
        '/href="([^"]+)"/',
        create_function(
            '$matches',
            'return "href=\"".maskLink($matches[1])."\"";'
        ),
        $text
    );

    echo $ret;
}