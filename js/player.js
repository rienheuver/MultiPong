function Player(game, max_p1, max_p2, width, height, connection, name) {
  this.state = {b1: false, b2: false};
  this.game = game;
  this.paddle = new Paddle(max_p1, max_p2, width, height, this);
  this.ready = false;
  this.connection = connection;
  this.name = name;

  this.handle_input = function (input) {
    state.b1 = input.b1;
    state.b2 = input.b2;
  };

  this.get_paddle = function () {
    return this.paddle;
  };

  this.get_state = function () {
    return this.state;
  };

  this.tick = function () {
    this.paddle.tick();
  };

}
