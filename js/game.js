function Game () {
  this.ball = new Ball(150,150);
  this.field = new Field(300,300);
  this.players = []
  for(var i = 0; i < 4; i++) {
    this.players.push(new Player(this));
  }
  this.is_game_over = function() {
    for(var i in this.players) {
      player = players[i];
      paddle = player.get_paddle();
      x1,y1 = paddle.p1;
      x2,y2 = paddle.p2;
      var func = function(x) {
        var a = (x2-x1) / Math.abs(y2-y1);
        var b = y1 - a * x1;
        return a * x + b;
      };
    }
  };
  this.tick = function() {
    this.ball.tick();
  };

}
