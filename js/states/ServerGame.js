MultiPong.ServerGame = function (game) {
  this.players = [];
  this.connection;
  this.paddle_array = [];
  this.constant_distance = 100;
};

MultiPong.ServerGame.prototype = {

  init: function(players, connection) {
    this.players = players;
    this.connection = connection;
    this.game_over = false;
  },

  preload: function () {
    this.load.image('ball', 'assets/pangball.png');
  },

  create: function () {
    this.physics.startSystem(Phaser.Physics.P2JS);
    this.physics.p2.setImpactEvents(true);
    this.physics.p2.defaultRestitution = 1;
    this.physics.p2.restitution = 1;
    this.physics.p2.applyDamping = false;
    this.physics.p2.friction = 0;

    var paddlesCollisionGroup = this.physics.p2.createCollisionGroup();
    var wallsCollisionGroup = this.physics.p2.createCollisionGroup();
    var ballCollisionGroup = this.physics.p2.createCollisionGroup();

    this.physics.p2.updateBoundsCollisionGroup();

    var paddles = this.add.group();
    paddles.enableBody = true;
    paddles.physicsBodyType = Phaser.Physics.P2JS;

    this.ball = paddles.create(300, 300, 'ball');
    this.ball.body.setCircle(16);
    this.ball.body.setCollisionGroup(ballCollisionGroup);
    this.ball.body.collides([ballCollisionGroup, paddlesCollisionGroup, wallsCollisionGroup]);
    this.ball.body.debug = true;
    this.ball.body.velocity.x = -110;
    this.ball.body.velocity.y = -100;

    var walls = this.add.group();
    walls.enableBody = true;
    walls.physicsBodyType = Phaser.Physics.P2JS;

    var width = 400;
    var height = 400;

    var length = this.players.length;
    var point = 0;

    var x;
    var y;

    var next_x;
    var next_y;

    var max_p1 = {};
    var max_p2 = {};

    var paddle_width;
    var paddle_height = 5;

    for (p in this.players)
    {
      // create paddle
      x = Math.sin(point/(length*2) * Math.PI * 2) * width/2 + width/2;
      y = Math.cos(point/(length*2) * Math.PI * 2) * height/2 + height/2;

      next_x = Math.sin((point+1)/(length*2) * Math.PI * 2) * width/2 + width/2;
      next_y = Math.cos((point+1)/(length*2) * Math.PI * 2) * height/2 + height/2;

      max_p1.x = x;
      max_p1.y = y;
      max_p2.x = next_x;
      max_p2.y = next_y;

      paddle_width = Math.sqrt( Math.pow(x-next_x,2) + Math.pow(y-next_y,2) ) / length;

      var paddle_model = new Paddle(max_p1, max_p2, paddle_width, paddle_height, this.players[p]);
      this.players[p].set_paddle(paddle_model);

      var paddle = paddles.create(paddle_model.middle.x+this.constant_distance,paddle_model.middle.y+this.constant_distance);
      this.paddle_array.push(paddle);
      paddle.body.addRectangle(paddle_width,paddle_height,0,0);
      paddle.body.adjustCenterOfMass();
      paddle.body.removeShape(paddle.body.data.shapes[0]);
      paddle.body.damping = 0;
      paddle.body.kinematic = true;
      paddle.body.debug = true;
      paddle.body.setCollisionGroup(paddlesCollisionGroup);
      paddle.body.collides([ballCollisionGroup, paddlesCollisionGroup, wallsCollisionGroup]);
      paddle.body.rotation = paddle_model.get_angle();

      point++;

      x = Math.sin(point/(length*2) * Math.PI * 2) * width/2 + width/2;
      y = Math.cos(point/(length*2) * Math.PI * 2) * height/2 + height/2;

      next_x = Math.sin((point+1)/(length*2) * Math.PI * 2) * width/2 + width/2;
      next_y = Math.cos((point+1)/(length*2) * Math.PI * 2) * height/2 + height/2;

      max_p1.x = x;
      max_p1.y = y;
      max_p2.x = next_x;
      max_p2.y = next_y;

      paddle_width = Math.sqrt( Math.pow(x-next_x,2) + Math.pow(y-next_y,2) );

      paddle_model = new Paddle(max_p1, max_p2, paddle_width, paddle_height, null);

      var wall = walls.create(paddle_model.middle.x+this.constant_distance,paddle_model.middle.y+this.constant_distance);

      wall.body.addRectangle(paddle_width,paddle_height,0,0);
      wall.body.adjustCenterOfMass();
      wall.body.removeShape(wall.body.data.shapes[0]);
      wall.body.damping = 0;
      wall.body.kinematic = true;
      wall.body.debug = true;
      wall.body.setCollisionGroup(wallsCollisionGroup);
      wall.body.collides([ballCollisionGroup, paddlesCollisionGroup, wallsCollisionGroup]);
      wall.body.rotation = paddle_model.get_angle();

      point++;

      this.check_input(this.players[p]);
    }
  },

  update: function () {
    for(p in this.players) {
      player = this.players[p];
      paddle = player.get_paddle();
      state = player.get_state();
      paddle.tick(this.paddle_array[p]);
    }
    if(!this.game_over)
      this.is_game_over();
  },

  check_input: function(player) {
    player.connection.on("data", function(data)
    {
      var state = {b1: false, b2: false};
      if(data[0] == '1') {
        state.b1 = true;
      }
      if(data[1] == '1') {
        state.b2 = true;
      }
      player.handle_input(state);

    });
  },

  is_game_over: function() {
    var circle = new Phaser.Circle(300, 300, 400);

    var dist = circle.distance(this.ball, 1);
    if(dist > circle.diameter/2) {
      console.log('You are dead');
      this.ball.body.velocity.x = 0;
      this.ball.body.velocity.y = 0;
      this.game_over = true;
    }
  }
}
