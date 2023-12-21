<?php

include_once('../DAO/JoueurDAO.php');

$utilisateurDAO = new DAO\JoueurDAO();

if (isset($_GET["token"])){
    if($_GET["token"] == "valeurAuthentification"){
        if (isset($_GET["methode"])) {
            $html = '';
            if ($_GET["methode"] == "retournerLesVingtMeilleursScores"){
                $utilisateur = $utilisateurDAO->retournerLesVingtMeilleursScores();
                $util = json_encode($utilisateur);
            }

            if ($_GET["methode"] == "getJoueurParId") {
                if (isset($_GET["idJoueur"])){
                    $utilisateur = $utilisateurDAO->getJoueurParId($_GET["idJoueur"]);
                    $util = json_encode($utilisateur);
                }
            }

            echo $util;

            //$utilisateur = $utilisateurDAO->getToutesJoueur();
            //$util = json_encode($utilisateur);

            //echo $util;
        }
    }
}


