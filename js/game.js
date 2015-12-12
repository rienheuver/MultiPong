function Game() {

  this.renderer;
  this.stage;
  this.loader;

  this.ball = new Ball(150, 150);
  this.player_count = 3; //TODO Dynamisch aantal

  this.field = new Field(800, 600, this.player_count);

  this.views = [];

  this.players = [];

  for (var i = 0; i < 4; i++) {
    this.players.push(new Player(this, 0, 0, 0, 0));
  }

  this.create_field = function () {
    this.field = new Field(300, 300);

    //TODO het aantal spelers over een cirkel punten zetten, en tussen de players muren plaatsen
  };

  this.is_game_over = function () {
    for (var i in this.players) {
      player = players[i];
      paddle = player.get_paddle();
      x1, y1 = paddle.p1;
      x2, y2 = paddle.p2;
      // TODO: de rest van de functie. Controleren of de bal achter een paddle ligt.
    }
  };

  this.tick = function () {
    this.ball.tick();
    for (var i in this.players) {
      player = players[i];
      player.tick();
    }

    //TODO Controleren op een collission en de bal terugstuiteren.
  };

  this.start = function () {
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: this.preload.bind(this), create: this.create.bind(this), update: this.update.bind(this)});

  };

  this.preload = function () {
    //TODO: load assets (images, sprites, sounds)
    this.game.load.image('world_background', 'assets/background.png');
  }

  this.create = function () {
    //TODO: create views
    new FieldView(this.game, this.field);
    new BallView(this.game, this.ball);
  }

  this.update = function () {
    //TODO: update models
    this.ball.tick();
  }
}
