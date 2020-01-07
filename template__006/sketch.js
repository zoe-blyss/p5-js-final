let backcolor = 255;
let i = 5;
let c;

function setup() {
  c = createCanvas(1000, 600);
  c.position(windowWidth/2-500,windowHeight/2-300);
}

function preload(){
  // load image
  stars = loadImage("stars.png");
  quote = loadImage("quote__02.png");
}


function draw() {
    background(backcolor);

  backcolor -= i

  image(stars, 0, 0);
  image(quote, 0, 0);
}

// ************ get this to go back to the main index? *******************
function mousePressed(){
    window.location = '../index';
  }
