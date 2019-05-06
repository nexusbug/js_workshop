function setup() {
  createCanvas(600, 600);


}

function draw() {
  background(0);

  let x = 0;

  //while and for loops below do the same thing

  while (x <= width) {
    fill(0, 120, 255);
    ellipse(x, 150, 25, 25);
    x += 50;
  }

  for (let i = 0; i <= width; i += 50) {
    fill(55, 120, 0);
    ellipse(i, 450, 25);

  }


}



/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

11) while and for loops


**/
