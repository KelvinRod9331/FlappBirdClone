var bird;
var pipes = [];
var points = 0;
var gameOver = false

function setup() {
  createCanvas(1000, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);

  for (let i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    pipes[i].missed(bird);
 
    if (pipes[i].frames === 14) {
      bird.scored();
    }

    if (pipes[i].hit(bird)) {
      gameOver = true
    }

    if (pipes[i].offScreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.show();
  bird.update();

  if (frameCount % 250 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key === " ") {
    bird.up();
  }
}


if(gameOver){
  alert("GAME OVER!")
} 

