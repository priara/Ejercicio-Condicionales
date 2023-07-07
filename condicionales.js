// ejercicio 1
// realizar un programa que dado 2 numeros imprima
// por consola si el primer numero es mayor que el segundo

    let numero1 = 15;
let numero2 = 10;
if (numero1 > numero2) {
    console.log("el primer numero es mayor que el segundo");
    } else {
        console.log("el primer numero es menor que el segundo");
    }

// ejercicio 2
// realizar un programa que dado 2 numeros imprima
// // //por consola si los numeros son iguales o si son diferentes
let number1 = 10
let number2 = 10
if (number1 === number2) {
console.log("los numeros son iguales");
} else {
    console.log("los numeros son diferentes");
}


//ejercicio 3
//realizar un programa que dado 2 numeros imprima
//por consola cual de los 2 numeros es el mas grande o si son iguales
let num1 = 25
let num2 = 30
if (num1 > num2) {
console.log("numero 1 es mas grande que numero 2");
} else if (num2 > num1) {
console.log("el numero 2 es mas grande que numero 1");
} else if (num1 === num2) {
console.log("el numero 1 es igual a numero2");
}

// // //ejercicio 4
// // //realizar un programa que dado 3 numeros imprima
// // //por pantalla cual de los 3 es el mas chico
let numer1 = 5
let numer2 = 4
let numer3 = 6
let numeroMasChico = numer1
if (numer2 < numeroMasChico) {
numeroMasChico = numer2;
} else if (numer3 < numeroMasChico) {
numeroMasChico = numer3;
}
console.log("El numero mas chico es:" + numeroMasChico);

// // //ejercicio 5
// // //realizar un programa que dado 2 objetos representando personas
// // //con las propiedades nombre,edad y altura imprima por pantalla
// // //cual de las 2 personas es la mas alta y cual es la de mayor edad
let personaMayor;
let personaAlta; {
    let persona1 = {
        nombre: "aldana",
        edad: 24,
        altura: 165,
    }
    let persona2 = {
        nombre: "tomas",
        edad: 20,
        altura: 170,
    }
    if (persona1.edad > persona2.edad) {
        personaMayor = persona1
    } else if (persona2.edad > persona1.edad) {
        personaMayor = persona2
    }
    if (persona1.altura > persona2.altura) {
        personaAlta = persona1
    } else if (persona2.altura > persona1.altura) {
        personaAlta = persona2
    }
}

console.log("La persona con mas edad es", [personaMayor.nombre]);
console.log("La persona mas alta es", [personaAlta.nombre]);

ejercicio 6
realizar un programa que permita ingresar por pantalla tu nombre
edad,altura,vision y permita determinar si estas capacitado para
conducir.La persona debera cumplir con una edad minima de 18 años
medir mas de 150cm y tener una vision de 8 de 10 como minimo

function puedeConducir(nombre, edad, altura, vision) {
    if (edad >= 18 && altura > 150 && vision >= 8) {
        return `${nombre} esta capacitado para conducir`
    } else {
        return `${nombre}no esta capacitado para conducir`
    }
}
const nombre = prompt("Ingrese su nombre");
const edad = prompt("Ingrese su edad");
const altura = prompt("Ingrese su altura");
const vision = prompt("Ingrese su vision");
let resultado = puedeConducir(nombre, edad, altura, vision)
console.log(resultado);

// ejercicio 7
let nombre = prompt("ingrese su nombre")
if (nombre === "priscila") {
    console.log("tiene ingreso libre");
}else if (nombre !== "priscila") {
    console.log("¿tiene un pase?");
    let pase = prompt ("¿tiene usted un pase?(vip/normal)")
    if (pase === "vip") {
        console.log(`puede pasar ${nombre}`);
    }else if (nombre !== "priscila" && pase !== "vip" || pase !== "normal") {
    }
}
let afirmacion = prompt("Desea comprar")
if (afirmacion === "si") {
}
let dinero = prompt("Le solicito el dinero")
if (dinero >= 1000) {
    console.log("muchas gracias por comprar y bienvenido");
}else if (dinero < 1000 ) {
    console.log("Lo esperamos pronto :)");
}
// ejercicio8
let numeroIncognita = 6;
let numeroIngresado = prompt("Adivina el numero: del 1 al 10")
if (numeroIngresado > numeroIncognita) {
    console.log("el numero ingresado es mayor, vuelve a intentarlo");
    numeroIngresado = prompt("Adivina el numero: del 1 al 10")}
