
// Se le solitarán los números al usuario
let num1 = parseFloat(prompt("Ingresa número 1"));
document.getElementById('num1').innerHTML = num1;

let num2 = parseFloat(prompt("Ingresa número 2"));
document.getElementById('num2').innerHTML = num2;

//SUMA
// Se suman ambas variables y el resultado se guarda en una nueva
var suma = num1 + num2;
//RESTA
// Se restam ambas variables y el resultado se guarda en una nueva
var resta = num1 - num2;

//MULTIPLICACIÓN
// Se multiplican ambas variables y el resultado se guarda en una nueva
var mult = num1 * num2;

//DIVISIÓN y MÓDULO
// Se dividen ambas variables y el resultado se guarda en una nueva si la segunda variable es distinta de 0
//MÓDULO
/* Se usa para encontrar el residuo de una división, se ingresa la primera variable % la segunda variable,
Solo si el segundo es distinto de 0 */
if(num2 != 0){
    var div = num1 / num2;
    var mod = num1 % num2;
}else{
    var div = 'no se puede realizar';
    var mod = 'no se puede realizar';
}


//Se cambia el valor del HTML para mostrar los resultados
document.getElementById('suma').innerHTML = suma;

document.getElementById('resta').innerHTML = resta;

document.getElementById('mult').innerHTML = mult;

document.getElementById('div').innerHTML = div;

document.getElementById('mod').innerHTML = mod;


