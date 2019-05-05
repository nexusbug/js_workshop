let ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

let counter = 0;

function setup() {
  createCanvas(600, 600);


}

function draw() {

  background(0);
  display(48);
  bounce();
  move();

}


function move() {
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = -ball.xspeed;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = -ball.yspeed;
  }
}

function display(diameter) {
  let r = diameter/2;
  let x = ball.x;
  let y = ball.y;
  stroke(255);
  strokeWeight(4);
  // noFill();
  fill(255,0,255);
  ellipse(x, y, r);

}




/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

12) function basics
13) function paramaters and arguments
14) function return


**/
