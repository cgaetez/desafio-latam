//let juegos = 3;

//opciones que tiene la máquina
function juegoMaquina()
{
    let maquina = Math.floor(Math.random()*3);
    //1 = piedra
    if(maquina == 0) return 'piedra';
    //2 = papel
    if(maquina == 1) return 'papel';
    //3 = tijera
    if(maquina == 2) return 'tijera';
}

//comparaciones de lo ingresado por usuario y máquina
function juego(usuario,maquina){
    if(usuario == maquina){
        return 0;
    }else{
        if(usuario == 'piedra'){
            if(maquina == 'papel'){
                return -1;
            }else if(maquina == 'tijera'){
                return 1;
            }
        }
        if(usuario == 'papel'){
            if(maquina == 'piedra'){
                return 1;
            }else if(maquina == 'tijera'){
                return -1;
            }
        }
    
        if(usuario == 'tijera'){
            if(maquina == 'piedra'){
                return -1;
            }else if(maquina == 'papel'){
                return 1;
            }
        }
    }
    
}

function jugadaUsuario(eleccion){
    console.log(eleccion);
    //jugada usuario
    document.getElementById('eleccion').value = eleccion;
    //empezamos a jugar
    jugada--;
    jugar(eleccion);
}

function endGame(){
        document.getElementById("tabla-resultados").classList.remove('d-none');
        document.getElementById("reset").classList.remove('d-none');
        document.getElementById('juegoactual').classList.add('d-none');
        document.getElementById("piedra").disabled = true;
        document.getElementById("papel").disabled = true;
        document.getElementById("tijera").disabled = true;

        console.log('End Game');

}

function crearhtml(usuario,maquina,mensaje){
        const resultados = document.getElementById("resultados");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td.insertAdjacentHTML("beforeend", `${usuario}`);
        td2.insertAdjacentHTML("beforeend", `${maquina}`);
        td3.insertAdjacentHTML("beforeend", `${mensaje}`);
        resultados.appendChild(tr);
}

function iniciar(){
    jugada = parseInt(document.getElementById('cantidad').value);

        if (jugada < 1) {
            alert('Debes indicar un número mayor a 1');
            resetear();
            return;
        }

        let inicio = document.getElementById('inicio');
        inicio.classList.add('d-none');

        let opciones = document.getElementById('opcion');
        opciones.classList.remove('d-none');
}

function resetear(){
    location.reload(true);
}

//iniciando
let jugada = 0;

function jugar(eleccion){
    console.log('jugada:', jugada);
       maquina = juegoMaquina();
       res = juego(eleccion, maquina);

       let juegoactual = document.getElementById('juegoactual');
       let estado = 'Es un empate';

       switch(res){
        case  1:
            console.log('Ganaste');
            estado = 'Ganaste, felicidades'
            break;
        case  -1:
            console.log('Perdiste');
            estado = 'Perdiste, lo siento mucho'
            break;
       }

           crearhtml(eleccion, maquina, estado);

        juegoactual.innerHTML = `Máquina:${maquina} | Resultado: ${estado}`;
        console.log('End' + jugada);

        if(jugada != 0){
            return;
        }

        endGame();
}
