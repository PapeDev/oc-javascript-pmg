	

function sayHello(prenom){
	var monMessage = "Bonjour le monde " + prenom;
	var nom = prompt("Saisir votre nom");
	var prenom = prompt("Saisir votre prenom");
	var message = "Bonjour " + prenom + " " + nom;
	return message;
}

console.log("Debut du programme");
console.log(sayHello());
console.log("Fin du programme");

function carre(x) {
	return x*x;
}

for (var i = 0; i <= 10; i++) {
	console.log(" Le carre de " + i + " est : " + carre(i));
}

console.log(Math.min(4.5, 5));

function calculatrice(op1, operateur, op2){
	var res;
	switch(operateur){
		case "+":
			res = op1 + op2;
			break;
		case "-":
			res = op1 - op2;
			break;

		case "*":
			res = op1 * op2;
			break;
		case "/":
			res = op1 / op2;
			break

	}
	return res;
}

console.log(calculatrice(4, "+", 6)); // Doit afficher 10
console.log(calculatrice(4, "-", 6)); // Doit afficher -2
console.log(calculatrice(2, "*", 0)); // Doit afficher 0
console.log(calculatrice(12, "/", 0)); // Doit afficher Infinity