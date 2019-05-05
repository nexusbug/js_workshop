let nums = [100, 25, 12, 72];
let words = ["rainbow", "unicorn", "purple"];
let index = 0;

function setup() {
  createCanvas(600, 600);


}

function draw() {

  background(0);
  fill(255);
  textSize(32);
  ellipse(100, 400, nums[1], nums[2]);
  text(words[index], 12, 200);

}

function mousePressed() {

  index++;
  if (index == 3) {
    index = 0;
  }

  console.log(index);
}







/**
05 may 2019

first day

fast rust removal continued

which subjets recovered:

18) arrays


**/
