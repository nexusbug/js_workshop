//light switch application

lightIsOn = true;

function setup() {
  createCanvas(600, 600);
  background(200);
}

function draw() {


  if (lightIsOn) {
    fill(100);
    background(200);
  } else {
    fill(20);
    background(100);
  }
  rect(100, 100, 25, 25);

}

function mousePressed() {
  if (mouseX > 100 && mouseX < 125 && mouseY > 100 && mouseX < 125) {
      lightIsOn = !lightIsOn;
      console.log(lightIsOn);
  }
}


/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

10) booleans


**/
