// -------------------- String --------------------

// a) Puedes contar cuantas letras tiene tu nombre?
var myName = 'Lolo'
console.log(`My name has ${myName.length} letters`)

// b) Añade tu apellido e indica en qué posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido): 
var myLastName = 'Gálvez'
console.log(`My lastname starts at position ${myName.length + 2}`)

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):
var myFullName = `${myName} ${myLastName}`
var firstString = `My name is ${myFullName.split(' ')[0]}` 
console.log(firstString)

// d) Ahora, solo tu apellido.
var secondString = `My lastname is ${myFullName.split(' ')[1]}`
console.log(secondString)

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
console.log(`${firstString}, ${secondString}`)

// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
console.log(`Hello, ${myName.replace(myName, 'Mr.')} ${myLastName}`)

// f) Selecciona tu apellido y transfórmalo a mayúsculas.
console.log(`Hello, Mr. ${myLastName.toUpperCase()}`)

// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
var something = myName + ' is awesome'
console.log(something)

// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
var nameArr = myFullName.split(' ')
var firstInitial = `${nameArr[0][0]}.${nameArr[1][0]}`
console.log(firstInitial)


// -------------------- Array --------------------

// a) Declara tu nombre completo en un array y muéstralo por pantalla separando cada letra por /
var myNameArray = ['L','O','L','O','G','A','L','V','E','Z']
console.log(myNameArray.join('/'))

// b) Ahora solo selecciona tu apellido y muestra cada letra separada por |
console.log(myNameArray.slice(4).join('|'))

// c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un for)
var result = myNameArray.map(function(letter, idx) {
    return `${idx + 1}º ${letter},`
})
console.log(result.join(' ').slice(0,-1))

// d) Como en el ejercicio anterior, pero seleccionando tu apellido
var result2 = myNameArray.slice(4).map(function(letter, idx) {
    return `${idx + 1}º ${letter},`
})
console.log(result2.join(' ').slice(0,-1))


// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de String
console.log(myNameArray[0] + '.' + myNameArray[4])

// Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, 
//y además añade en otra posición tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
myNameArray = ['Manuel', 'Gálvez', 34]
console.log(`My name is ${myNameArray[0]} and I'm ${myNameArray[2]} years old`)

// g) Prepara una function() para añadir tu City al array, muestra un mensaje mostrando el contenido de toda el array, así aseguraremos los cambios.
function myCityAdd(city) {
    myNameArray.push(city)
    return myNameArray
}
console.log(myCityAdd('Martorell'))

// h) Crea ahora, una function() para eliminar la variable City y asegura los cambios.
function myCityDelete(city) {
    myNameArray.splice(myNameArray.indexOf(city), 1)
    return myNameArray
}
console.log(myCityDelete('Martorell'))

// i)&j) Ahora, elimina el nombre y asegura los cambios 
myNameArray.shift()
console.log(myNameArray)

// h) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, 
// como podria hacer para introducirlo en la primera posición?
myNameArray.unshift('Manuel')
console.log(myNameArray)

// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
var numbers = Array(10).fill(0).map((e,i)=>i+1)
var multByTwo = numbers.map(function(e) {
    return e*2
})
console.log(multByTwo)

// l1) Reformula la función para que puedas especificar por qué número debería multiplicar cada elemento del array.
function multByNum(num) {
    var arrayMult = numbers.map(function(e) {
        return e*num
    })
    return arrayMult
}
var resultsArray = multByNum(3)
console.log(resultsArray)

// m) Podrías mostrarlos en el orden inverso? 
console.log(resultsArray.reverse())

// n) Puedes indicarme qué letras se repiten de tu nombre y cuantas veces?
function printResult(name, charObj, msg=[]) {
   Object.keys(charObj).forEach(function(char) {
      charObj[char] > 1 ? msg.push(`Letter ${char.toUpperCase()} (${charObj[char]} times)`) : undefined
   })
   msg.unshift(`${name} contains ${msg.length} repeated letters:`)
   return msg.join('\n')
}

var myName = 'enpinxolivadirenpanxo'
var repeatedObj = Array.from(myName).reduce(function(obj, char) {
  return obj[char] ? obj[char]++ : obj[char]=1, obj
}, {})
printResult(myName, repeatedObj)

// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras
nameArray = Array.from(myName)
var nonRepeatedLetters = nameArray.filter(function(letter, idx) {
    return nameArray.lastIndexOf(letter) === idx && nameArray.indexOf(letter) === idx
})
console.log(nonRepeatedLetters)
console.log(repeatedLetters.join(''))

// -------------------- Numbers --------------------

// a) Que hora es? Declara la hora como número y devuelvela como un string
var hour = 0.11
console.log(`It's ${hour.toString()}, midnight`)

// b) No no no, que hora exactamente? Dime la hora sin minutos!
var hourNoMins = parseInt(hour) 
console.log(`It's around ${hourNoMins.toString()}, midnight`)

// c) Ahora, declara tu hora y muéstrala redondeada.
var roundedHour = Math.ceil(10.34) 
console.log(`It's around ${roundedHour.toString()}, midnight`)

// d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y sumalos.
var a = 7
var b = 3
var s = a+b
console.log(`The sum of ${a}+${b} is ${s}`)

// d1) Añade la resta...
console.log(`The sum and rest of ${a} and ${b} is ${s} and ${a-b}`)

// d2) La multiplicación...
console.log(`${a+b}, ${a-b}, ${a*b}`)

// d3) Y, por ultimo, la división.
console.log(`${a+b}, ${a-b}, ${a*b}, ${(a/b).toFixed(1)}`)

// d4) Ahora, intenta multiplicar un número por una string, que devuelve?
// e) e) Podemos controlar este error con un condicional if?
if (!(10*'hour')){
    console.log(`You can't do this operation`)
}
