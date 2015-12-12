function Game() {

  this.renderer;
  this.stage;
  this.loader;

  this.ball = new Ball(150, 150);
  this.field = new Field(300, 300);

  this.views = [];

  this.players = [];

  for (var i = 0; i < 4; i++) {
    this.players.push(new Player(this));
  }

  this.is_game_over = function () {
    for (var i in this.players) {
      player = players[i];
      paddle = player.get_paddle();
      x1, y1 = paddle.p1;
      x2, y2 = paddle.p2;
      var func = function (x) {
        var a = (x2 - x1) / Math.abs(y2 - y1);
        var b = y1 - a * x1;
        return a * x + b;
      };
    }
  };

  this.tick = function () {
    this.ball.tick();
  };

  this.start = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.renderer = new PIXI.autoDetectRenderer(width, height);
    this.stage = new PIXI.Container(0x66FF99);

    this.renderer.resize = true;
    this.renderer.view.style.display = "block";
    this.renderer.view.style.width = "100%"
    this.renderer.view.style.height = "100%"

    this.loader = PIXI.loader;
    this.create_views();
    this.loader.once('complete', this.animate.bind(this));

    document.body.appendChild(this.renderer.view);


  };

  this.animate = function () {
    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
  };

  this.create_views = function() {
    this.field_fiew = new FieldView(this.stage, this.loader, this.field);
  }
}
