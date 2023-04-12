
function toto(event) {
    console.log('toto');
    console.log(event);
}

function titi(prenom) {
    console.log('Bonjour ' + prenom);
}

titi('Fabrice');


document.addEventListener('click', toto);

