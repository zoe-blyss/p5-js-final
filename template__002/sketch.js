var img;
var speed = 1
var direction01 = 2
var direction02 = -2
let ypos01 = 200;
let xpos01 = 100;
let ypos02 = 150;
let xpos02 = 650;
let c;

function setup() {
  c = createCanvas(1000, 600);
  c.position(windowWidth/2-500,windowHeight/2-300);
  frameRate(30);
}

function preload()
{
  // load image
  nightsky = loadImage("nightsky.jpg");
  grass01 = loadImage("grass01.png");
  grass02 = loadImage("grass02.png");
  moon = loadImage("moon.png");
  portal01 = loadImage("portal01.png");
  portal02 = loadImage("portal02.png");
}

function draw() {
  background(nightsky);

    //portals
  image(portal01, xpos01, ypos01);
  image(portal02, xpos02, ypos02);



    //portals move
  ypos01 += speed * direction01
  ypos02 += speed * direction02

  if(ypos01 >= 210  || ypos01 < 150 ){
    direction01 = -direction01
  }

  if(ypos02 >= 160  || ypos02 < 105 ){
    direction02 = -direction02
  }


    // display image (img, x, y)
  image(grass01, 0, 0);
  image(grass02, 0, 0);
  image(moon, 0, 0);
}

function mousePressed(){

  if( dist(mouseX,mouseY,xpos01 + 109.5, ypos01 + 81) < 300){
    window.location = '../template__003';
  }

  if( dist(mouseX,mouseY,xpos02 + 109.5, ypos02 + 81) < 300){
    window.location = '../template__004';
  }
}
