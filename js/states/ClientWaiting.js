MultiPong.ClientWaiting = function (game) {
  var connection_id_input = null;
  var enter_text;
  var button_connect;
};

MultiPong.ClientWaiting.prototype = {

  create: function () {
    this.connection_id_input = document.createElement('input');
    this.connection_id_input.type = 'number';
    this.connection_id_input.id = 'connection_id_input';
    document.body.appendChild(this.connection_id_input);

    this.button_connect = this.add.button(this.world.centerX-100,this.world.centerY,'button_connect',this.connect,this,1,2);
    this.enter_text = this.add.text(this.world.centerX-140,this.world.centerY-250,"Enter server identifier",{fill: "#fff"});
  },

  connect: function () {
    var connection_id = this.connection_id_input.value;
    this.enter_text.visible = false;
    this.button_connect.visible = false;
    this.connection_id_input.remove();
    this.add.text(this.world.centerX-200,this.world.centerY,"Waiting for other players...",{fill: "#fff"});

    this.connection = new Client(connection_id);
    var that = this;
    this.connection.client.on('data',function(data)
    {
      if (data.indexOf("start") >= 0)
      {
        console.log(data);
        that.state.start('ClientGame', true, false, that.connection, data.substring("start".length,data[data.length]));
      }
    });
  }
};
