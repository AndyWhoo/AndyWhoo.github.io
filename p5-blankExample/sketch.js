let sun;
let x = 255;
let speed = 5;
var wario;

function preload() {
  sun = loadImage('angry sun.png');
  wario = loadGif('wariosneeze.gif');
}


function setup() {
  createCanvas(500, 500);
  background(200);
}

function draw() {
  background(200);
  image(sun, x, 10, sun.width / 2, sun.height / 2);
  image(wario, 0, 0);

  if (mouseIsPressed) {
    wario.resize(0,0);
  }
else if (background(200)){ image(wario,0,0);}






  x = x + speed;
  move()
}




function move() {
  if (x >= width) {
    speed = -speed;
  } else if (x < -255) {
    speed = -speed
  }
}
