function Player (game) {
  this.game = game;
  this.padle = new Paddle({1,1},{2,2},{3,3},{4,4});
  this.handle_input = function(input) {
    game.handle_input(input);
  };
}
