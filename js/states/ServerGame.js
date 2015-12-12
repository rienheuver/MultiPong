MultiPong.ServerGame = function (game) {
};

MultiPong.ServerGame.prototype = {

  preload: function () {
    this.load.image('dude', 'assets/pangball.png');
    this.load.image('ball', 'assets/pangball.png');
  },

  create: function () {

    this.physics.startSystem(Phaser.Physics.ARCADE);

    cursors = this.input.keyboard.createCursorKeys();

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    ball = this.add.sprite(400, 200, 'ball');

    knocker = this.add.sprite(400, 200, 'dude');

    this.physics.enable([knocker,ball], Phaser.Physics.ARCADE);

    knocker.body.immovable = true;

    //  This gets it moving
    ball.body.velocity.setTo(200, 200);

    //  This makes the game world bounce-able
    ball.body.collideWorldBounds = true;

    //  This sets the image bounce energy for the horizontal
    //  and vertical vectors (as an x,y point). "1" is 100% energy return
    ball.body.bounce.setTo(1, 1);
  },

  update: function () {
    this.physics.arcade.collide(knocker, ball);

    if (cursors.up.isDown)
    {
      knocker.body.velocity.y = -300;
    }
    else if (cursors.down.isDown)
    {
      knocker.body.velocity.y =  300;
    }
    else if (cursors.left.isDown)
    {
      knocker.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
      knocker.body.velocity.x = 300;
    }
    else
    {
      knocker.body.velocity.setTo(0, 0);
    }
  }
}
