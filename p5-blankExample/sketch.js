



let clouds;
let x=0;
let speed = 5;

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
   x=x+ speed;
   move()
 }

 function move(){
   if (x>=width){
     speed=-speed;
   }
   else if (x<0){speed=-speed}
 }
