var img;
var speed = 1
var direction01 = 1
var direction02 = 1
var direction03 = 1
let ypos01 = 80;
let ypos02 = 30;
let ypos03 = 90;
let xpos01 = 75;
let xpos02 = 350;
let xpos03 = 725;
let c;

function setup() {
  c = createCanvas(1000, 600);
  c.position(windowWidth/2-500,windowHeight/2-300);
}

function preload()
{
  // load image
  sky = loadImage("sky.jpg");
  moon = loadImage("moon.png");
  torus01 = loadImage("torus01.png");
  torus02 = loadImage("torus02.png");
  torus03 = loadImage("torus03.png");
}


function draw() {
  background(sky);

    //torus
  image(torus01, xpos01, ypos01);
  image(torus02, xpos02, ypos02);
  image(torus03, xpos03, ypos01);


      //torus move
  ypos01 += speed * direction01
  ypos02 += speed * direction02
  ypos03 += speed * direction02

  if(ypos01 >= 90  || ypos01 < 70 ){
    direction01 = -direction01
  }

  if(ypos02 >= 60 || ypos02 < 30 ){
    direction02 = -direction02
  }

  if(ypos03 >= 92  || ypos03 < 70 ){
    direction03 = -direction03
  }

    // display image (img, x, y)
  image(moon, 0, 0);
}

function mousePressed(){

  if( dist(mouseX,mouseY,xpos01 + 80, ypos01 + 122.5) < 300){
    window.location = '../template__005';
  }

  if( dist(mouseX,mouseY,xpos02 + 143.5, ypos02 + 104.5) < 300){
    window.location = '../template__006';
  }

  if( dist(mouseX,mouseY,xpos03 + 102.5, ypos03 + 122.5) < 300){
    window.location = '../template__007';
  }
}
