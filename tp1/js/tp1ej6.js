var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let imageData = ctx.createImageData(canvas.width, canvas.height);
let color = imageData;
let aux = 0;
let image1 = new Image();
image1.src = "images/image1.jpg";
image1.crossOrigin = "Anonymous";
image1.onload = function(){
  escalaDeGrises(this);
}
  function getR(imageData,x,y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 0];
  }

  function getG(imageData,x,y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 1];
  }

  function getB(imageData,x,y){
  index = (x + y * imageData.width) * 4;
  return imageData.data[index + 2];
  }

function escalaDeGrises(image1){
  ctx.drawImage(image1, 0, 0);
  imageData = ctx.getImageData(0, 0, image1.width, image1.height);
    for(let i = 0; i <imageData.width; i++){
      for(let j = 0; j < imageData.height; j++){
        aux = (getR(imageData,i,j) + getG(imageData,i,j) + getB(imageData,i,j))/3;
        color.r = aux ;
        color.g = aux ;
        color.b = aux ;
        setPixel(imageData, i, j , color.r, color.g, color.b, 255);
        }
      }
  ctx.putImageData(imageData, 0 , 0);


  function setPixel(imageData,x , y, r, g, b, a){
    let index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;

  }


}
