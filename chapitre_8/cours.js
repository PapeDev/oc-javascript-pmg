var truc = {
	a: 10
};

var truc2 = Object.create(truc);

console.log(truc2.a);

var encodeTruc = Object.create(truc2);
console.log(encodeTruc.a);
console.log(encodeTruc.b);


var Personnage = {


	init: function(nom, sante, force){
		this.nom = nom;
		this.sante = sante;
		this.force = force;
	},

	// Attaque un personnage cible
    attaquer: function (cible) {
        if (this.sante > 0) {
            var degats = this.force;
            console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
            cible.sante = cible.sante - degats;
            if (cible.sante > 0) {
                console.log(cible.nom + " a encore " + cible.sante + " points de vie");
            } else {
                cible.sante = 0;
                console.log(cible.nom + " est mort !");
            }
        } else {
            console.log(this.nom + " ne peut pas attaquer : il est mort...");
        }
    }

	
};
var Joueur = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force){
	this.init(nom, sante, force);
	this.xp = 0;
};

Joueur.descrire = function(){
	var description = this.nom + " a " + this.sante + " points de vie, " + 
		this.force + " en force et " + this.xp + " points d'expérience ";
		return description;
};
// Combat un adversaire
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.sante === 0) {
        console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience");
        this.xp += adversaire.valeur;
    }
};
var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
	this.init(nom, sante, force);
	this.xp = 0;
	this.race = race;
	this.valeur = valeur;
};


var perso1 = Object.create(Joueur);
perso1.initJoueur("Aurora", 150, 25);

var perso2 = Object.create(Joueur);
perso2.initJoueur("Merlin", 130, 30);

console.log("********** Bienvenue dans ce jeu d'aventure ! Voici nos joueurs : ");
console.log(perso1.descrire());
console.log(perso2.descrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Zog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(perso1);
monstre.attaquer(perso2);

perso1.combattre(monstre);
perso2.combattre(monstre);

console.log(perso1.descrire());
console.log(perso2.descrire());




var Chien = {

	init: function(nom, race, taille)
	{
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	descrire: function()
	{
		var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm";
		return description;
	},
	aboyer: function () {
        var aboiement = this.nom + " aboie Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = this.nom + " aboie Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = this.nom + " aboie Grrr ! Grrr !";
        }
        return aboiement;
    }

};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.descrire());
console.log(crokdur.aboyer());