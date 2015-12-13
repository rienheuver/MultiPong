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
    var links = this.add.button(10,10,'knopje',this.left_click,this);
    var rechts = this.add.button(400,10,'knopje',this.right_click,this);
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
