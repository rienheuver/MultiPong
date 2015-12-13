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
    var links = this.add.button(this.world.centerX-(this.world.centerX/2+100),this.world.centerY,'button_left',this.left_click,this,1,2);
    links.scale.setTo(2,2);
    var rechts = this.add.button(this.world.centerX+(this.world.centerX/2-100),this.world.centerY,'button_right',this.right_click,this,1,2);
    rechts.scale.setTo(2,2);
  },

  left_click: function()
  {
    this.connection.send("10");
  },

  right_click: function()
  {
    this.connection.send("01");
  }
}
