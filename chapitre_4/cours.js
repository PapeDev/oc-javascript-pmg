console.log("Debut du programme");

var  nb = 1;
while(nb <= 10){
	console.log(nb);
	nb++;
}

console.log("Fin du programme");

var lettre = "";
var i = 0;
while(lettre !== "X"){
	lettre = prompt("Tapez une lettre ou X pour sortir");
	console.log(lettre);
	
	if(lettre === "A")
	{
		i++;
	}
}
console.log("Au revoir !");
console.log("Vous avez saisi la lettre A : " + i + "fois");

var i = 1;
var manege = Number(prompt("Saisir le nombre de tours à faire"));
while(i <= manege){

	console.log("c'est le tour numéro " + i);
	i++;
}

 console.log(" -----------------Nombre pair----------------------");

 var nb = Number(prompt("Saisir le nombre initial"));
 for(var j = nb; j<= 10 + nb; j++){
 	if(j % 2 === 0){
 		console.log(j + " est pair");
 	}
 	else{
 		console.log(j + " est impair");
 	}
 }

  console.log(" -----------------Controle de saisie ----------------------");

  var nombre = 0;
 while((nombre<50) || (nombre > 100))
 {
 	nombre = Number(prompt("Saisir un nombre"));

 }

console.log(" -----------------Mutiplication ----------------------");
var nb = 0;
while((nb < 2 ) || (nb > 9))
{
	nb = Number(prompt("Saisir une chiffre"));

	
}
console.log("Voici la table de Mutiplication de " + nb);
for(i = 1; i<=10; i++){
	console.log(nb + " x " + i + " = " + i * nb)
}
console.log(" ---------------Ni oui Ni Non ----------------------");
var mot = prompt("Voulez-vous jouer au no oui, ni non ?");;
while((mot !== "oui") && (mot !== "non")){
	mot = prompt("Voulez-vous jouer au no oui, ni non ?");
}

console.log(" ---------------Triangle----------------------");
var ligne = "";
for (var i = 1; i <= 7; i++) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
}
