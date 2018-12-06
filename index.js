var bird;
var pipes = [];


function NewGame(){

  this.setup = function() {
    createCanvas(1000, 600);
    bird = new Bird();
    pipes.push(new Pipe());
  }
  
  this.draw = function() {
    background(0);
  
    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
      pipes[i].missed(bird);
   
      if (pipes[i].frames === 14) {
        bird.scored();
      }
  
      if (pipes[i].hit(bird)) {
        this.GameOver()
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
  
  this.keyPressed = function() {
    if (key === " ") {
      bird.up();
    }
  }
  
  
  this.GameOver = function(){
    return   alert("GAME OVER!")
  }
}

NewGame()













