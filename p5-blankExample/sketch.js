let clouds;
let x=0;

function preload() {
  // you will need to change this to the file path to your image
  clouds = loadImage('superMarioClouds_0.png');
}

function setup() {
  createCanvas(500, 500);
  background(200);
}

  function draw() {
    background(200);
    image(clouds,x,10, clouds.width/2, clouds.height/2);
    image(clouds,x,100, clouds.width/2, clouds.height/2);
    x++;
  }

  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height


  // If you want to scale the image to 100 x 100 pixels
  // image(img, 0, 0, 100, 100);

  // If you want to scale image by 50%
  // image(img, 10, 10, img.width/2, img.height/2);
