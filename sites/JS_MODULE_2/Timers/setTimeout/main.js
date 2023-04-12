'use strict'

function alertInfo() {
    window.alert('Coucou');
}


let alertId = window.setTimeout(alertInfo, 3000);


console.log(alertId);

window.clearTimeout(alertId);
