<?php

$servername = "localhost";
$username   = "root";
$password   = "";        // empty by default in XAMPP

$cnx = new mysqli($servername, $username, $password); 

if ($cnx->connect_error){
    die("connection error" . $cnx->connect_error);
} else {
    echo "connected successfully!"; 
}

$cnx->set_charset("utf8mb4");

$db = "CREATE DATABASE IF NOT EXISTS EMSIDB;";

if ($cnx->query($db)){
    echo "Database successfully created!";
} else {
    echo "Database not created:" . $cnx->error;
}

$cnx->select_db("EMSIDB"); 

$sql = "CREATE TABLE IF NOT EXISTS Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    birth DATE,
    lang VARCHAR(50) DEFAULT 'English',    
    score INT DEFAULT 0 
);"; 

if ($cnx->query($sql)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}

$sqlc = "CREATE TABLE IF NOT EXISTS Courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);"; 

if ($cnx->query($sqlc)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}


$cnx->close();

header("Location: ../templates/signup.html"); 

exit; 

?>