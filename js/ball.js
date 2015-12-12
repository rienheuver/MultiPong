function Ball(x, y, bounderies) {
  this.x = x;
  this.y = y;
  this.bounderies = bounderies;

  this.dx = 2;
  this.dy = 2;

  this.tick = function () {
    this.x += this.dx;
    this.y += this.dy;
  }
}
