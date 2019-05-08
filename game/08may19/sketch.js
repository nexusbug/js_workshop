let canvas;
let player;
let squareSize;
let direction, cols, rows;

function setup() {
  canvas = createCanvas(600, 600);
  squareSize = width / 40;
  player = new Player(squareSize);

  frameRate(20);
}

function draw() {
  background(51);

  fill(255);
  noStroke();
  player.show();
  player.move();

  noFill();
  strokeWeight(4);
  stroke(0);
}

class Episode {
  constructor() {

  }
}


class Player {
  constructor(size) {
    this.x = 50;
    this.y = 50;
    this.size = size;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  move() {
    this.x += this.xspeed * this.size;
    this.y += this.yspeed * this.size;

    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    rect(this.x, this.y, this.size, this.size);
  }
}
