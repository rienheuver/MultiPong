function Player(game, max_p1, max_p2, width,height) {
  this.state = {b1: false, b2: false};
  this.game = game;
  this.paddle = new Paddle(max_p1, max_p2, width,height, this);

  this.handle_input = function (input) {
    b1,b2 = input;
    state.b1 = b1;
    state.b2 = b2;
  };

  this.get_paddle = function () {
    return this.paddle;
  };

  this.get_state = function () {
    return this.state;
  };

  this.tick = function() {
    this.paddle.tick();
  };

}
