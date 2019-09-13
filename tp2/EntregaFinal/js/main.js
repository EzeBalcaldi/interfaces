const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let arregloFiguras = [];
let rgba = "rgba(0, 0, 0, 1)";
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = rgba;
ctx.fill();
ctx.closePath();
let cantidadPoligonos = 0;
let active = false;
let cerrado = false;
let cPresionada = false;
arregloFiguras[cantidadPoligonos] = new Figura();

canvas.addEventListener('click', crearCirculo);

function crearCirculo(event){
        let coordenada = getCoordenadas(event);
        let circulo = new Circulo(coordenada.x, coordenada.y, 25, "#FF0000");
        circulo.dibujar(ctx);
        arregloFiguras[cantidadPoligonos].addCirculo(circulo);
        arregloFiguras[cantidadPoligonos].terminarLinea(ctx);
}

function getCoordenadas(event){
return{
  x: event.clientX,
  y: event.clientY
};
}

canvas.addEventListener("mousedown", function () {
    active = true;
});

canvas.addEventListener("mouseup", function () {
active = false;
})

  canvas.addEventListener("mousemove", function (event) {
  if(cerrado === true && active === true){
    if(arregloFiguras[cantidadPoligonos].clickCentro(event)){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width,canvas.height);
    ctx.fillStyle = rgba;
    ctx.fill();
    ctx.closePath();
    arregloFiguras[cantidadPoligonos].cambiarPosicion(event, ctx);
  }
else{
  let circuloClick = arregloFiguras[cantidadPoligonos].clickCirculo(event,ctx);
  if(circuloClick != null){
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width,canvas.height);
  ctx.fillStyle = rgba;
  ctx.fill();
  ctx.closePath();
  arregloFiguras[cantidadPoligonos].cambiarPosicionCirculoRojo(circuloClick,event);
    }
  }
}
})

let botonCerrar = document.getElementById("cerrar").addEventListener('click', function(){
 cerrado = true;
 active = false;
arregloFiguras[cantidadPoligonos].cerrarPoligono();
  canvas.removeEventListener("click", crearCirculo);

});
function cApretada(event) {
  var x = event.keyCode;
  if (x == 67) {
   cPresionada = true;
    return true;
}
}

canvas.addEventListener('dblclick', function (event) {
  let circuloClick = arregloFiguras[cantidadPoligonos].indiceCirculoClickeado(event,ctx);
  if(circuloClick != null){
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width,canvas.height);
  ctx.fillStyle = rgba;
  ctx.fill();
  ctx.closePath();
  arregloFiguras[cantidadPoligonos].borrarCirculo(circuloClick,event,ctx);
    }
})

document.addEventListener("keyup",function(e){
  cPresionada = false;
  arregloFiguras[cantidadPoligonos].colorDefault(ctx);
})
document.addEventListener("keydown", cApretada);

window.addEventListener('wheel', function(e){
  if(cPresionada){
    if (e.deltaY < 0){
     arregloFiguras[cantidadPoligonos].aumentarColor(ctx);
    }
    else if (e.deltaY > 0){
      arregloFiguras[cantidadPoligonos].decrementarColor(ctx);

    }
  }
});
