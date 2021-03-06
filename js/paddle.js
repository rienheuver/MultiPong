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
  console.log(this.angle);

  this.set_positions(this.middle);

  this.position = 0;

  console.log(this.width);

  this.tick = function (paddle) {
    state = this.player.get_state();
    b1 = state.b1;
    b2 = state.b2;

    if (!((b1 == false && b2 == false) || (b1 == true && b2 == true))) {
      temp = 0;
      if(!b1) {
        paddle.body.velocity.x = -50 * Math.cos(this.angle);
        paddle.body.velocity.y = -50 * Math.sin(this.angle);
        temp += 1;
      }
      else{
        paddle.body.velocity.x = 50 * Math.cos(this.angle);
        paddle.body.velocity.y = 50 * Math.sin(this.angle);
        temp -= 1;
      }
      if(this.position > 1.75*this.width || this.position < -1.75*this.width) {
        paddle.body.velocity.x = 0;
        paddle.body.velocity.y = 0;
        this.position -= temp;
      }
      this.position += temp;
    }
    else
    {
      paddle.body.velocity.x = paddle.body.velocity.y = 0;
    }
  };
}

Paddle.prototype = {
  get_angle: function () {
    return this.angle;
  },

  set_positions: function (middle) {
    this.p1.x = middle.x - this.width / 2;
    this.p1.y = middle.y - this.height / 2;
    this.p2.x = middle.x + this.width / 2;
    this.p2.y = middle.y + this.height / 2;
  }
};
