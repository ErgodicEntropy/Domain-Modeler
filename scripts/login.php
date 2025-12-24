<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] !== "POST"){ 
    die("Invalid request method");
}

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

$check = "SELECT id, username, password_hash FROM Students WHERE email = ?;";
$cpep = $cnx->prepare($check);
$cpep->bind_param("s", $em); 
$cpep->execute();

$result = $cpep->get_result(); //records

/* Check if user exists */
if ($result->num_rows !== 1) { //number of records results of the query: either 1 or 0
    die("Invalid email or password");
}

$user = $result->fetch_assoc(); //retrieve columns in the query and store them in a dictionary -> returns an associative array of column keys and values

/* Verify password */
if (!password_verify($ps, $user["password_hash"])) {
    die("Invalid email or password");
}


$_SESSION['user_id'] = $user['id'];
$_SESSION['username'] = $user['username'];
$_SESSION['password'] = $user['password_hash'];

$cnx->close();

header("Location: ../templates/profile.html"); 
exit; 
?>

