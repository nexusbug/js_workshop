let col = {
  x: 250,
  y: 250
}

let spot = {
  x: 300,
  y: 300,
  r: 12
}

let extraCanvas;

function setup() {
  createCanvas(600, 600);
  background(200);
  extraCanvas = createGraphics(width, height);
  extraCanvas.clear();

}

function draw() {


  noStroke();
  fill(0,150,150,10);
  col.x += random(-10, 10);
  col.y += random(-10, 10);
  ellipse(col.x, col.y, 50);

  stroke(0);
  spot.x = random(0, width);
  spot.y = random(0, height);

  extraCanvas.ellipse(spot.x, spot.y, spot.r);
  image(extraCanvas, 0, 0);

  // if (mouseIsPressed) {
  //   background(200);
  // }
}



/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

8) random function
9) createGraphics


**/
