class Figura {

  constructor(){
      this.circulos = [];
      this.centro = null;
  }

agregarCirculo(circulo){
  this.circulos.push(circulo);
}

getCirculos(){
  return this.circulos;
}

terminarLinea(){
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  if(this.circulos.length > 1){
    let circuloOrigen = this.circulos[this.circulos.length -1];
    let circuloDestino =this.circulos[this.circulos.length -2];
    this.dibujarLinea(ctx, circuloOrigen, circuloDestino);
    // if(this.circulos.length >4){
    //   this.cerrarPoligono();
    // }
  }
}

dibujarLinea(ctx, circuloOrigen, circuloDestino){
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#FFFF00";
      ctx.beginPath();
      ctx.moveTo(circuloDestino.getcoordenadaX(), circuloDestino.getcoordenadaY());
      ctx.lineTo(circuloOrigen.getcoordenadaX(), circuloOrigen.getcoordenadaY());
      ctx.stroke();
}

cerrarPoligono(){
  console.log("Kmkmkmk");
  let circuloOrigen = this.circulos[this.circulos.length -1];
  let circuloDestino =this.circulos[0];
  this.dibujarLinea(ctx, circuloOrigen, circuloDestino);
  this.calcularCentro();
    //adentro de otra funcion del hola
    // indice ++;
    // figura[indice] = new Figura();
  }


 calcularCentro(){
   var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
    let promedioX = 0;
    let promedioY = 0;
    for(let i = 0; i< this.circulos.length;i++){
      promedioX += this.circulos[i].getcoordenadaX();
      promedioY += this.circulos[i].getcoordenadaY();
    }
    promedioX = promedioX / this.circulos.length;
    promedioY = promedioY / this.circulos.length;
    let circulo = new Circulo(promedioX, promedioY, 50, "#80ff00")
    this.centro = circulo;
    circulo.dibujar(ctx);
    console.log(promedioX);
    console.log(promedioY);
  }



      clickCentro(e){
          let d1 = Math.sqrt(Math.pow(e.clientX-this.centro.getcoordenadaX(),2)+Math.pow(e.clientY-this.centro.getcoordenadaY(),2))
          if (d1<this.centro.getRadio()){
            console.log("atroden");

            return true;
          }else{
            console.log("afuerovich");
            return false;
          }
        }

mover(e, ctx) {
  if(this.centro!=null){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.circulos.length; i++) {
        this.circulos[i].mover(e.clientX - this.centro.getcoordenadaX(), e.clientY - this.centro.getcoordenadaY())
        this.circulos[i].dibujar(ctx);

    }
    this.dibujarTodasLineas(ctx);
    this.calcularCentro();
}

}

dibujarTodasLineas(ctx){
  for (let i = 0; i < this.circulos.length-1; i++) {
    this.dibujarLinea(ctx,this.circulos[i], this.circulos[i+1])
      //this.circulos[i].mover(e.clientX - this.centro.getcoordenadaX(), e.clientY - this.centro.getcoordenadaY())
      //this.circulos[i].dibujar(ctx);
  }
    this.dibujarLinea(ctx,this.circulos[this.circulos.length-1],this.circulos[0] );

}

}
