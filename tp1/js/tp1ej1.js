let matriz = [];
const filas = 100;
const columnas = 100;
let maximo = 0;
let maximoPares = 0;
let minimoPares = 101;
let promedio = [];
let sumador = 0;
for (let i = 0; i < filas; i++) {
  matriz[i] = [];
  for (let j = 0; j < columnas; j++) {
    matriz[i][j] = Math.floor(Math.random() *100 )+1;
  }
}
for(let i = 0; i < filas; i++){
  for(let j = 0; j < columnas; j++){
    if(matriz[i][j] > maximo){
      maximo = matriz[i][j]
    }
  }
}
//inciso 2, minimo y maximo en filas impares y pares
for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
    if(i %2 === 0){
      if(matriz[i][j] > maximoPares){
        maximoPares = matriz[i][j];
      }
    }else if(i %3 === 0){
      if(matriz[i][j] < minimoPares){
        minimoPares = matriz[i][j];
      }
    }
  }
}
// inciso 3, promedio en arreglos
for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {
      sumador += matriz[i][j];
    }
    sumador = sumador/columnas;
    console.log("el promedio de la fila " +i + " es " +sumador);
    promedio.push(sumador);
    sumador = 0;
    }
console.log("el maximo es " +maximo);
console.log("el maximo de las filas pares es " +maximoPares)
console.log("el minimo de los filas impares es " +minimoPares)
