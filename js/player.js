function Player(game) {
  this.game = game;
  this.paddle = new Paddle({x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 3}, {x: 4, y: 4});

  this.handle_input = function (input) {
    game.handle_input(input);
  };

  this.get_paddle = function () {
    return this.paddle;
  };

}
