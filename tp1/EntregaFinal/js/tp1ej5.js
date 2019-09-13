//modularicé todo y no sé por qué tarda en cargar el color en el canvas, sin estar modularizado funciona rápido
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let imageData = ctx.createImageData(canvas.width, canvas.height);
let color = imageData;
let aux = 255;
let aux2 = 255;
const decremento = 0.5;
crearCanvas();
function crearCanvas(){
  for(let i = 0; i < imageData.width; i++){
    for(let j = 0; j < imageData.height; j++){
        color.r = i/imageData.height * aux;
        color.g = i/imageData.height * aux2;
        color.b = i/imageData.height * 25;
      setPixel(imageData, i, j , color.r, color.g, color.b, 255);
    }
    if(i >= imageData.width/2){
      aux2 = aux2 - decremento;
    }
    dibujar();
  }
}
function setPixel(imageData,x , y, r, g, b, a){
  let index = (x + y * imageData.width) * 4;
  imageData.data[index+0] = r;
  imageData.data[index+1] = g;
  imageData.data[index+2] = b;
  imageData.data[index+3] = a;
}
function dibujar(){
  ctx.putImageData(imageData, 0, 0);
}
