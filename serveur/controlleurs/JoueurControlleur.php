<?php

include_once('../DAO/JoueurDAO.php');

$utilisateurDAO = new DAO\JoueurDAO();

if (isset($_GET["token"])){
    if($_GET["token"] == "valeurAuthentification"){
        if (isset($_GET["joueur"])) {
            $html = '';

            $utilisateur = $utilisateurDAO->getToutesJoueur();
            $util = json_encode($utilisateur);
            //$html .= $utilisateur[0]->getIdJoueur() . $utilisateur[0]->getPseudoJoueur() . $utilisateur[0]->getMeilleurScoreJoueur();

            echo $util;
        }
    }
}


