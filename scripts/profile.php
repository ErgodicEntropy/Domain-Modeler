<?php

$username = "Ayoub";
$password = ""; 
$servername = "";
$dbname = "";
$port = 5000;

$cnx = new mysqli($username, $password, $servername, $dbname, $port); 

if ($cnx->connect_error){
    die("connection error" . $cnx->connect_error);
} else {

}

$db = "CREATE DATABASE EMSI IF NOT EXISTS;";

$sql = "CREATE TALBE Student(
    Id INT PRIMARY KEY AUTO_INCREMENT;
    username VARCHAR;
    birth DATE;
    lang VARCHAR;    
);"; 

if ($cnx->query($sql)){
    echo "Table successfully created!";
} else {
    echo "Table not created:" . $cnx->error;
}





class Person{
    public $name;
    public $age;

    function __construct($n, $a, $g){
        $this->name = $n; 
        $this->age = $a;
    }

    function getName(){
        return $this->name;
    }

    function getAge(){
        return $this->age;
    }


    function __destruct(){
        echo "{$this->name} has been destroyed!";
    }
}

class Student extends Person{
    private $grade;
    function __construct($g){
        $this->grade = $g; 
    }    

    function getGrade(){
        return $this->grade;
    }

}




header("locate: home.html"); 

?>

