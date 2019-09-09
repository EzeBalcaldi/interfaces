// class Circulo {
//   constructor (x, y){
//     this.posX = x;
//     this.posY = y;
//   }
//
//    dibujar(x, y, canvas, ctx){
//     ctx.beginPath();
//     ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
//     ctx.fillStyle = "rgba(255, 0, 0, 255)";
//     ctx.fill();
//     ctx.closePath();
//   }
//

//
  class Circulo{
    constructor(x, y, radio, color){
        this.x=x;
        this.y=y;
        this.radio=radio;
        this.color=color;
    }
//MAS ADELANTE
    cambiarpos(x,y){
        this.x=x;
        this.y=y;
    }

    dibujar(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.stroke();
    }

    getRadio(){
      return this.radio;
    }
    mover(x,y){
      this.x += x;
       this.y += y;
    }

      getcoordenadaX(){
        return this.x;
      }
      getcoordenadaY(){
        return this.y;
      }
    }
