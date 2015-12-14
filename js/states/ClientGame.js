MultiPong.ClientGame = function (game) {
  this.connection;
  this.name;
};

MultiPong.ClientGame.prototype =
{

  init: function(connection, name)
  {
    this.name = name;
    this.connection = connection;
  },

  create: function ()
  {
    var links = this.add.button(this.world.centerX-(this.world.centerX/2+100),this.world.centerY,'button_left',this.left_click,this,1,2);
    links.scale.setTo(2,2);
    var rechts = this.add.button(this.world.centerX+(this.world.centerX/2-100),this.world.centerY,'button_right',this.right_click,this,1,2);
    rechts.scale.setTo(2,2);
    var text_name = this.add.text(this.world.centerX-100,this.world.centerY-250,this.name,{fill: '#fff', font: "bold 56pt Arial"});
    console.log(text_name);
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
