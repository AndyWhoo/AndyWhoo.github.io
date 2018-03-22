let clouds;
let x = 255;
let speed = 5;
var wario;

function preload() {
  clouds = loadImage('angry sun.png');
  wario=loadGif('wariosneeze.gif');
}


  function setup() {
    createCanvas(500, 500);
    background(200);
  }

  function draw() {
    background(200);
    image(clouds, x, 10, clouds.width / 2, clouds.height / 2);
    image(wario,0,0);

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
