const currentDate = new Date();
console.log(currentDate.getDay());

console.log(Date.hasOwnProperty('getDay')); // true
console.log(Date.prototype.hasOwnProperty('hasOwnProperty')); // false
console.log(Date.prototype instanceof Object); // true
console.log(Object.hasOwnProperty('hasOwnProperty')); // false
console.log(Object.prototype.hasOwnProperty('hasOwnProperty')); // true
