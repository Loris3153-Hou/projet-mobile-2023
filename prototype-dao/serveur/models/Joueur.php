<?php

namespace models;

class Joueur
{

    public $idJoueur;
    public $pseudoJoueur;
    public $meilleurScoreJoueur;

    public function __construct() {
        $this->idJoueur = "";
        $this->pseudoJoueur = "";
        $this->meilleurScoreJoueur = "";
    }

    /**
     * @return string
     */
    public function getIdJoueur()
    {
        return $this->idJoueur;
    }

    /**
     * @param string $idJoueur
     */
    public function setIdJoueur($idJoueur)
    {
        $this->idJoueur = $idJoueur;
    }

    /**
     * @return string
     */
    public function getPseudoJoueur()
    {
        return $this->pseudoJoueur;
    }

    /**
     * @param string $pseudoJoueur
     */
    public function setPseudoJoueur($pseudoJoueur)
    {
        $this->pseudoJoueur = $pseudoJoueur;
    }

    /**
     * @return string
     */
    public function getMeilleurScoreJoueur()
    {
        return $this->meilleurScoreJoueur;
    }

    /**
     * @param string $meilleurScoreJoueur
     */
    public function setMeilleurScoreJoueur($meilleurScoreJoueur)
    {
        $this->meilleurScoreJoueur = $meilleurScoreJoueur;
    }

}