<?php

$email = $_POST["email"];
$password = $_POST["password"];

$regexp = "/^[a-zA-z0-1]+@[a-zA-z]+\.[a-zA-z]{2,}$/";

if (!isset($email) || !isset($password)){
    die("email or password not sent!");
} else {
    echo "email and password submitted successfully!";
}


$username = "emsiUser";
$password = ""; 
$servername = "emsi123";

$cnx = new mysqli($servername, $username, $password); 

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
    score INT, 
);"; 

if ($cnx->query($sql)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}

$hashedPass = password_hash($password, PASSWORD_DEFAULT);

//prepared statement to prevent sql injection
$prep = $cnx->prepare("INSERT INTO Students (email, password_hash) VALUES(?,?)"); 
$prep->bind_param("ss", $email, $hashedPass); 

$prep->execute();
$prep->close();

$sqlc = "CREATE TABLE IF NOT EXISTS Courses (
    id INT AUTO_INCREMENT PRIMARY KEY;
    name VARCHAR(100),
    
);"; 

if ($cnx->query($sqlc)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}

// $add = "INSERT INTO Students (email, password_hash)
// VALUES($email, $hashedPass);";

// if ($cnx->query($add)){
//     echo "user added successfully created!";
// } else {
//     echo "user not added:" . $cnx->error;
// }


$cnx->close();

header("Location: profile.html"); 

exit; 

?>

