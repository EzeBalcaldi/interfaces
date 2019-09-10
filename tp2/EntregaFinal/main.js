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
let active = true;
figura[indice] = new Figura();


if(active = true){
canvas.addEventListener('mousedown', crearCirculo);
}

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

//
// canvas.addEventListener("mousedown", function () {
//     active = true;
// });


canvas.addEventListener("mousemove", function () {
    //  figura[indice].clickCentro(evt);
    if (active==true){
      console.log("ESKEREEEEEEEEEEEEEEEEEEEE");

        ctx.fillStyle = "rgba(125, 0, 150, 1)";
    }

})

canvas.addEventListener("mouseup", function (event) {
    figura[indice].mover(event, ctx);
    //active = false;
})



let botonCerrar = document.getElementById("cerrar").addEventListener('click', function(){figura[indice].cerrarPoligono()});

// function hola(){
//   figura[indice].cerrarPoligono();
// }
