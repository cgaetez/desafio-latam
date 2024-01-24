let nombre = prompt("Ingresa tu nombre");
document.getElementById('nombre').innerHTML = nombre;

let carrera = prompt("Ingresa tu carrera");
document.getElementById('carrera').innerHTML = carrera;

const ramos = ["html","css","javascript"];

ramos.forEach(promedios);

function promedios(item, index) {
    let text = '<td>'+item+'</td>';
    let suma = 0;
    for (let i = 0; i < 3; i++) {
        temp = prompt("Ingresa las notas de " + item);
        suma = suma + parseFloat(temp);
        text += '<td>'+temp+'</td>';
    }
    text += '<td>'+ (suma/3).toFixed(2) +'</td>';
    document.getElementById(item).innerHTML = text;
    
}