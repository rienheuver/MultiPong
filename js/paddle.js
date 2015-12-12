function Paddle(max_p1, max_p2, width, height, player) {
  this.max_p1 = p1;
  this.max_p2 = p2;
  this.width = width;
  this.height = height;
  this.player = player;

  this.p1 = {x: 0, y: 0};
  this.p2 = {x: 0, y: 0};
  this.p3 = {x: 0, y: 0};
  this.p4 = {x: 0, y: 0};

  var middle = {x: 0, y: 0};
  middle.x = Math.abs(max_p1.x - max_p2.x)/2 + Math.min(max_p1.x, max_p2.x);
  middle.y = Math.abs(max_p1.y - max_p2.y)/2 + Math.min(max_p1.y, max_p2.y);

  this.set_positions(middle);

  this.set_positions = function(middle) {
    var angle = Math.atan2( this.max_p2.y - this.max_p1.y , this.max_p2.x - this.max_p1.x);

    this.p1.x = middle.x - this.width * Math.sin(angle);
    this.p1.y = middle.y + this.height * Math.sin(angle);
    this.p2.x = middle.x + this.width * Math.sin(angle);
    this.p2.y = middle.y + this.height * Math.sin(angle);
    this.p3.x = middle.x + this.width * Math.sin(angle);
    this.p3.y = middle.y - this.height * Math.sin(angle);
    this.p4.x = middle.x - this.width * Math.sin(angle);
    this.p4.y = middle.y - this.height * Math.sin(angle);

  };

  this.tick = function() {

  };

}
