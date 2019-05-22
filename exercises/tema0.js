// a) Declara tu nombre en una variable y muéstralo por consola:
var name = 'Manuel';
console.log(name);

// b) Declara tu edad en una variable y muéstrala por consola:b) Age. Var num
var age = 34;
console.log(age);

// c) Declara tu nombre, tu apellido y tu edad en un array de tres posiciones y muéstrala por consola:
var info = ['Manuel', 'Gálvez', 34];
console.log(info);

// d) Ahora utiliza el array que has creado anteriormente para recorrerlo mediante un bucle y mostrar una a una todas las posiciones del array.
for (i=0;i<info.length;i++) {
    console.log(info[i]);
}
// d1) Con forEach
info.forEach(function(e) {
    console.log(e);
})

// e) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data = {
    name: 'Manuel',
    age: 34
};
console.log(data);


// f) Crea una estructura condicional para que imprima el número mayor entre dos números.
var a = 25;
var b = 12;
if (a<b) {
    console.log(b);
} else {
    console.log(a);
}

// f1) Crea otra condición if else para contemplar la posibilidad de que los dos números sean iguales:
if (a<b) {
    console.log(b);
} else if (a>b) {
    console.log(a);
} else {
    console.log('Numbers are equal');
}

// g) Recorre un array de 5 números y cuando llegues a la mitad muestra el siguiente mensaje: 'We are in the middle of loop'.
var nums = [1,2,3,4,5];

for (i=0;i<nums.length;i++) {
    console.log(nums[i]);
    if (i === Math.floor(nums.length / 2)) {
        // If array has odd length it means it can have middle position
        if (nums.length % 2 !== 0) {
            console.log('We are in the middle of the loop');
        }
    }
}

// Declara tu nombre y tu edad en dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error.
var myName = 'Manuel';
age = 34;

if ((myName !== 'Manuel') || (age !== 34)) {
    console.log('This is not you!');
} else {
    console.log('Hi!! Glad to see u again');
}

// h) Declara tu nombre y DNI en dos variables y crea un condicional para, en caso de que coincida uno de los dos datos, muestre un mensaje.
myName = 'Manuel';
var myId = '42424242X';

if ((myName === 'Manuel') || (myId === '42424242X')) {
    console.log('Permission granted.');
} else {
    console.log('Try again.');
}

// i) Crea un array, introduce los datos anteriores y unos cuantos más de forma que al recorrer el array muestre un mensaje cuando encuentre tus datos.i) Find data within array
var dataArray = [42, 3.1416, 'Manuel', 'Hello', true, '42424242X', 'BYE'];

dataArray.forEach(function(elem) {
    if (elem === 'Manuel' || elem === '42424242X') {
        console.log(`We found your data! -- ${elem} -- `);
    }
})

// j) Crea un array de strings y recorre cada una de esos valores. Imprime cada carácter en una línea distinta.
var arr =  ['hello', 'world', 'Skylab'];

arr.forEach(function(elem) {
    for (var char in elem) {
        console.log(elem[char]);
    }
})

