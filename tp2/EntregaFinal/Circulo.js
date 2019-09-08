class Circulo{
  constructor (x, y){
    this.posX = x;
    this.posY = y;
  }

   dibujar(x, y, canvas, ctx){
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
    ctx.fillStyle = "rgba(255, 0, 0, 255)";
    ctx.fill();
    ctx.closePath();
  }
  
  getcoordenadaX(){
    return this.posX;
  }
  getcoordenadaY(){
    return this.posY;
  }
  }
