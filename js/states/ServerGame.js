MultiPong.ServerGame = function (game) {
  this.players = [];
  this.connection;
  this.paddle_array = [];
};

MultiPong.ServerGame.prototype = {

  init: function(players, connection) {
    console.log(players);
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

    this.physics.p2.updateBoundsCollisionGroup();

    var paddles = this.add.group();
    paddles.enableBody = true;
    paddles.physicsBodyType = Phaser.Physics.P2JS;

    /*for (var i=0;i<4;i++)
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
      paddle.body.velocity.y = 100;
      paddle.body.velocity.x = 100;
      paddle.body.debug = true;
    }*/

    var walls = this.add.group();
    walls.enableBody = true;
    walls.physicsBodyType = Phaser.Physics.P2JS;

    /*for (var i=0;i<4;i++)
    {
      var wall = walls.create(200+50*i,200,'ball');
      wall.body.setRectangle(40,40);
      wall.body.damping = 0;
      wall.body.debug = true;
      wall.body.setCollisionGroup(wallsCollisionGroup);
      wall.body.collides([paddlesCollisionGroup, wallsCollisionGroup]);
      wall.body.rotateLeft(50+100*i);
      wall.body.thrust(200000);
    }*/

    var width = 400;
    var height = 400;

    //var length = this.players.length;
    var length = 4;//this.players.length;
    var point = 0;

    var x;
    var y;

    var next_x;
    var next_y;

    var max_p1 = {};
    var max_p2 = {};

    var paddle_width;
    var paddle_height = 5;

    for(var i=0;i<4;i++)//for (p in this.players)
    {
      if (i === 0)
        this.check_input(this.players[i]);

      // create paddle
      x = Math.sin(point/(length*2) * Math.PI * 2) * width/2 + width/2;
      y = Math.cos(point/(length*2) * Math.PI * 2) * height/2 + height/2;

      next_x = Math.sin((point+1)/(length*2) * Math.PI * 2) * width/2 + width/2;
      next_y = Math.cos((point+1)/(length*2) * Math.PI * 2) * height/2 + height/2;

      max_p1.x = x;
      max_p1.y = y;
      max_p2.x = next_x;
      max_p2.y = next_y;

      paddle_width = Math.sqrt( Math.pow(x-next_x,2) + Math.pow(y-next_y,2) ) / 4;

      var paddle_model = new Paddle(max_p1, max_p2, paddle_width, paddle_height, null);// this.players[p]);
      this.players[0].set_paddle(paddle_model);

      // TODO Create shape of the line;

      var paddle = paddles.create(paddle_model.middle.x,paddle_model.middle.y);
      this.paddle_array.push(paddle);
      /*var shapeGr = this.add.graphics();
      shapeGr.lineStyle(paddle_height, 0x1d428a, 1);
      shapeGr.moveTo(0,0);
      shapeGr.lineTo(paddle_model.p2.x,paddle_model.p2.y);
      shapeGr.boundsPadding = 0;
      paddle.addChild(shapeGr);*/
      paddle.body.addRectangle(paddle_width,paddle_height,0,0);
      paddle.body.adjustCenterOfMass();
      paddle.body.removeShape(paddle.body.data.shapes[0]);
      paddle.body.damping = 0;
      paddle.body.kinematic = true;
      paddle.body.debug = true;
      paddle.body.setCollisionGroup(paddlesCollisionGroup);
      paddle.body.collides([paddlesCollisionGroup, wallsCollisionGroup]);
      paddle.body.rotation = paddle_model.get_angle();

      point++;
      // create paddle

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

      // TODO Create shape of the wall;
      var wall = walls.create(paddle_model.middle.x,paddle_model.middle.y);
      /*var shapeGr = this.add.graphics();
      shapeGr.lineStyle(paddle_height, 0x1d428a, 1);
      shapeGr.moveTo(paddle_model.p1.x,paddle_model.p1.y);
      shapeGr.lineTo(paddle_model.p2.x,paddle_model.p2.y);
      shapeGr.boundsPadding = 0;
      wall.addChild(shapeGr);*/
      wall.body.addRectangle(paddle_width,paddle_height,0,0);
      wall.body.adjustCenterOfMass();
      wall.body.removeShape(wall.body.data.shapes[0]);
      wall.body.damping = 0;
      wall.body.kinematic = true;
      wall.body.debug = true;
      wall.body.setCollisionGroup(paddlesCollisionGroup);
      wall.body.collides([paddlesCollisionGroup, wallsCollisionGroup]);
      wall.body.rotation = paddle_model.get_angle();

      point++;
    }
    this.ball = this.add.sprite(this.world.centerX, this.world.centerY, 'ball');
    this.physics.arcade.enable(this.ball);
    //this.ball.setCollisionGroup(paddlesCollisionGroup);
    this.ball.body.velocity.x = -35;
    this.ball.body.velocity.y = -30;
    this.ball.anchor.setTo(0.5, 0.5);
  },

  update: function () {
    for(p in players) {
      player = players[p];

      paddle = player.get_paddle;
      state = player.get_state;

      paddle.tick(paddle_array[p]);

      // TODO Redraw paddle;
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
      console.log("Received "+data+" from "+player.name);

    });
  },

  is_game_over: function() {
    var circle = new Phaser.Circle(this.world.centerX, this.world.centerY, this.world.centerY*2);

    var circleDraw = this.add.graphics(0,0);
    circleDraw.lineStyle(4, 0xff00ff, 1);
    circleDraw.drawCircle(circle.x, circle.y, circle.diameter);

    var dist = circle.distance(this.ball, 1);
    if(dist > circle.diameter/2) {
      console.log('You are dead');
      this.ball.body.velocity.x = 0;
      this.ball.body.velocity.y = 0;
      this.game_over = true;
    }
  }
}
