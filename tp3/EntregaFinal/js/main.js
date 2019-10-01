let colision = false;
let arbol = document.getElementById("arbol");
let moneda = document.getElementById("moneda");
let puntuacion = document.getElementById("puntuacion");
let puntos = 0;
let terminado = false;
let perdiste = document.getElementById("perdiste");
let puntuacionFinal = document.getElementById("puntuacionFinal");
let instrucciones = document.getElementById("instrucciones");
//let displayPuntos = document.getElementById("puntos");
let botonInstrucciones = document.getElementById("botonInstrucciones");
botonInstrucciones.addEventListener("click", desplegarInstrucciones)

document.querySelector(".reiniciar").style.display = "none";
perdiste.style.display = "none";
  detenerMovimiento();

document.querySelector(".jugar").addEventListener("click", function () {
  document.querySelector(".reiniciar").style.display = "initial";
  document.querySelector(".jugar").style.display = "none"
  terminado = false;
  let cielo = document.getElementById("cielo").style.WebkitAnimationPlayState = "running";
  //let pajaro = document.getElementById("pajaro").style.WebkitAnimationPlayState = "running";
  let montania = document.getElementById("montania").style.WebkitAnimationPlayState = "running";;
  moneda.style.display = "initial";
  arbol.style.display = "initial";
    juego();
});
document.querySelector(".reiniciar").addEventListener("click", function () {
    location = location;
});

function juego(){
  puntos = 0;
  actualizarPuntuacion();
  movimientoArbol();
  movimientoMoneda();
  colisionArbol();
  colisionMoneda();

}
function keyCode(event) {
  var x = event.keyCode;
  if (x == 87) {
  pajaro.className = " pajaro-salto";
  pajaro.addEventListener("animationend", pajaroVolando);

}
}
function pajaroVolando(){
  pajaro.className = "pajaro";
}
function actualizarPuntuacion(){
  setInterval(function(){  puntuacion.innerHTML = "PUNTOS: " +puntos;}, 100);

}

 let pajaro = document.getElementById("pajaro");
 document.addEventListener('keydown', keyCode);

function colisionArbol(){
  setInterval(function(){  let posicionArbol = arbol.getBoundingClientRect();
    let posicionPajaro = pajaro.getBoundingClientRect();
    let valor2 = posicionPajaro.right - posicionArbol.right;
    let valor3 = posicionPajaro.top - posicionArbol.top;

    if((valor2>-100 && valor2<100) && (valor3>-50 && valor3<50)){
      terminarJuego();
    }
    ;}, 100);

}
function movimientoArbol(){
    let valor = 2500;
  let intervalo = setInterval(function(){
    if(valor < -200){
      valor = 2500;
    }
    valor -= 10;
    let moverarbol = valor.toString().concat("px");
    arbol.style.left = moverarbol;
    if( terminado){
      clearInterval(intervalo);
    }
  }, 1000/60);


}

function colisionMoneda(){
      setInterval(function(){  let posicionMoneda = moneda.getBoundingClientRect();
        let posicionPajaro = pajaro.getBoundingClientRect();
        let valor2 = posicionPajaro.right - posicionMoneda.right;
        let valor3 = posicionPajaro.top - posicionMoneda.top;

        if((valor2>-30 && valor2<30) && (valor3>-100 && valor3<100)){ //colision moneda-pajaro
          colision = true;
          if(colision){
          //   let intervalo = setInterval(function(){
          //     displayPuntos.style.visibility = "visible";
          //     displayPuntos.innerHTML = "PUNTOS +10";
          // }, 100);
          // displayPuntos.style.visibility = "hidden";

          //intenté hacer que cuando agarres una moneda te muestre en esa posicion un texto diciendo que ganaste 10 puntos, pero no lo pude hacer andar
            moneda.className = " ";
            setTimeout( () => {
              moneda.className = "moneda";
            }, 900);
            puntos += 10;

          }
        }
        ;}, 1000/60);


}
function movimientoMoneda(){
  let valor = 2500;
  let intervalo = setInterval(function(){
    if(valor < -200){
      valor = 2500;
    }
    valor -= 8;
    let moverMoneda = valor.toString().concat("px");
    moneda.style.left = moverMoneda;
    if( terminado){
      clearInterval(intervalo);
    }
  }, 1000/60);

}
function detenerMovimiento(){
let cielo = document.getElementById("cielo").style.WebkitAnimationPlayState = "paused";
//let pajaro = document.getElementById("pajaro").style.WebkitAnimationPlayState = "paused";
let montania = document.getElementById("montania").style.WebkitAnimationPlayState = "paused";
moneda.style.display = "none";
arbol.style.display = "none";
document.removeEventListener("keydown", keyCode);


}
function terminarJuego(){
terminado = true;
detenerMovimiento();
perdiste.style.display = "initial";
puntuacionFinal.innerHTML = "Tu puntuación fue de " + puntos;
pajaro.className = "pajaro-muerto";
document.removeEventListener("keydown", keyCode);

}
function desplegarInstrucciones(){
  if(instrucciones.style.visibility === "hidden"){
    instrucciones.style.visibility = "visible";
  }else{
    instrucciones.style.visibility = "hidden";

  }
}
