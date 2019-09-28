let valor = 2500;
let colision = false;
let cono = document.getElementById("aguila");
let moneda = document.getElementById("moneda");
let puntuacion = document.getElementById("puntuacion");
let puntos = 0;
let terminado = false;
let perdiste = document.getElementById("perdiste"); //BORARR ESTO
juego();
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
  setTimeout( () => {
    pajaro.className = "pajaros";
}, 1600);

}
}
function actualizarPuntuacion(){
  setInterval(function(){  puntuacion.innerHTML = "PUNTOS: " +puntos;}, 100);

}

 let pajaro = document.getElementById("pajaro");
 document.addEventListener('keydown', keyCode);

function colisionArbol(){
  setInterval(function(){  let posicion2 = cono.getBoundingClientRect();
    let posicion = pajaro.getBoundingClientRect();
    let valor2 = posicion.right - posicion2.right;
    let valor3 = posicion.top - posicion2.top;

    if((valor2>-50 && valor2<50) && (valor3>-50 && valor3<50)){
      terminarJuego();
    }
    ;}, 100);

}
function movimientoArbol(){
  let intervalo = setInterval(function(){
    if(valor < -200){
      valor = 2500;
    }
    valor -= 7;
    let moverCono = valor.toString().concat("px");
    cono.style.left = moverCono;
    if( terminado){
      clearInterval(intervalo);
    }
  }, 1000/60);


}

function colisionMoneda(){
      setInterval(function(){  let posicion2 = moneda.getBoundingClientRect();
        let posicion = pajaro.getBoundingClientRect();
        let valor2 = posicion.right - posicion2.right;
        let valor3 = posicion.top - posicion2.top;
        console.log(valor3)

        if((valor2>-50 && valor2<50) && (valor3>-100 && valor3<100)){ //colision moneda-pajaro
          colision = true;
          if(colision){
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
  let intervalo = setInterval(function(){
    if(valor < -200){
      valor = 2500;
    }
    valor -= 7;
    let moverMoneda = valor.toString().concat("px");
    moneda.style.left = moverMoneda;
    if( terminado){
      clearInterval(intervalo);
    }
  }, 1000/60);

}
function terminarJuego(){
terminado = true;
perdiste.className = " ";
document.removeEventListener("keydown", keyCode);

}


// falta hacer menu, pasar todo a request frame y hacer mas lindo el codigo, hacer que se generen las cosas en posiciones "random",  falta hacer animacion cuando muere el pajaro y borrar el arbol
