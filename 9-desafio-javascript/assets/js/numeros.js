
// Se le solitarán los números al usuario
let num1 = parseFloat(prompt("Ingresa número 1"));
document.getElementById('num1').innerHTML = num1;

let num2 = parseFloat(prompt("Ingresa número 2"));
document.getElementById('num2').innerHTML = num2;

let num3 = parseFloat(prompt("Ingresa número 3"));
document.getElementById('num3').innerHTML = num3;

let num4 = parseFloat(prompt("Ingresa número 4"));
document.getElementById('num4').innerHTML = num4;

let num5 = parseFloat(prompt("Ingresa número 5"));
document.getElementById('num5').innerHTML = num5;

//SUMA
// Se suman las variables ingresadas
var suma = num1 + num2 + num3 + num4 + num5;
//PROMEDIO
// se divide la suma por los 5 números
var promedio = suma/5;
 
//Se cambia el valor del HTML para mostrar los resultados
document.getElementById('suma').innerHTML = suma;

document.getElementById('promedio').innerHTML = promedio;

 

