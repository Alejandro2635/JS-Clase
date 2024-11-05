const TABLERO = [
    [0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1],
    [0,1,0,0,0,0,0],
    [0,1,0,0,0,1,1],
    [0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]

const VICTORIA = 7;

var aciertos = 0;

var tocados =[];

var crearTablero = () =>{
    const div = document.getElementById('tablero');

    let html = "";

    for(let i = 0; i<TABLERO.length ; i++){
        for(let j = 0; j<TABLERO[i].length; j++){
            let coordenada = `${i}${j}`;
            html += `<div id="${coordenada}" onclick="disparar(${i},${j})"></div>`;
        }
    }

    div.innerHTML = html;
}

var disparar = (x,y) => {
    const estatus = document.getElementById('estatus');
    const acierto = document.getElementById('aciertos');
    var coordenada = `${x}${y}`;
    const casilla = document.getElementById(coordenada);

    if(TABLERO[x][y] === 1 && !tocados.includes(coordenada)){
        console.log(`cordenada: ${x},${y} tocada`);
        aciertos ++;
        acierto.innerHTML = aciertos;
        estatus.innerHTML = `cordenada: ${x},${y} tocada`;
        casilla.innerHTML = `<img src="https://png.pngtree.com/png-clipart/20230917/original/pngtree-flame-burning-sparks-splash-broken-bomb-explosion-realistic-photography-decorative-pattern-png-image_12297991.png"/>`;
        tocados.push(coordenada);
    }else if(TABLERO[x][y] == 0){
        console.log(`cordenada: ${x},${y} fallada o ya tocada`);
        estatus.innerHTML = `cordenada: ${x},${y} fallada o ya tocada`;
        casilla.innerHTML = `<img src="https://i.pinimg.com/originals/3c/45/a4/3c45a426e3b30265fd3f6eba1fe20bad.png"/>`;
    }else{
        estatus.innerHTML = `cordenada: ${x},${y}ya tocada`;
    }

    if(aciertos == VICTORIA){
        estatus.innerHTML = `GANASTE LA PARTIDA`;
    }
}

