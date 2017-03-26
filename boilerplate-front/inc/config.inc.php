<?php
	header("Content-Type: text/html; charset=utf-8");
	
	
	//session_start();


	$meta = Seo::metas();
	$description = $meta['desc'];
	$title = $meta['title'];
	$cannonical = $meta['canonical'];
	$url = Seo::getUrl();
	$domain = Seo::getDomain();
