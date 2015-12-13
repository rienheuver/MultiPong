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
    peer2 = new Peer({host: '130.89.138.104', port: 9000, path: '/', debug: 3});
    var c = peer2.connect(connection_id);
    console.log(c);
    c.on('data', function (data) {
      console.log(data);
      c.send(' peer');
    });
  }
};
