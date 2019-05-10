function keyPressed() {
  if (keyIsDown(81)) {
    //Q
    episode.direction(-1, -1);
  } else if (keyIsDown(87)) {
    //W
    episode.direction(0, -1);
  } else if (keyIsDown(69)) {
    //E
    episode.direction(1, -1);
  } else if (keyIsDown(65)) {
    //A
    episode.direction(-1, 0);
  } else if (keyIsDown(83)) {
    //S
    episode.direction(0, 1);
  } else if (keyIsDown(68)) {
    //D
    episode.direction(1, 0);
  } else if (keyIsDown(90)) {
    //Z
    episode.direction(-1, 1);
  } else if (keyIsDown(88)) {
    //X
    episode.direction(1, 1);
  }
}

function keyReleased() {
  if (keyCode === 81) {
    //Q
    episode.direction(0, 0);
  } else if (keyCode === 87) {
    //W
    episode.direction(0, 0);
  } else if (keyCode === 69) {
    //E
    episode.direction(0, 0);
  } else if (keyCode === 65) {
    //A
    episode.direction(0, 0);
  } else if (keyCode === 83) {
    //S
    episode.direction(0, 0);
  } else if (keyCode === 68) {
    //D
    episode.direction(0, 0);
  } else if (keyCode === 90) {
    //Z
    episode.direction(0, 0);
  } else if (keyCode === 88) {
    //X
    episode.direction(0, 0);
  }
}
