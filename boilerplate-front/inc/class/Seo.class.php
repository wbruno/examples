<?php

class Seo {

	private static $title = 'TITLE DEFAULT';
	private static $desc_default = 'DESCRIPTION';
	private static $url = 'DOMINIO_DO_SITE.com.br';
	
	public static function metas() {
		$self = $_SERVER['PHP_SELF'];
		$p = explode('/', $self);
		
		return self::pg( end( $p ) );
	}

	public static function getUrl() {
		return 'http://' . self::$url;
	}
	
	public static function getDomain() {
		return self::$url;
	}
	
	private static function pg( $pg ) {
		switch( $pg )
		{				
			case '404.html':
				$arr['desc'] = 'Bla bla ' . self::$desc_default;
				$arr['title'] = 'Bla bla - ' . self::$title;
				$arr['canonical'] = self::getUrl() . '/interna.html';
				break;
				
			case 'home':
				$arr['desc'] = 'Bla bla ' . self::$desc_default;
				$arr['title'] = self::$title;
				$arr['canonical'] = self::getUrl();
				break;

			default:
				$arr['desc'] = self::$desc_default;
				$arr['title'] = self::$title;
				$arr['canonical'] = self::getUrl();
				break;
		}
	
		return $arr;
	}
}//Seo
