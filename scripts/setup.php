<?php

$servername = "localhost";
$username   = "root";
$password   = "";        // empty by default in XAMPP
$dbname     = "emsi";    // database you want
$port       = 3306;      // default MySQL port

$cnx = new mysqli($servername, $username, $password, $dbname, $port); 

if ($cnx->connect_error){
    die("connection error" . $cnx->connect_error);
} else {
    echo "connected successfully!"; 
}

$db = "CREATE DATABASE IF NOT EXISTS EMSIDB;";

if ($cnx->query($db)){
    echo "Database successfully created!";
} else {
    echo "Database not created:" . $cnx->error;
}

$sql = "CREATE TABLE IF NOT EXISTS Students (
    id INT AUTO_INCREMENT PRIMARY KEY;
    username VARCHAR(100),
    email VARCHAR(255),
    password_hash VARCHAR(255),
    birth DATE,
    lang VARCHAR(50),    
    score INT DEFAULT 0 
);"; 

if ($cnx->query($sql)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}

$sqlc = "CREATE TABLE IF NOT EXISTS Courses (
    id INT AUTO_INCREMENT PRIMARY KEY;
    name VARCHAR(100),
    
);"; 

if ($cnx->query($sqlc)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}


$cnx->close();

?>