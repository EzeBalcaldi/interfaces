var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let arregloCirculos = [];
let cantidadCirculos = -1;
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = "rgba(125, 0, 150, 1)";
ctx.fill();
ctx.closePath();
let botonCerrar = document.getElementById("cerrar").addEventListener('click', cerrarPoligono);

canvas.addEventListener('click', function(evento) {
        let mousePos = getCoordenadas (evento);
        let coordenadas = 'X' + mousePos.x + ', Y ' + mousePos.y;
        let circulo = new Circulo(mousePos.x, mousePos.y)
        circulo.dibujar(mousePos.x, mousePos.y , canvas, ctx);
        arregloCirculos.push(circulo);
        cantidadCirculos++;
        terminarLinea(circulo, ctx);
console.log(coordenadas);
});

function getCoordenadas(evento){
return{
  x: evento.clientX,
  y: evento.clientY
};
}
function terminarLinea(circulo, ctx){
  if(cantidadCirculos >= 1){
    let x2 = circulo.getcoordenadaX();
    let y2 = circulo.getcoordenadaY();
    let x = arregloCirculos[cantidadCirculos-1].getcoordenadaX();
    let y = arregloCirculos[cantidadCirculos-1].getcoordenadaY();
    dibujarLinea(ctx, x2, y2, x, y);
    console.log("x circulo " +x2);
    console.log("y circulo " +y2);
    console.log(" x circulo -1 " +  x);
    console.log(y);
  }
}
function dibujarLinea(ctx, x2, y2, x, y){
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FFFF00";
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x, y);
      ctx.stroke();
}
function cerrarPoligono(){
    let x2 = arregloCirculos[cantidadCirculos].getcoordenadaX();
    let y2 = arregloCirculos[cantidadCirculos].getcoordenadaY();
    let x = arregloCirculos[0].getcoordenadaX();
    let y = arregloCirculos[0].getcoordenadaY();
    dibujarLinea(ctx, x2, y2, x, y);
}
