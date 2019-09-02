var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvas2=document.getElementById("MyCanvas2");
 var ctx2=canvas2.getContext("2d");

let imageData = ctx.createImageData(canvas.width, canvas.height);
let sumador = 0;
let image1 = new Image();
image1.src = "image1.jpg";
image1.crossOrigin = "Anonymous";
let color = imageData;
image1.onload = function(){
  ctx1.canvas.height=image1.height;
  ctx1.canvas.width=image1.width;
  ctx2.canvas.height=image1.height;
  ctx2.canvas.width=image1.width;
  ctx.drawImage(this, 0, 0);
  ctx2.drawImage(image,0,0);
  imageData = ctx.getImageData(0, 0, this.width, this.height);
  //codigo para modificar pixeles
  ctx.putImageData(imageData, 0 , 0);
  escalaDeGrises();
}
function escalaDeGrises(){
  for(let i = 0; i < imageData.width; i++){
    for(let j = 0; j < imageData.height; j++){
        sumador = (getRed(imageData, i, j) + getGreen(imageData, i, j) + getBlue(imageData, i, j)) / 3;
        color.r = sumador;
        color.g = sumador;
        color.b = sumador;
      setPixel(imageData, i, j , color.r, color.g, color.b, 255);
    }
}
}

  function setPixel(imageData,x , y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
  }

  function getRed(imageData, x, y){
    let index = (x + y * imageData.width) *4;
    return imageData.data[index+0]
  }
  function getGreen(imageData, x, y){
    let index = (x + y * imageData.width) *4;
    return imageData.data[index+1]
  }
  function getBlue(imageData, x, y){
    let index = (x + y * imageData.width) *4;
    return imageData.data[index+2]
}
var imgData2=ctx2.getImageData(0,0,canvas2.width,canvas2.height);


//arreglar todos los codigos, hacerlos mas lindos y con buenas practicas
//este ejercicio anda solo en chrome
//para hacerlo gris sumo los 3 colores del pixel de la foto (r, g, b) y los divido x 3
// por ejemplo, r= 150, g= 23, b = 48.  let gris = (150+23+48)/3
// r = gris, g = gris, b = gris
//ajustar el tamaño del canvas al tamaño de la foto que se va a poner, mediante css dandole una clase al canvas en html?
//https://programarfacil.com/tutoriales/fragmentos/javascript/convertir-a-escala-de-grises-una-imagen-con-javascript/
