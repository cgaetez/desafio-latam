//let juegos = 3;

//opciones que tiene la máquina
function juegoMaquina()
{
    let maquina = Math.floor(Math.random()*3);
    //1 = piedra
    if(maquina == 1) return 'piedra';
    //2 = papel
    if(maquina == 2) return 'papel';
    //3 = tijera
    if(maquina == 3) return 'tijera';
}
//comparaciones de lo ingresado por usuario y máquina
function juego(usuario,maquina){
    if(usuario == 'piedra'){
        if(maquina == 'piedra'){
            return 0;
        }else if(maquina == 'papel'){
            return 1;
        }else if(maquina == 'tijera'){
            return -1;
        }
    }
    if(usuario == 'papel'){
        if(maquina == 'papel'){
            return 0;
        }else if(maquina == 'piedra'){
            return 1;
        }else if(maquina == 'tijera'){
            return -1;
        }
    }

    if(usuario == 'tijera'){
        if(maquina == 'tijera'){
            return 0;
        }else if(maquina == 'piedra'){
            return 1;
        }else if(maquina == 'papel'){
            return -1;
        }
    }
}

//iniciando
let juegosUsuario = 0;

function juegosElegidos(){
    el = document.getElementById("cantidad");
    let juegos = el.value;
    console.log(juegos);
    return juegos;
}

juegosUsuario = juegosElegidos();

if(juegosUsuario > 0){
    for(let i = 0; i<= juegosUsuario; i++){

    }
    /*
    console.log(juegos);
    id=1;
    const resultados = document.getElementById("resultados");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    
    td.insertAdjacentHTML("beforeend", `${id} <a href="#">delete</a>`);
    
    resultados.appendChild(tr);*/
    
}



