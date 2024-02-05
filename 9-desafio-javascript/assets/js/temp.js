
// Se le solitará la temperatura al usuario
let temp = parseFloat(prompt("Ingresa la temperatura en Celsius"));
document.getElementById('temp').innerHTML = temp;

 

//Kelvin
// se aplica la formula 
var kelvin = temp + 273.15;
//Fahrenheit
// se aplica la formula 
var fahrenheit = (temp * 9/5) + 32;


//se actualiza el html
document.getElementById('kelvin').innerHTML = kelvin;
document.getElementById('fahrenheit').innerHTML = fahrenheit;


