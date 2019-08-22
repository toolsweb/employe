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
  constructor(matricule, nom, prenom, dateNaissance, dateEmbauche, salaire) {
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.dateEmbauche = dateEmbauche;
    this.salaire = salaire;
  }

  getDateNaissance() {
    return this.dateNaissance;
  }
  setDateNaissance(date) {
    this.dateNaissance = date;
  }
  getMatricule() {
    return this.matricule;
  }
  setMatricule(number) {
    this.matricule = number;
  }
  getNom() {
    return this.nom;
  }
  setNom(name) {
    this.nom = name;
  }
  getPrenom() {
    return this.prenom;
  }
  setPrenom(prenom) {
    this.prenom = prenom;
  }
  getDateNaissance() {
    return this.dateNaissance;
  }
  setDateNaissance(dateN) {
    this.dateNaissance = dateN;
  }
  getDateEmbauche() {
    return this.dateEmbauche;
  }
  setDateEmbauche(dateE) {
    this.dateEmbauche = dateE;
  }
  getSalaire() {
    return this.salaire;
  }
  setSalaire(numberS) {
    this.salaire = numberS;
  }

  age() {
    let now = new Date();
    let date = new Date(this.dateNaissance);
    return now.getFullYear() - date.getFullYear();
  }
  anciennete() {
    let now = new Date();
    let year = now.getFullYear();
    let date = new Date(this.dateEmbauche);
    return now.getFullYear() - date.getFullYear();
  }

  augmentationDuSalaire() {
    if (this.anciennete < 5) {
      this.salaire = this.salaire + (2 / 100) * this.salaire;
    } else if (this.anciennete < 10) {
      this.salaire = this.salaire + (5 / 100) * this.salaire;
    } else {
      this.salaire = this.salaire + (10 / 100) * this.salaire;
    }
  }
  afficherEmploye(div) {
    let affichage = document.getElementById(div);
    affichage.append('Matricule:' + this.matricule)
    
  }
}