/**
 * Créer ici le projet « Hello You ».
 */


const userFirstName = window.prompt('Quel est votre prénom ? ');
const userLastName = window.prompt('Quel est votre nom ? ');
const userBirthYear = window.prompt('Quel est votre année de naissance ? ');
const date = new Date();
const currentYear = date.getFullYear();
console.log('Salut ' + userFirstName +' '+ userLastName + '. Tu as '+ (currentYear - Number(userBirthYear))+ 'ans');