# test-recrutement-adapt
Test hébergé à l'adresse suivante : https://agence-demo.000webhostapp.com/index.html

## tester le projet
1. cloner le projet (git clone)
2. créer/lancer un serveur local (php, apache...)
> chemin contenant l'index.html : "test-recrutement-adapt/src/App/"
3. exécuter le script affaire.sql en ligne de commande ou importer le fichier affaire.sql dans une interface de gestion pour SGBDD MySQL (phpMyAdmin, adminer...)
4. démarrer une instance MySQL
> paramètres par défaut du script PDO.php 
```
$servername = 'localhost'; 
$username = 'root'; 
$password = '';
```

## UX/UI
1. retour page d'accueil : logo "AGENCE DEMO" 
> <img src="https://github.com/flagada08/test-recrutement-adapt/blob/main/src/App/img/logo-client.jpg" width="150">
2. menu burger < à 768px
> <img src="https://github.com/flagada08/test-recrutement-adapt/blob/main/src/ressources/burgerMenuAgenceDemo.PNG">
3. appel de la table affaire.sql en php, via la page "nos offres" de la navbar et/ou le boutton "toutes nos offres"
> <img src="https://github.com/flagada08/test-recrutement-adapt/blob/main/src/ressources/navBarAgenceDemo.PNG">
> <img src="https://github.com/flagada08/test-recrutement-adapt/blob/main/src/ressources/btnOffresAgenceDemo.PNG">

## techno utilisées
1. html
2. css
3. sass
4. js
5. jQuery
6. php

## procédures
1. renew maquette
2. intégration de la maquette en html css (sass preprocessor)
3. création de la BDD depuis le fichier affaire.sql
4. connexion PDO PHP à la BDD
5. composant JS pour le header, footer et la search bar
6. jQuery loader script
