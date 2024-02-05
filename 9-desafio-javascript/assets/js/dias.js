
// test resultado es 4 años, 4 semanas y 3 días let dias=365*4+7*5+3;

// Se le solitarán los números al usuario
let dias = parseFloat(prompt("Ingresa lo días a calcular"));

document.getElementById('dias').innerHTML = dias;

let anos = 0;
let semanas = 0;
let diasr = 0;

//Si el número ingresado es mayor a 365, recién se puede calcular la cantidad de años 
if(dias>=365){
    anos = Math.floor(dias/365);
    diastemp = Math.floor(dias%365);
    console.log(diastemp);
    if(diastemp >= 7){
         semanas = Math.floor(diastemp/7);
        diasr = diastemp%7;
    }else{
         semanas = 0;
         diasr = diastemp;
    } 
}else{
    if(dias >= 0 && dias <365 )
    {
    anos=0;
        if(dias >= 7){
            semanas = Math.floor(dias/7);
            diasr = (dias%7);
        }else{
            semanas = 0;
            diasr = dias;
        }
    }
}


//Se cambia el valor del HTML para mostrar los resultados
document.getElementById('anos').innerHTML = anos;

document.getElementById('semanas').innerHTML = semanas;

document.getElementById('diasr').innerHTML = diasr;
 


