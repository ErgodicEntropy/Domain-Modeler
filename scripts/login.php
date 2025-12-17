<?php

$em = $_POST["email"];
$ps = $_POST["password"];

if (!isset($em) || !isset($ps)){
    die("invalid request! try again");
} else {
    echo "valid request!";
}

$servername = "localhost";
$username   = "root";
$password   = "";        // empty by default in XAMPP
$dbname     = "EMSIDB";    // database you want


$cnx = new mysqli($servername, $username, $password, $dbname); 

if ($cnx->connect_error){
    die("connection error" . $cnx->connect_error);
} else {
    echo "connected successfully!"; 
}

$check = "SELECT email FROM Students;";
if ($cnx->query($check)){
    
}


$cnx->close();
header("Location: ../templates/profile.html"); 
exit; 
?>

