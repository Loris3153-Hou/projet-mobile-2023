## Authentification et autorisation en PHP

La partie client envoi une requête à la partie serveur avec un token d'authentification pour pouvoir identifier l'application. Lorsque l'authentification est validée, la partie serveur renvoi les informations demandés au format json.

![schéma explicatif](https://www.groupeonepoint.com/wp-content/uploads/2022/10/schema-3-1.jpg)

## PHP Filters

En exploitant les filtres intégrés de filter_var, tels que FILTER_SANITIZE_STRING ou FILTER_VALIDATE_EMAIL, nous pouvons garantir que les données utilisateur sont conformes aux normes attendues. Cela réduit les vulnérabilités liées à l'injection de code et renforce la robustesse de notre code PHP.

En adoptant activement les fonctionnalités de filtrage de PHP, nous élevons la barre en matière de sécurité, créant ainsi des applications plus résilientes face aux attaques potentielles.

## PHP MySQL Prepared Statements

Les déclarations préparées offrent une couche de protection significative en séparant les données utilisateur des instructions SQL. En liant dynamiquement les valeurs aux paramètres de la requête, elles éliminent pratiquement le risque d'injections SQL, une menace courante dans le paysage cybernétique.

En adoptant les Prepared Statements, nous nous assurons que les données entrantes sont traitées de manière sécurisée, réduisant ainsi le potentiel d'exploitation malveillante. 

## Firebase Authentication ou  à valider avec le prof
