import Employe from './Employe.js';

//let employe = new Employe();
let employe1 = new Employe('01', 'Dupont', 'Jean', '2010/08/17', '2010/08/17', '2000');

console.log(employe1);
console.log(employe1.getMatricule());
let prenom = employe1.getPrenom();

let age = employe1.age();
console.log(age);



employe1.afficherEmploye('affichage');