if (numeroIngresado < numeroIncognita) {
    console.log("el numero ingresado es menor, vuelve a intentarlo");
    numeroIngresado = prompt("Adivina el numero: del 1 al 10")}
if(numeroIngresado == numeroIncognita) {
    console.log("Ganaste, has adivinado el numero");
}
// ejercicio 9
// crear un programa que permita ingresar tu edad y decir si eres
// un infante (0 a 12 años), adolescente (13 a 18 años),  
// un mayor joven (19 a 45 años) o un anciano (mas de 45 años),  
//  y en caso de ingresar una edad mayor a 100 mostrar un mensaje
//  preguntando si en realidad tiene esa edad

let edadPersona = prompt("Ingrese su edad")
if (edadPersona <= 12) {
    console.log("es un infante");
}else if (edadPersona <= 18) {
    console.log("es un adolescente");
}else if (edadPersona <= 45) {
    console.log("es un mayor joven");
}else if (edadPersona > 45 && edadPersona < 100) {
    console.log("es un anciano");
}else if(edadPersona > 100){
    console.log("¿En realidad tiene esa edad?");
}

// ejercicio 10
let respuestaJugador1 = prompt("Elegi: PIEDRA, PAPEL O TIJERA")
let respuestaJugador2 = prompt("Elegi: PIEDRA, PAPEL O TIJERA")
if (respuestaJugador1 === "piedra" && respuestaJugador2 === "piedra") {
    console.log("¡Han empatado!");
}if (respuestaJugador1 === "piedra" && respuestaJugador2 === "papel") {
    console.log("Jugador 2 ha ganado");
}if (respuestaJugador1 === "piedra" && respuestaJugador2 === "tijera") {
    console.log("jugador 1 ha ganado");
}if (respuestaJugador1 === "papel" && respuestaJugador2 === "papel") {
    console.log("han empatado");
}if (respuestaJugador1 === "papel" && respuestaJugador2 === "piedra") {
    console.log("jugador 1 ha ganado");
}if (respuestaJugador1 === "papel" && respuestaJugador2 === "tijera") {
    console.log("jugador 2 ha ganado");
}if (respuestaJugador1 === "tijera" && respuestaJugador2 === "piedra") {
    console.log("jugador 2 ha ganado");
}if (respuestaJugador1 === "tijera" && respuestaJugador2 === "papel") {
    console.log("jugador 1 ha ganado");
}if (respuestaJugador1 === "tijera" && respuestaJugador2 === "tijera") {
    console.log("han empatado");
}
ejercicio 11
let ingresoColor = prompt("ingresa un color")
switch (ingresoColor) {
    case "blanco":
        console.log("falta de color");
        break;
    case "negro":
        console.log("falta de color");
        break;
    case "verde":
        console.log("el color de la anturaleza");
        break;
    case "azul":
        console.log("el color del agua");
        break;
    case "amarillo":
        console.log("el color del sol");
        break;
    case "rojo":
        console.log("el color del fuego");
        break;
    case "marron":
        console.log("el color de la tierra");
        break;
    default:
        console.log("Excelente eleccion, no lo teniamos pensado");
        break;
}

ejercicio 12
let ingresarOperacion = prompt("Ingrese una operacion: suma,resta,multiplicacion o division")
let numero1 = parseFloat(prompt("ingrese un numero"));
let numero2 = parseFloat(prompt("ingrese un numero"));
switch (ingresarOperacion) {
    case "suma":
        console.log(numero1 + numero2);
        break;
    case "resta":
        console.log(numero1 - numero2);
        break;
    case "multiplicacion":
        console.log(numero1 * numero2);
        break;
    case "division":
        console.log(numero1 / numero2);
        break;
    case "division":
        console.log(0 / 0);
    default:
        console.log("ERROR");
        break;
}
// ejercicio13
function ingresarDatosDNI() {
    let numero = prompt("Ingrese el número de DNI:");
    let nombre = prompt("Ingrese su nombre:");
    let afpellido = prompt("Ingrese su apellido:");
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento:");

    console.log("Número de DNI: " + numero);
    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Fecha de nacimiento: " + fechaNacimiento);

    let confirmacion = prompt("¿Los datos ingresados son correctos?");

    if (confirmacion) {
    let dni = {
        numero: numero,
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    }
    console.log("Registro exitoso. Los datos ingresados son:");
    console.table(dni);
    } else {
    console.log("Vuelva a intentarlo en 1 mes.");
    }
}
ingresarDatosDNI(); 