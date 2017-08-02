var nb = Number(prompt("Entrez un chiffre"));
if(nb > 0)
{
	console.log("Le nombre " + nb + " est positif");
}
else{
	if(nb < 0)
	{
		console.log("Le nombre " + nb + " est négatif");
	}
	else
	{
		console.log("Le nombre " + nb + " est nul");
	}
	
}


if (!(nb > 100)) {
    console.log(nb + " est inférieur ou égal à 100");
}

var meteo = prompt("Quel temps fait-il dehors ?");
switch(meteo)
{
	case "soleil":
		console.log("Sortez en t-shirt");
		break;
	case "vent":
		console.log("Sortez en pull");
		break;
	case "pluie":
		console.log("Sortez en blouson");
		break;
	case "neige":
		console.log("Restez au chaud à la maison");
		break;
	default:
		console.log("Je n'ai pas compris");
}


var jour = prompt("Saisir un jour");
switch(jour){
	case "lundi":
		console.log("Demain, c'est mardi");
		break;
	case "mardi":
		console.log("Demain, c'est mercredi");
		break;
	case "mercredi":
		console.log("Demain, c'est jeudi");
		break;
	case "jeudi":
		console.log("Demain, c'est vendredi");
		break;
	case "vendredi":
		console.log("Demain, c'est samedi");
		break;
	case "samedi":
		console.log("Demain, c'est dimanche");
		break;
	case "dimanche":
		console.log("Demain, c'est lundi");
		break;
	default:
		console.log("Vous êtes ou là");
}