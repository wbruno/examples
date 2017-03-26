<?php
/**
 * @author Locaweb
 * @date 2012-09-26
 * @file howManyTimeToFriday.class.php
 */
header('Content-Type: text/html; charset=utf-8'); 
date_default_timezone_set('America/Sao_Paulo');

class HowManyDays {
	private $days = Array('Sun'=>0,'Mon'=>1,'Tue'=>2,'Wed'=>3,'Thu'=>4,'Fri'=>5,'Sat'=>6);

	public function howMany() {
		$today = date('D');
		if( $today!='Fri' ) {
			return $this->days['Fri'] - $this->days[ $today ];
		} else {
			return 'Hoje é sexta-feira!!';
		}

	}
}
$HowManyDays = new HowManyDays();
$howMany = $HowManyDays->howMany();

if($howMany>0)
	echo 'Faltam ' . $howMany . ' dia(s) para Sexta-Feira';
else if($howMany==0)
	echo $howMany;
else
	echo 'Foi ontem!!';