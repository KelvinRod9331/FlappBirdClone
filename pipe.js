function Pipe() {
  this.gap = random(6 * bird.r + 4, 8 * bird.r);
  this.top = random(0, height - 8 * bird.r);
  this.bottom = height - (this.top + this.gap);

  console.log("Gap ", this.gap)
  this.w = 20;
  this.x = width;
  this.speed = 2;
  this.highlight = false;

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.hit = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
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
}
