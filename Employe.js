// Définir les propriétés et méthodes d’une classe
// Définir des constructeurs
// Créer une instance de classe
// Accéder par les accesseurs aux propriétés en lecture et écriture d’un objet
// Appliquer des méthodes
// Travail à faire:
// Définir une classe Employé caractérisée par les attributs : Matricule, Nom, Prénom, DateNaissance, DateEmbauche, Salaire.
// Définir à l’aide des propriétés les méthodes d’accès aux différents attributs de la classe.
// Définir un constructeur permettant d’initialiser les attributs de la méthode par des valeurs saisies par l’utilisateur.
// Ajouter à la classe la méthode Age( ) qui retourne l’âge de l’employé.
// Ajouter à la classe la méthode Anciennete( ) qui retourne le nombre d’années d’ancienneté de l’employé.
// Ajouter à la classe la méthode AugmentationDuSalaire( ) qui augmente le salaire de l’employé en prenant en considération l’ancienneté.
//           Si Ancienneté < 5 ans, alors on ajoute 2%. - Si Ancienneté < 10 ans, alors on ajoute 5%. - Sinon, on ajoute 10%.

// Ajouter la méthode AfficherEmployé() qui affiche les informations de l’employé comme suit :
//            - Matricule : […]

//            - Nom complet : [NOM Prénom]

//            - Age : […]

//           - Ancienneté : […]

//            - Salaire : […]

//       Le nom doit être affiché en majuscule. Pour le prénom, la première lettre doit être en majuscule, les autres en minuscule.

// Ecrire un programme de test pour la classe Employé.

export default class Employe {


// Private attributes -> _ underscore is a convention in es6
  _matricule;
  _nom;
  _prenom;
  _dateNaissance;
  _dateEmbauche;
  _salaire;

  //constructeur whith parameters 
  constructor(matricule, nom, prenom, dateNaissance, dateEmbauche, salaire) {
    this._matricule = matricule;
    this._nom = nom;
    this._prenom = prenom;
    this._dateNaissance = dateNaissance;
    this._dateEmbauche = dateEmbauche;
    this._salaire = salaire;
  }

  // Getter and Setter for call attributes or set attributs of instances of class
  getDateNaissance() {
    return this._dateNaissance;
  }

  setDateNaissance(date) {
    this._dateNaissance = date;
  }

  getMatricule() {
    return this._matricule;
  }

  setMatricule(number) {
    this._matricule = number;
  }

  getNom() {
    return this._nom;
  }

  setNom(nom) {
    this._nom = name;
  }

  getPrenom() {
    return this._prenom;
  }

  setPrenom(prenom) {
    this._prenom = prenom;
  }

  getDateNaissance() {
    return this._dateNaissance;
  }

  setDateNaissance(dateN) {
    this._dateNaissance = dateN;
  }

  getDateEmbauche() {
    return this._dateEmbauche;
  }

  setDateEmbauche(dateE) {
    this._dateEmbauche = dateE;
  }

  getSalaire() {
    return this._salaire;
  }

  setSalaire(numberS) {
    this._salaire = numberS;
  }

  _calculeYears(dateString)
  {
    var today = new Date();
    var date = new Date(dateString);
    var years = today.getFullYear() - date.getFullYear();
    console.log(years)
    var m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
      years--;
    }
    return years;
  }

  age() {
    return this._calculeYears(this._dateNaissance);
  }

  anciennete() {
    return this._calculeYears(this._dateEmbauche);
  }

  augmentationDuSalaire() {
    if (this.anciennete < 5) {
      this.salaire += (2 / 100) * this.salaire;
    } else if (this.anciennete < 10) {
      this.salaire += (5 / 100) * this.salaire;
    } else {
      this.salaire += (10 / 100) * this.salaire;
    }
  }

  afficherEmploye(div) {
    let affichage = document.getElementById(div);
    affichage.append('Matricule:' + this._matricule);
  }
}
