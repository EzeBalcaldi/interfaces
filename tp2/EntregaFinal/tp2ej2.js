var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = "rgba(125, 0, 150, 1)";
ctx.fill();
ctx.closePath();
canvas.addEventListener('click', function(evento) {
        let mousePos = getCoordenadas (evento);
        let coordenadas = 'X' + mousePos.x + ', Y ' + mousePos.y;
        let circulo = new Circulo(mousePos.x, mousePos.y, 2, '#141444')
        circulo.dibujar(mousePos.x, mousePos.y , canvas, ctx);
console.log(coordenadas);
});

function getCoordenadas(evento){
return{
  x: evento.clientX,
  y: evento.clientY
};
}
