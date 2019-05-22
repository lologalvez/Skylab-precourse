// a) Primero, creamos una función que nos imprima un saludo, pasa tu nombre como parámetro y muéstralo por la consola.
function saluteA(name) {
    console.log(`Hello ${name}`);
}
saluteA('Manuel');


// b) Intenta hacer un return en lugar de usar console.log().
function saluteB(name) {
    return `Hello ${name}`;
}
console.log(saluteB('Manuel'));

// c) Ahora, añade tu edad y concaténala al return de la siguiente manera:
function saluteC(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}
console.log(saluteC('Manuel', 34));

// d) Iguala tu function() a una variable y ejecutala.
var saluteVar = function saluteD(name, age) {
    return `Hello ${name}, you are ${age} years old`;
}
console.log(saluteVar('Manuel', 34));

// e) Ahora declara otra function() que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados
var myName = function printName() {
    return `Hello IronMan`;
}
var myAge = function printAge() {
    return `40`;
}
console.log(myName() + ' ' + myAge())

// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
var myName = function printName(name) {
    return `Hello ${name}`;
}
var myAge = function printAge(age) {
    return `You are ${age} years old, right?`;
}
console.log(myName('Manuel') + '. ' + myAge(34))

/* g) Intenta englobar todas las funciones en una sola función padre, 
el return de dicha function() padre deberá ser la llamada a las funciones hijas. 
(En el ejemplo tenemos la function personData() que engloba la function name y age, 
cada una es una función hija o anidada dentro de la function personData()).*/
function personDataG(param1, param2) {

    // Name
    var name = function myName(param1) {
        return param1;
    } 
    
    // Age
    var age = function myAge(param2) {
        return param2;
    }

    return name(param1) + ' ' + age(param2);

}
console.log(personDataG('Ironman', 40));

// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la function age().
function personDataH(param1, param2) {

    // Name
    var name = function myName(param1) {
        return param1;
    } 
    
    // Age
    var age = function myAge(param2) {
        return param2;
    }

    // Random num
    var random = function myRandom() {
        return Math.floor(Math.random() * 10000);
    }

    return name(param1) + ' ' + age(random());

}
console.log(personDataH('Ironman', 40))

// i) Al return de la function name(), concaténale otro mensaje.
// j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
// k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function personData(param1, param2) {

    // Name
    var name = function myName(param1) {
        if (param1.toLowerCase() === 'ironman') {
        }
        return param1.toLowerCase() === 'ironman' ? [`Tony Stark... aka ${param1}`, true] : [`${param1}... You're not IRONMAN!`, false]
    } 
    
    // Age
    var age = function myAge(param2) {
        return `Age ${param2}... Sure you're Tony Stark?`;
    }

    // Random Age
    var randomNum = function() {
        return Math.floor(Math.random() * 40);
    }

    var nameResult = name(param1);
    return nameResult[1] ? nameResult[0] + '. ' + age(randomNum()) : nameResult[0];

}

console.log(personData('Hulk', 40))









