<?php

include_once('../DAO/JoueurDAO.php');

$utilisateurDAO = new DAO\JoueurDAO();
$util = "";
if (isset($_GET["token"])){
    if($_GET["token"] == "valeurAuthentification"){
        if (isset($_GET["methode"])) {
            $html = '';
            if ($_GET["methode"] == "retournerLesVingtMeilleursScores"){
                $utilisateur = $utilisateurDAO->retournerLesVingtMeilleursScores();
                $util = json_encode($utilisateur);
            }

            if ($_GET["methode"] == "getJoueurParId") {
                if (isset($_GET["joueur"])){
                    $utilisateur = $utilisateurDAO->getJoueurParId($_GET["joueur"]);
                    $util = json_encode($utilisateur);
                }
            }
            if ($_GET["methode"] == "ModifierLePseudo") {
                if (isset($_GET["joueur"])){
                    if (isset($_GET["newPseudo"])){
                        $utilisateur = $utilisateurDAO->updateJoueurPseudo($_GET["newPseudo"], $_GET["joueur"]);
                        $util = json_encode($utilisateur);
                    }
                }
            }
            if ($_GET["methode"] == "ModifierLeScore") {
                if (isset($_GET["joueur"])){
                    if (isset($_GET["newScore"])){
                        $utilisateur = $utilisateurDAO->updateJoueurScore($_GET["newScore"], $_GET["joueur"]);
                        $util = json_encode($utilisateur);
                    }
                }
            }

            echo $util;

            //$utilisateur = $utilisateurDAO->getToutesJoueur();
            //$util = json_encode($utilisateur);

            //echo $util;
        }
    }
}


