MultiPong.ClientWaiting = function (game) {
  var connection_id_input = null;
};

MultiPong.ClientWaiting.prototype = {

  create: function () {
    this.connection_id_input = document.createElement('input');
    this.connection_id_input.type = 'number';
    this.connection_id_input.id = 'connection_id_input';
    document.body.appendChild(this.connection_id_input);

    var knopje = this.add.button(200,150,'knopje',this.connect,this);
  },

  connect: function () {
    var connection_id = this.connection_id_input.value;
    this.connection = new Client(connection_id);
    var that = this;
    this.connection.client.on('data',function(data)
    {
      if (data == "start")
      {
        that.connection_id_input.remove();
        that.state.start('ClientGame', true, false, that.connection);
      }
    });
  }
};
