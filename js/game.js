function Game () {

  this.stage = PIXI.

  this.ball = new Ball(0,0);
  this.ball = new Ball(150,150);
  this.field = new Field(300,300);
  this.players = []
  for(var i = 0; i < 4; i++) {
    this.players.push(new Player(this));
  }
  this.is_game_over = function() {
    for(let player in this.players) {
      padle = player.get_padle();
      {x1,y1} = padle.p1;
    }
  };
  this.tick = function() {
    this.ball.tick();
  };

}
