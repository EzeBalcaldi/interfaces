class Figura {
  constructor(){
    this.circulos = [];
    this.centro = null;
  }
  addCirculo(circulo){
    this.circulos.push(circulo);
  }
  getCirculos(){
    return this.circulos;
  }

  terminarLinea(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    if(this.circulos.length > 1){
      let circulo1 = this.circulos[this.circulos.length -1];
      let circulo2 =this.circulos[this.circulos.length -2];
      this.dibujarLinea(ctx, circulo1, circulo2);
    }
  }
  dibujarLinea(ctx, circulo1, circulo2){
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#FFFF00";
    ctx.beginPath();
    ctx.moveTo(circulo2.getX(), circulo2.getY());
    ctx.lineTo(circulo1.getX(), circulo1.getY());
    ctx.stroke();
  }
  cerrarPoligono(){
    let circulo1 = this.circulos[this.circulos.length -1];
    this.dibujarLinea(ctx, circulo1, this.circulos[0]);
    this.calcularCentro();
  }

  calcularCentro(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    let x = 0;
    let y = 0;
    for(let i = 0; i< this.circulos.length;i++){
      x += this.circulos[i].getX();
      y += this.circulos[i].getY();
    }
    x = x / this.circulos.length;
    y = y / this.circulos.length;
    let circulo = new Circulo(x, y, 15, "#80ff00")
    this.centro = circulo;
    circulo.dibujar(ctx);
  }
  clickCentro(e){
    let d1 = Math.sqrt(Math.pow(e.clientX-this.centro.getX(),2)+Math.pow(e.clientY-this.centro.getY(),2))
    if (d1<this.centro.getRadio()){
      return true;
    }else{
      return false;
    }
  }

  clickCirculo(e,ctx){
    for(let i = 0; i < this.circulos.length; i++){
      let d1 = Math.sqrt(Math.pow(e.clientX-this.circulos[i].getX(),2)+Math.pow(e.clientY-this.circulos[i].getY(),2))
      if (d1<this.circulos[i].getRadio()){
        return this.circulos[i];
      }
    }
    return null;
  }
  indiceCirculoClickeado(e,ctx){
    for(let i = 0; i < this.circulos.length; i++){
      let d1 = Math.sqrt(Math.pow(e.clientX-this.circulos[i].getX(),2)+Math.pow(e.clientY-this.circulos[i].getY(),2))
      if (d1<this.circulos[i].getRadio()){
        return i;
      }
    }
    return null;
  }

  cambiarPosicionCirculoRojo(circuloClickeado,e){
    circuloClickeado.cambiarPosicion(e.clientX - circuloClickeado.getX(), e.clientY - circuloClickeado.getY())
    for(let i = 0; i < this.circulos.length; i++){
      this.circulos[i].dibujar(ctx);
    }
    this.dibujarLineas(ctx);
    this.calcularCentro();
  }

  cambiarPosicion(e, ctx) {
    if(this.centro!=null){
      for (let i = 0; i < this.circulos.length; i++) {
        this.circulos[i].cambiarPosicion(e.clientX - this.centro.getX(), e.clientY - this.centro.getY())
        this.circulos[i].dibujar(ctx);
      }
      this.dibujarLineas(ctx);
      this.calcularCentro();
    }

  }

  dibujarLineas(ctx){
    for (let i = 0; i < this.circulos.length-1; i++) {
      this.dibujarLinea(ctx,this.circulos[i], this.circulos[i+1])
    }
    this.dibujarLinea(ctx,this.circulos[this.circulos.length-1],this.circulos[0] );

  }
  borrarCirculo(circuloClick,event,ctx){
    this.circulos.splice(circuloClick,1);
    for (let i = 0; i < this.circulos.length; i++) {
      this.circulos[i].dibujar(ctx);
    }
    this.dibujarLineas(ctx);
    this.calcularCentro();
    this.centro.dibujar(ctx);
  }
  dibujarFiguras(ctx) {
    this.centro.dibujar()
    for (let i = 0; i < this.circulos.length; i++) {
        this.circulos[i].dibujar()
    }
    this.dibujarLineas(ctx);
}
aumentarColor(ctx) {
  for(let i = 0; i < this.circulos.length;i++){
      this.circulos[i].setColor("#C10000");
      this.circulos[i].dibujar(ctx);
    }
    this.centro.setColor("#00A32E");
    this.centro.dibujar(ctx);
}
decrementarColor(ctx) {
  for(let i = 0; i < this.circulos.length;i++){
    this.circulos[i].setColor("#FF5151");
    this.circulos[i].dibujar(ctx);
  }
  this.centro.setColor("#65FF91");
  this.centro.dibujar(ctx);
}
colorDefault(ctx){
  for(let i = 0; i < this.circulos.length;i++){
    this.circulos[i].setColor("#FF0000");
    this.circulos[i].dibujar(ctx);
  }
  if(this.centro != null){
    this.centro.setColor("#80ff00");
    this.centro.dibujar(ctx);
  }
}
}
