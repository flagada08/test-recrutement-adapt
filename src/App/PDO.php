<?php
    $servername = 'localhost';
    $username = 'root';
    $password = '';

    // On récupère toutes les offres
    $sql = 'SELECT * FROM affairetest';
    
    // On essaie de se connecter
    try{
        $conn = new PDO("mysql:host=$servername;dbname=test-recrutement-adapt", $username, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        // On définit le mode d'erreur de PDO sur Exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        $stmt = $conn->query($sql);
    }
    
    /**
     * On capture les exceptions si une exception est lancée et on affiche
     * les informations relatives à celle-ci
     */
    catch(PDOException $e){
      echo "Erreur : " . $e->getMessage();
    }
?>