<?php


$parser = new Parser();

$tmp = $_FILES['doc']['tmp_name']; //name, type, tmp_name, error, size 

// $file = fopen($tmp,'r');
// $content = fread($file, filesize($tmp)); //reads the raw bytes of a file regardless of its format
// fclose($file); 


$pdf = $parser->parseFile($tmp);
$text = $pdf->getText();



?>