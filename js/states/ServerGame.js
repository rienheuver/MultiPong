MultiPong.ServerGame = function (game) {
  this.players;
  this.connection;
  this.paddles;
};

MultiPong.ServerGame.prototype = {

  init: function(players, connection) {
    this.players = players;
    this.connection = connection;
    this.paddles = [];
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

    this.physics.p2.updateBoundsCollisionGroup();

    var paddles = this.add.group();
    paddles.enableBody = true;
    paddles.physicsBodyType = Phaser.Physics.P2JS;

    for (var i=0;i<4;i++)
    {
      var paddle = paddles.create(80*(i+3),80*(i+3));
      var shapeGr = this.add.graphics();
      shapeGr.lineStyle(5, 0x1d428a, 1);
      shapeGr.moveTo(0,0);
      shapeGr.lineTo(100,0);
      shapeGr.boundsPadding = 0;
      paddle.addChild(shapeGr);
      paddle.body.addRectangle(100,5,75,2);
      paddle.body.adjustCenterOfMass();
      paddle.body.removeShape(paddle.body.data.shapes[0]);
      paddle.body.damping = 0;
      paddle.body.kinematic = true;
      paddle.body.debug = true;
      paddle.body.setCollisionGroup(paddlesCollisionGroup);
      paddle.body.collides([paddlesCollisionGroup, wallsCollisionGroup]);
      paddle.body.rotation = 36;
      paddle.body.moveLeft(50);
    }

    var walls = this.add.group();
    walls.enableBody = true;
    walls.physicsBodyType = Phaser.Physics.P2JS;

    for (var i=0;i<4;i++)
    {
      var wall = walls.create(200+50*i,200,'ball');
      wall.body.setRectangle(40,40);
      wall.body.damping = 0;
      wall.body.debug = true;
      wall.body.setCollisionGroup(wallsCollisionGroup);
      wall.body.collides([paddlesCollisionGroup, wallsCollisionGroup]);
      wall.body.rotateLeft(50+100*i);
      wall.body.thrust(200000);
    }

    /*var width = 800;
    var height = 600;

    var length = this.players.length;
    var point = 0;

    var x;
    var y;

    var next_x;
    var next_y;

    var max_p1;
    var max_p2;

    var paddle_width;
    var paddle_height = 20;

    for (p in this.players)
    {
      this.check_input(this.players[p]);

      // create wall
      x = Math.sin(point/(length*2) * Math.pi * 2);
      y = Math.cos(point/(length*2) * Math.pi * 2);

      next_x = Math.sin((point+1)/(length*2) * Math.pi * 2);
      next_y = Math.cos((point+1)/(length*2) * Math.pi * 2);

      max_p1 = {x,y};
      max_p2 = {next_x, next_y};

      paddle_width = Math.sqrt( Math.pow(x-next_x,2), Math.pow(y-next_y,2) ) / 4;

      paddle = new Paddle(max_p1, max_p2, paddle_width, paddle_height, this.players[p]);
      this.players[p].set_paddle(paddle);

      // TODO Create shape of the line;

      point++;
      // create paddle

      x = Math.sin(point/(length*2) * Math.pi * 2);
      y = Math.cos(point/(length*2) * Math.pi * 2);

      next_x = Math.sin((point+1)/(length*2) * Math.pi * 2);
      next_y = Math.cos((point+1)/(length*2) * Math.pi * 2);

      max_p1 = {x,y};
      max_p2 = {next_x, next_y};

      paddle_width = Math.sqrt( Math.pow(x-next_x,2), Math.pow(y-next_y,2) ) / 4;

      paddle = new Paddle(max_p1, max_p2, paddle_width, paddle_height, null);

      // TODO Create shape of the wall;

      point++;
    }*/
  },

  update: function () {
    /*for(var p in players) {
      player = players[p];

      paddle = player.get_paddle;
      state = player.get_state;

      paddle.tick();

      // TODO Redraw paddle;
    }*/
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
      console.log("Received "+data+" from "+player.name);

    });
  }
}
