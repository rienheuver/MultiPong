function Game () {
  this.ball = new Ball(0,0);
  this.field = new Field(300,300);
  this.players = []
  for(var i = 0; i < 4; i++) {
    this.players.push(new Player());
  }
  this.is_game_over = function() {

  };
  this.tick = function() {
    this.ball.tick();
  };
}
