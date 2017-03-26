<?php
/**
 * @author Locaweb
 */

header('Content-Type: text/html; charset=utf-8');

$opt = isset( $_GET['opt'] ) ? $_GET['opt'] : '';

if( date('D')==='Fri' ){
	echo 'Ufa! enfim chegou a ' . (int)date('W') . 
		'ª sexta-feira do ano!<br /><br />'.PHP_EOL;

	$text = 'E eu vou: ';
	switch( $opt )
	{
		case 'sair':
			$text .= 'ir embora mais cedo';
			break;

		case 'trabalhar':
			$text .= 'terminar aquele sistema';
			break;

		case 'extra':
			$text .= 'fazer hora extra';
			break;

		case 'git':
			$text .= 'enviar o último pull request da semana';
			break;

		default:
			$text .= 'virar a madrugada jogando no level expert';
			break;

	}
	echo $text;
}