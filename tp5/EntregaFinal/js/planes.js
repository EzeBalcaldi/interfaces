
let boton = document.querySelector('#botonPlanes').addEventListener("click", cargarInfoPago);
function cargarInfoPago(){
  window.location.assign('informacionPago.html')

}
let slider = document.querySelectorAll('.items');
for(let i = 0; i < slider.length; i++){
mover_fotos(slider[i].id);
}

function mover_fotos(id) {
  slider[id].addEventListener('click', (e) => {
    sacarClase(id);
    slider[id].classList.add("cajaSeleccionada");
  });



}
function sacarClase(id){
  for(let i = 0; i < slider.length; i++){
    slider[i].classList.remove("cajaSeleccionada");
}
}
