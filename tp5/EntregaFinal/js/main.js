let slider = document.querySelectorAll('.items');
let isDown = false;
let startX;
let scrollLeft;
let i = 0;
let hola = true;


for(let i = 0; i < slider.length; i++){
mover_fotos(slider[i].id);
}

function mover_fotos(id) {
  slider[id].addEventListener('mousedown', (e) => {
    isDown = true;
    slider[id].classList.add('active');
    startX = e.pageX - slider[id].offsetLeft;
    scrollLeft = slider[id].scrollLeft;
  });
  slider[id].addEventListener('mouseleave', () => {
    isDown = false;
    slider[id].classList.remove('active');
  });
  slider[id].addEventListener('mouseup', () => {
    isDown = false;
    slider[id].classList.remove('active');
  });
  slider[id].addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider[id].offsetLeft;
    const walk = (x - startX) * 1;
    slider[id].scrollLeft = scrollLeft - walk;
    console.log(walk);
  });



}
