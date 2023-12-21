<?php

namespace DAO;
use models;

include_once('../models/Joueur.php');
require_once 'DAO.php';

class joueurDAO
{
    public function creerJoueur($tmp)
    {

        $joueur = new models\Joueur();

        $joueur->setIdJoueur($tmp['id_joueur']);
        $joueur->setPseudoJoueur($tmp['pseudo_joueur']);
        $joueur->setMeilleurScoreJoueur($tmp['meilleur_score_joueur']);

        return $joueur;
    }

    public function lireRequete($sql, $arguments)
    {
        global $db_name, $user, $pass;

        $bdd = new \PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

        $listJoueur = array();
        while ($tmp = $rs->fetch()) {
            $joueur = $this->creerJoueur($tmp);
            array_push($listJoueur, $joueur);
        }
        return $listJoueur;
    }

    public function executerRequete($sql, $arguments)
    {

        global $db_name, $user, $pass;

        $bdd = new \PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
        $rs = $bdd->prepare($sql);
        $rs->execute($arguments);

    }

    public function getToutesLesScores()
    {
        $sql = "SELECT meilleur_score_joueur FROM JOUEUR;";
        $argument = array();
        return $this->lireRequete($sql, $argument);
    }

    public function getToutesJoueur()
    {
        $sql = "SELECT * FROM JOUEUR;";
        $argument = array();
        return $this->lireRequete($sql, $argument);
    }

    public function getJoueurParId($id)
    {
        $sql = "SELECT * FROM JOUEUR WHERE id_joueur = ?;";
        $arguments = array();
        array_push($arguments, $id);
        return $this->lireRequete($sql, $arguments);
    }

    public function insertJoueur($pseudo)
    {
        $sql = "INSERT into JOUEUR Values (0, ?, 0)";
        $argument = array();
        array_push($argument, $pseudo);
        return $this->executerRequete($sql, $argument);
    }

    public function updateJoueurPseudo($pseudo, $id)
    {
        $sql = "UPDATE JOUEUR SET JOUEUR.pseudo_joueur = ? WHERE `JOUEUR`.`id_joueur` = ?;";
        $argument = array();
        array_push($argument, $pseudo, $id);
        return $this->executerRequete($sql, $argument);
    }

    public function updateJoueurScore($score, $id)
    {
        $sql = "UPDATE `JOUEUR` SET `meilleur_score_joueur` = ? WHERE `JOUEUR`.`id_joueur` = ?;";
        $argument = array();
        array_push($argument, $score, $id);
        return $this->executerRequete($sql, $argument);
    }

    public function retournerLesVingtMeilleursScores(){
        $sql = "SELECT * FROM `JOUEUR` ORDER BY meilleur_score_joueur DESC LIMIT 20;";
        $argument = array();
        return $this->lireRequete($sql, $argument);
    }
}