<?php

$us = $_POST["username"];
$age = $_POST["date"];
$lang = $_POST["language"];


if (!isset($us) || !isset($age) || !isset($lang)){
    die("invalid request! try again");
} else {
    echo "valid request!";
}


$servername = "emsi123";
$username = "emsiUser";
$password = ""; 
$dbname = "EMSIDB";

$cnx = new mysqli($servername, $username, $password, $dbname); 

if ($cnx->connect_error){
    die("connection error" . $cnx->connect_error);
} else {
    echo "connected successfully!"; 
}

$prep = $cnx->prepare("INSERT INTO Students (username, birth, lang) VALUES(?,?)"); 
$prep->bind_param("sds", $us, $age, $lang);

$prep->execute();
$prep->close();


$cnx->close();
header("Location: home.html"); 
exit; 
?>

