/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
console.log("nombre a deviner est " + solution);
var nombre = Number(prompt("Saisir le nombre à deviner"));
var nombreTentatives = 0;

while(nombre !== Number(solution) && (nombreTentatives<6)){
	if(nombre>Number(solution))
	{
		console.log(nombre + " est trop grand");

	}
	else{
		if(nombre<Number(solution))
		{
			console.log(nombre + " est trop petit");

		}
	}
	nombre = Number(prompt("Saisir le nombre à deviner"));
	nombreTentatives++;
}

if((nombreTentatives<6) && (nombre === Number(solution)))
{
	console.log("Vous avez effectué plus de " + nombreTentatives + " tentatives pour trouver le nombre");
}

if(nombreTentatives>=6)
{
	console.log("Desole! Vous avez effectué plus de " + nombreTentatives + " tentatives");
}