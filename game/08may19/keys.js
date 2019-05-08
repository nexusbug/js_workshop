function keyPressed() {
  if (keyIsDown(81)) {
    //Q
    player.direction(-1, -1);
  } else if (keyIsDown(87)) {
    //W
    player.direction(0, -1);
  } else if (keyIsDown(69)) {
    //E
    player.direction(1, -1);
  } else if (keyIsDown(65)) {
    //A
    player.direction(-1, 0);
  } else if (keyIsDown(83)) {
    //S
    player.direction(0, 1);
  } else if (keyIsDown(68)) {
    //D
    player.direction(1, 0);
  } else if (keyIsDown(90)) {
    //Z
    player.direction(-1, 1);
  } else if (keyIsDown(88)) {
    //X
    player.direction(1, 1);
  }
}

function keyReleased() {
  if (keyCode === 81) {
    //Q
    player.direction(0, 0);
  } else if (keyCode === 87) {
    //W
    player.direction(0, 0);
  } else if (keyCode === 69) {
    //E
    player.direction(0, 0);
  } else if (keyCode === 65) {
    //A
    player.direction(0, 0);
  } else if (keyCode === 83) {
    //S
    player.direction(0, 0);
  } else if (keyCode === 68) {
    //D
    player.direction(0, 0);
  } else if (keyCode === 90) {
    //Z
    player.direction(0, 0);
  } else if (keyCode === 88) {
    //X
    player.direction(0, 0);
  }
}
