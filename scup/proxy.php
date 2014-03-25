<?php
/**
 * @file proxy.php
 * @author William Bruno <wbrunom@gmail.com>
 * @date 2014-02-21
 */


function curl($url) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_TIMEOUT, '3');
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

    $content = curl_exec($ch);
    $info = curl_getinfo($ch);

    if ($info['http_code'] === 200 || $info['http_code'] === 304) {
        return trim($content);
    } else {
        return ''; 
    }   

    curl_close($ch);
}

header('Content-type: application/json');
echo curl('http://www.scup.com/outros/jobs/frontend-test-success.json');
exit();