let canvas;
let player;
let playerSize;
let episode;
let step;
let squareSize;

function setup() {
  canvas = createCanvas(600, 600);
  step = width / 12;
  playerSize = step / 2;
  player = new Player(25);
  episode = new Episode(step, playerSize);

  frameRate(20);
}

function draw() {
  background(51);

  noFill();
  strokeWeight(4);
  stroke(0);
  episode.show();

  fill(255);
  noStroke();
  episode.player();
  episode.move();

}

class Episode {
  constructor(step, playerSize) {
    this.x = width / 2;
    this.y = step;
    this.size = playerSize;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  show() {
    rect(width / 2 - step, step,
      2 * step, 4 * step);
    rect(width / 2 - step, height / 2 + step,
      2 * step, 4 * step);
    line(0, height / 2, width, height / 2)


  }

  player() {
    //player
    push();
    rectMode(CENTER);
    rect(this.x, this.y + this.size / 2, this.size, this.size);
    pop();

    // if (this.x) {
    //
    // }
  }

  move() {
    this.x += this.xspeed * this.size;
    this.y += this.yspeed * this.size;

    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }

  direction(x, y) {
    this.xspeed = x;
    this.yspeed = y;
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
