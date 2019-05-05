class Ball  {

  constructor(diameter) {
    this.x = 300;
    this.y = 200,
    this.xspeed = 4;
    this.yspeed = -3;
    this.r = diameter /2 ;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = -this.yspeed;
    }
  }

  display() {
    stroke(255);
    strokeWeight(4);
    // noFill();
    fill(255, 0, 255);
    ellipse(this.x, this.y, this.r);

  }


}
