<?php

namespace DAO;
use models;

include_once('../models/Joueur.php');

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

        require 'DAO.php';

        $bdd = new PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
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

        require 'DAO.php';

        $bdd = new PDO("mysql:host=localhost;dbname=$db_name", $user, $pass);
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

    public function updateJoueur($pseudo)
    {
        $sql = "UPDATE JOUEUR SET JOUEUR.pseudo_joueur = ?;";
        $argument = array();
        array_push($argument, $pseudo);
        return $this->executerRequete($sql, $arguments);
    }
}