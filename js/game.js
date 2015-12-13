function Game() {
  this.game = new Phaser.Game(800, 600, Phaser.AUTO);
}
Game.prototype.is_game_over = function () {
  for (var i in this.players) {
    player = players[i];
    paddle = player.get_paddle();
    x1, y1 = paddle.p1;
    x2, y2 = paddle.p2;
  }
};

Game.prototype.tick = function () {
  this.ball.tick();
  for (var i in this.players) {
    player = players[i];
    player.tick();
  }

  //TODO Controleren op een collission en de bal terugstuiteren.
};

Game.prototype.start = function () {
  this.game.state.add('Boot', MultiPong.Boot);
  this.game.state.add('MainMenu', MultiPong.MainMenu);
  this.game.state.add('ServerWaiting', MultiPong.ServerWaiting);
  this.game.state.add('ClientWaiting', MultiPong.ClientWaiting);
  this.game.state.add('ServerGame', MultiPong.ServerGame);
  this.game.state.add('ClientGame', MultiPong.ClientGame);


  this.game.state.start('Boot');
};
