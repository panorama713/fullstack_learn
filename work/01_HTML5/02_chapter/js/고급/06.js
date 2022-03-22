let day = new Date();
console.log(Object.isExtensible(day));

let myDay = Object.preventExtensions(day);
console.log(Object.isExtensible(day));