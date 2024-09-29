/* stolen from bluetails.neocities.org */
var draggable = document.getElementById('demo');

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

demo.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseDown(e) {
  e.preventDefault();
  posX = e.clientX - demo.offsetLeft;
  posY = e.clientY - demo.offsetTop;
  window.addEventListener('mousemove', moveElement, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', moveElement, false);
}

function moveElement(e) {
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  demo.style.left = mouseX + 'px';
  demo.style.top = mouseY + 'px';
}