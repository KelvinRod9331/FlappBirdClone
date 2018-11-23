function Pipe() {
  this.top = (Math.random() * height) / 2;
  this.bottom = Math.random() * height;

  this.w = 20;
  this.x = width;
  this.speed = 2;
  this.highlight = false

  this.show = function() {
    fill(255);
    if(this.highlight){
        fill(255, 0, 0)
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.hit = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true
        return true;
      }
    }

    return false
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offScreen = function() {
    if (this.x < -this.w) {
      return true;
    }

    return false;
  };
}
