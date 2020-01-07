var img;
var speed = 1
var direction01 = 2
var direction02 = 5
var direction03 = 3
let xpos01 = 40;
let xpos02 = 110;
let xpos03 = 700;
let c;

function preload()
{
  // load image
  sky = loadImage("sky.jpg");
  grass01 = loadImage("grass01.png");
  door = loadImage("door.png");
  grass02 = loadImage("grass02.png");
  cloud01 = loadImage("cloud.png");
  cloud02 = loadImage("cloud.png");
  cloud03 = loadImage("cloud.png");
}


function setup() {
  c = createCanvas(1000, 600);
  c.position(windowWidth/2-500,windowHeight/2-300);
  frameRate(30);
}

function draw() {
  background(sky);


  //clouds
  image(cloud01, xpos01, 40);
  image(cloud02, xpos02, 250);
  image(cloud03, xpos03, 70);

  //clouds move
  xpos01 += speed * direction01
  xpos02 += speed * direction02
  xpos03 += speed * direction03

  if(xpos01 >= width){
    xpos01 = -250;
  }

  if(xpos02 >= width){
    xpos02 = -400;
  }

  if(xpos03 >= width){
    xpos03 = -250;
  }

  // display image (img, x, y)
  image(grass01, 0, 0);
  image(door, 0, 0);
  image(grass02, 0, 0);
}



function mousePressed(){
  window.location = 'template__002'
}
