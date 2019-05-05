let circleX = 50;
let control = 1;

let objectCircle = {
  x: 300,
  y: 100,
  diameter: 50
}

function setup() {
  createCanvas(600, 600);
  createP("Hello");
  // background(0, 120, 255);

}

function draw() {



  // background(0, 100, 200);
  // fill(0,100,100);
  stroke(0, 120, 255);
  strokeWeight(8);
  rectMode(CENTER);
  fill(155);
  rect(100, 100, 50, 50);

  // noStroke();

  if (control == 1) {
    circleX++;
    strokeWeight(2);
    fill(230);
    if (circleX == width - 50) {
      control = 2;
    }
  } else {
    circleX--;
    strokeWeight(8);
    stroke(255);
    fill(255);

    if (circleX == 50) {
      control = 1;
    }
  }

    ellipse(circleX, 300, 50);

  ellipse(objectCircle.x, objectCircle.y, objectCircle.diameter/2);
}



/**
05 may 2019

first day

fast rust removal

which subjets recovered:

1) shapes, drawing (once or loop)
2) color
3) comments
4) variables (predefined or our own)
5) objects
6) conditionals

**/
