var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let imageData = ctx.createImageData(canvas.width, canvas.height);
let image1 = new Image();
image1.src = "image1.jpg";
image1.crossOrigin = "anonymous";
image1.onload = function(){
  ctx.drawImage(this, 0, 0);
  imageData = ctx.getImageData(0, 0, this.width, this.height);
  //codigo para modificar pixeles
  ctx.putImageData(imageData, 0 , 0);
}
//arreglar todos los codigos, hacerlos mas lindos y con buenas practicas
//este ejercicio anda solo en chrome
//para hacerlo gris sumo los 3 colores del pixel de la foto (r, g, b) y los divido x 3
// por ejemplo, r= 150, g= 23, b = 48.  let gris = (150+23+48)/3
// r = gris, g = gris, b = gris
//ajustar el tamaño del canvas al tamaño de la foto que se va a poner, mediante css dandole una clase al canvas en html?
//https://programarfacil.com/tutoriales/fragmentos/javascript/convertir-a-escala-de-grises-una-imagen-con-javascript/
