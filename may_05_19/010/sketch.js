let canvas;
let h1;
let x = 300;
let y = 300;
let btn;
let bgcolor;
let sldr;


function setup() {
  canvas = createCanvas(600, 600);
  h1 = createElement("h2", "title by js");
  createP("this is a paragraph created by js");
  // canvas.position(0, 0);
  btn = createButton("light switch");
  bgcolor = 255;
  btn.mousePressed(changeColor);
  createP();
  sldr = createSlider(0, 255, bgcolor);

}

function draw() {


  background(bgcolor);
  fill(255, 0, 0);
  rect(200, 400, 30, 50);
  ellipse(400, 200, 30, 50);

  x += random(-3, 3);
  y += random(-3, 3);

  h1.position(x - 150, y - 150);
}

function mousePressed() {
  h1.html("when clicked it will change");
  // createP("my favourite number is" + random(0, 10));
  // console.log("bgcolor");
}

function changeColor() {
  bgcolor = random(255);
}



/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

21) html, dom,

*/
