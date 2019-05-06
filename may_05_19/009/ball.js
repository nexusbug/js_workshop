class Ball  {

  constructor(diameter) {
    this.x = mouseX || random(100,500),
    this.y = mouseY || random(100,500),
    this.xspeed = 4;
    this.yspeed = -3;
    this.r = diameter /2 ;
  }

  move() {
    this.x += random(-5,5);
    this.y += random(-5,5);
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
