MultiPong.ClientGame = function (game) {
  this.connection;
};

MultiPong.ClientGame.prototype =
{

  init: function(connection)
  {
    this.connection = connection;
  },

  create: function ()
  {
    var links = this.add.button(this.world.centerX-120,this.world.centerY,'button_left',this.left_click,this,1,2);
    var rechts = this.add.button(this.world.centerX+20,this.world.centerY,'button_right',this.right_click,this,1,2);
  },

  left_click: function()
  {
    this.connection.send("left");
  },

  right_click: function()
  {
    this.connection.send("right");
  }
}
