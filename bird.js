function Bird() {
  this.y = height / 2;
  this.x = 300;
  this.r = (24 * height) / 600;
  this.gravity = this.speed > 7 ? 0.8 : 0.6;
  this.lift = -15;
  this.score = 0;
  this.velocity = 0;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };

  this.up = function() {
    this.velocity += this.lift;
  };

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };

  this.scored = function() {
    this.score += 1;

    let p = document.getElementById("score");

    p.innerHTML = this.score;
  };
}
