let bubble;

let bubbles = [];

function setup() {
  createCanvas(600, 600);
  bubble = new Ball(48);

  for (let i = 0; i < 50; i++) {
    bubbles[i] = new Ball(24);
  }
}


function draw() {
  background(0);
  bubble.display();
  bubble.bounce();
  bubble.move();


  //for and for..of loops below do the same thing

  // for (let i = 0; i < bubbles.length; i++) {
  //   bubbles[i].display();
  //   bubbles[i].move();
  //   bubbles[i].bounce();
  // }

  for (newBubble of bubbles) {
    newBubble.display();
    newBubble.move();
    newBubble.bounce();
  }

}

function mousePressed() {
  let b = new Ball(10);
  bubbles.push(b);

}









/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

19) arrays with loops
20) for..of loop


**/
