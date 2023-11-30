DROP TABLE IF EXISTS JOUEUR;

CREATE TABLE JOUEUR(
                       id_joueur INT PRIMARY KEY AUTO_INCREMENT,
                       pseudo_joueur VARCHAR(20) NOT NULL,
                       meilleur_score_joueur INT
)