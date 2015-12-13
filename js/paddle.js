function Paddle(max_p1, max_p2, width, height, player) {
  this.max_p1 = max_p1;
  this.max_p2 = max_p2;
  this.width = width;
  this.height = height;
  this.player = player;

  this.p1 = {x: 0, y: 0};
  this.p2 = {x: 0, y: 0};

  this.middle = {x: 0, y: 0};
  this.middle.x = Math.abs(this.max_p1.x - this.max_p2.x) / 2 + Math.min(this.max_p1.x, this.max_p2.x);
  this.middle.y = Math.abs(this.max_p1.y - this.max_p2.y) / 2 + Math.min(this.max_p1.y, this.max_p2.y);

  this.angle = Math.atan2(this.max_p2.y - this.max_p1.y, this.max_p2.x - this.max_p1.x);

  this.set_positions(this.middle);

  this.position = 0;

  this.tick = function (body) {
    b1, b2 = this.player.get_state();
    if (!((b1 == false && b2 == false) || (b1 == true && b2 == true))) {
      if(b1 == false) {
        body.velocity.x = 0;
        body.velocity.y = 0;
      }
      else{
        body.velocity.x = 10 * Math.sin(this.angle);
        body.velocity.y = 10 * Math.cos(this.angle);
      }

      if(b2 == false) {
        body.velocity.x = 0;
        body.velocity.y = 0;
      }
      else{
        body.velocity.x = 10 * Math.sin(this.angle);
        body.velocity.y = 10 * Math.cos(this.angle);
      }
    }



    if (!((b1 == false && b2 == false) || (b1 == true && b2 == true))) {
      //TODO controle op welke kant de Paddle op moet, en deze dan ook deze kant op verplaatsen. Let hier op de angle.
      if(b1 == true) {
        // move right
        this.position += 10;
        if(this.position > distance(max_p1.x - max_p2.x, max_p1.y - max_p2.y) / 2) {
          this.position = distance(max_p1.x - max_p2.x, max_p1.y - max_p2.y) / 2;
        }
      }
      else if(b2 == true) {
        // move left
        this.position -= 10;
        if(this.position < distance(max_p1.x - max_p2.x, max_p1.y - max_p2.y) / 2) {
          this.position = -distance(max_p1.x - max_p2.x, max_p1.y - max_p2.y) / 2;
        }
      }
      var angle = this.angle;
      var new_middle = {x: 0, y:0};
      new_middle.x = this.middle.x + position * Math.sin(angle);
      new_middle.y = this.middle.y + position * Math.cos(angle);

      set_positions(new_middle);
    }
  };
}

var distance = function(a,b) {
  return Math.sqrt(a*a, b*b);
}

Paddle.prototype.get_angle = function () {
  return this.angle;
}

Paddle.prototype.set_positions = function (middle) {
  this.p1.x = middle.x - this.width / 2;
  this.p1.y = middle.y - this.height / 2;
  this.p2.x = middle.x + this.width / 2;
  this.p2.y = middle.y + this.height / 2;
};
