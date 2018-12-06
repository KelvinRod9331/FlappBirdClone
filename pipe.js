function Pipe() {
  this.gap = random(3 * bird.r + 4, 8 * bird.r);
  this.top = random(0, height - 8 * bird.r);
  this.bottom = height - (this.top + this.gap);

  this.w = 30;
  this.x = width;
  this.speed = 2;
  this.highlight = false;
  this.frames = 0;

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
    fill(51);
    rect(this.x, this.top, this.w, this.gap);
    stroke(100);
    line(this.x, this.top, this.x, this.bottom);
  };

  this.missed = function(bird) {
    if (bird.y > this.top && bird.y < height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.frames += 1;
      } else {
        this.frames = 0;
      }
    } 
  };

  this.hit = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    } else if(bird.y){
      console.log({"Bottom + Height": this.bottom + height, "Bird Position": bird.y, "Btm": this.bottom})
    }

    this.highlight = false;
    return false;
  };

  this.update = function() {
    this.x -= this.speed;
    this.highlight = false;
  };

  this.offScreen = function() {
    if (this.x < -this.w) {
      return true;
    }
    return false;
  };

  return false;
}
