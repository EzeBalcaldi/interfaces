  class Circulo{
    constructor(x, y, radio, color){
        this.x=x;
        this.y=y;
        this.radio=radio;
        this.color=color;
    }
  setColor(color){
    this.color = color;
  }

    dibujar(ctx){
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    getRadio(){
      return this.radio;
    }
    getColor(){
      return this.color;
    }
    cambiarPosicion(x,y){
      this.x += x;
       this.y += y;
    }

      getX(){
        return this.x;
      }
      getY(){
        return this.y;
      }
    }
