function Ball (x,y) {
  this.x = x;
  this.y = y;
  this.dx = 2;
  this.dy = 2
  this.tick = function() {
    this.x += dx;
    this.y += dy;
  }
}
