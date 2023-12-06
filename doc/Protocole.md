getPseudoById(id)

Le client envoi l'identifiant au serveur, le serveur émet une requête SELECT à la base de donnée pour récupérer le pseudo en fonction de l'identifiant passé en paramètre.

getListScore()

Le client envoi une requête pour récupérer un JSON de la liste de score, le serveur émet une requête SELECT à la base de donnée pour récupérer la liste des pseudo avec le meilleur score associé à chaque pseudo et retourne un objet JSON.

{ "toto" : 15, "pierre" : 21, "jean" : 24, "lulu" : 25 }

insertUser(pseudo)  

Le client ajoute son pseudo et un user est insérer coté serveur.

updateUser(pseudo)

Le client change son pseudo et le user correspondant est update coté serveur.
