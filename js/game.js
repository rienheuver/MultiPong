function Game() {

  this.renderer;
  this.stage;
  this.loader;

  this.ball = new Ball(150, 150);
  this.field = new Field(800, 600);

  this.views = [];

  this.players = [];

  for (var i = 0; i < 4; i++) {
    this.players.push(new Player(this, 0, 0, 0, 0));
  }

  this.is_game_over = function () {
    for (var i in this.players) {
      player = players[i];
      paddle = player.get_paddle();
      x1, y1 = paddle.p1;
      x2, y2 = paddle.p2;
      // TODO: de rest van de functie
    }
  };

  this.tick = function () {
    this.ball.tick();
    for (var i in this.players) {
      player = players[i];
      player.tick();
    }
  };

  this.start = function () {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  }

  function preload() {
    //TODO: load assets (images, sprites, sounds)
    this.game.load.image('world_background', 'assets/background.png');
  }

  function create() {
    //TODO: create views
    new FieldView(this.game, this.field);
  }

  function update() {
    //TODO: update models
  }
}
