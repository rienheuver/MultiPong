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
    this.load.image('dude', 'assets/pangball.png');
    this.load.image('ball', 'assets/pangball.png');
  },

  create: function () {

    /*

    this.physics.startSystem(Phaser.Physics.ARCADE);

    shapeGr = this.add.graphics();
    shapeGr.lineStyle(5, 0x00ff00, 1);
    shapeGr.moveTo(110, 100);
    shapeGr.lineTo(110, 0);

    // Remove the 10 pixel padding added to graphics by default
    shapeGr.boundsPadding = 0;

    // Create an empty sprite as a container
    shapeSprite = this.add.sprite(200, 200);

    // Add the graphics to the sprite as a child
    shapeSprite.addChild(shapeGr);
    shapeSprite.enableBody = true;
    shapeSprite.physicsBodyType = Phaser.Physics.ARCADE;
    // this.physics.enable(shapeSprite, Phaser.Physics.NINJA);

    // Overlap should now work
    //this.physics.arcade.overlap(ball.body, shapeSprite, gotHit, null, this);

    */

    cursors = this.input.keyboard.createCursorKeys();

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    ball = this.add.sprite(400, 200, 'ball');

    knocker = this.add.sprite(400, 200, 'dude');

    this.physics.enable([knocker, ball], Phaser.Physics.ARCADE);

    knocker.body.immovable = false;

    //  This gets it moving
    ball.body.velocity.setTo(200, 200);

    //  This makes the game world bounce-able
    ball.body.collideWorldBounds = true;

    //  This sets the image bounce energy for the horizontal
    //  and vertical vectors (as an x,y point). "1" is 100% energy return
    ball.body.bounce.setTo(1, 1);

    var width = 800;
    var height = 600;

    var length = players.length;
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
    }
  },

  update: function () {
    this.physics.arcade.collide(knocker, ball);
    this.physics.arcade.collide(knocker, shapeSprite);
    this.physics.arcade.collide(ball, shapeSprite);

    if (cursors.up.isDown) {
      knocker.body.velocity.y = -500;
    }
    else if (cursors.down.isDown) {
      knocker.body.velocity.y = 500;
    }
    else {
      knocker.body.velocity.y = 0;
    }
    if (cursors.left.isDown) {
      knocker.body.velocity.x = -500;
    }
    else if (cursors.right.isDown) {
      knocker.body.velocity.x = 500;
    }
    else {
      knocker.body.velocity.x = 0;
    }

    for(var p in players) {
      player = players[p];

      paddle = player.get_paddle;
      state = player.get_state;

      paddle.tick();

      // TODO Redraw paddle;
    }
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
