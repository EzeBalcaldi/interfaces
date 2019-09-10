var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let figura = [];
let cantidadCirculos = -1;
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = "rgba(125, 0, 150, 1)";
ctx.fill();
ctx.closePath();
let indice = 0;
let active = false;
let cerrado = false;
figura[indice] = new Figura();


canvas.addEventListener('click', crearCirculo);


function crearCirculo(evento){
        let mousePos = getCoordenadas (evento);
        let coordenadas = 'X' + mousePos.x + ', Y ' + mousePos.y;
        let circulo = new Circulo(mousePos.x, mousePos.y, 5, "#ff0000");
        circulo.dibujar(ctx);
        figura[indice].agregarCirculo(circulo);
        figura[indice].terminarLinea(ctx);
console.log(coordenadas);
}

function getCoordenadas(evento){
return{
  x: evento.clientX,
  y: evento.clientY
};
}

canvas.addEventListener("mousedown", function () {
    active = true;
});


canvas.addEventListener("mouseup", function () {
active = false;
})

canvas.addEventListener("mousemove", function (event) {
  if(cerrado === true && active === true && figura[indice].clickCentro(event)){
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width,canvas.height);
    ctx.fillStyle = "rgba(125, 0, 150, 1)";
    ctx.fill();
    ctx.closePath();
    figura[indice].mover(event, ctx);
  }
})



let botonCerrar = document.getElementById("cerrar").addEventListener('click', function(){
cerrado = true;
active = false;
figura[indice].cerrarPoligono();
 canvas.removeEventListener("click", crearCirculo);


});

// function hola(){
//   figura[indice].cerrarPoligono();
// }
