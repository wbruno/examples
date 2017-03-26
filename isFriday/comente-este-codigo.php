<style type="text/css">
#g td {
	width: 25px; height: 25px;
	text-align: center;
}
#g td.d { background: #000; color: #f00; }
</style>
<table id="g">
<tr>
<?php
	$j = 1;
	$k = 1;
	for( $i=0; $i<81; $i++ )
	{
		$ctrl = $i!=0 && $i%9==0;
		if( $ctrl ) echo '</tr>'.PHP_EOL.'<tr>'.PHP_EOL;
		
		$class = $j==$k || $j+$k==10 ? ' class="d"' : '';  
		$text = $j==5 || $k==5 ? '+' : '-'; 
            
		echo "\t".'<td'.$class.'>'.$text.'</td>'.PHP_EOL;
	
		$j = $j>=9 ? 1 : $j+1;
		$k = $j==1 ? $k+1 : $k;		
	}
?>
</tr>
</table>
