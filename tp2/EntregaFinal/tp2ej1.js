var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(0, 0, canvas.width,canvas.height);
ctx.fillStyle = "rgba(238, 238, 0, 1)";
ctx.fill();
ctx.closePath();
canvas.addEventListener('click', function(evento) {
        let mousePos = getCoordenadas (canvas, evento);
        let coordenadas = 'X' + mousePos.x + ', Y ' + mousePos.y;
console.log(coordenadas);
});

function getCoordenadas(canvas, evento){
return{
  x: evento.clientX,
  y: evento.clientY
};
}
