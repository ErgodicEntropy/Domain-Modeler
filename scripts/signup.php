<?php

$email = $_POST["email"];
$password = $_POST["password"];

$regexp = "/^[a-zA-z0-1]+@[a-zA-z]+\.[a-zA-z]{2,}$/";

if (!isset($email) || !isset($password)){
    die("email or password not sent!");
} else {
    echo "email and password submitted successfully!";
}

$servername = "localhost";
$username   = "root";
$password   = "";        // empty by default in XAMPP
$dbname     = "emsi";    // database you want
$port       = 3306;      // default MySQL port


$cnx = new mysqli($servername, $username, $password, $dbname, $port); 

$hashedPass = password_hash($password, PASSWORD_DEFAULT);

//prepared statement to prevent sql injection
$prep = $cnx->prepare("INSERT INTO Students (email, password_hash) VALUES(?,?)"); 
$prep->bind_param("ss", $email, $hashedPass); 

$prep->execute();
$prep->close();


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

