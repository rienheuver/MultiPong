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
    var left = this.add.button(this.world.centerX-(this.world.centerX/2+100),this.world.centerY,'button_left',null,this,1,2);
    left.scale.setTo(2,2);
    left.onInputDown.add(this.left_down,this);
    left.onInputUp.add(this.left_up,this);
    var right = this.add.button(this.world.centerX+(this.world.centerX/2-100),this.world.centerY,'button_right',null,this,1,2);
    right.scale.setTo(2,2);
    right.onInputDown.add(this.right_down,this);
    right.onInputUp.add(this.right_up,this);
    var text_name = this.add.text(this.world.centerX-100,this.world.centerY-250,this.name,{fill: '#fff', font: "bold 56pt Arial"});
    console.log(text_name);
  },

  left_down: function()
  {
    this.connection.send("10");
  },
  left_up: function()
  {
    this.connection.send("00");
  },

  right_down: function()
  {
    this.connection.send("01");
  },
  right_up: function()
  {
    this.connection.send("00");
  }
}
