var img;
var speed = 1
var direction01 = -1
var direction02 = -1
var direction03 = -1
let ypos01 = 280;
let ypos02 = 350;
let ypos03 = 280;
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
  earth = loadImage("earth.png");
  torus01 = loadImage("torus01.png");
  torus02 = loadImage("torus02.png");
  torus03 = loadImage("torus03.png");
}


function draw() {
  background(sky);

    // display image (img, x, y)
  image(earth, 0, 0);

    //torus
  image(torus01, xpos01, ypos01);
  image(torus02, xpos02, ypos02);
  image(torus03, xpos03, ypos01);


      //torus move
  ypos01 += speed * direction01
  ypos02 += speed * direction02


  if(ypos01 >= 300  || ypos01 < 280 ){
    direction01 = -direction01
  }

  if(ypos02 >= 375 || ypos02 < 350 ){
    direction02 = -direction02
  }
}

function mousePressed(){

  if( dist(mouseX,mouseY,xpos01 + 80, ypos01 + 122.5) < 300){
    window.location = '../template__008';
  }

  if( dist(mouseX,mouseY,xpos02 + 143.5, ypos02 + 104.5) < 300){
    window.location = '../template__009';
  }

  if( dist(mouseX,mouseY,xpos03 + 102.5, ypos03 + 122.5) < 300){
    window.location = '../template__010';
  }
}
