MultiPong.ClientWaiting = function(game) {};

MultiPong.ClientWaiting.prototype = {

  create: function() {
    var connection_id = document.createElement('input');
    connection_id.type = 'number';
    document.body.appendChild(connection_id);

    peer2 = new Peer({host: '130.89.138.104', port: 9000, path: '/', debug: 3});
    var c = peer2.connect('hardcoded');
    console.log(c);
    c.on('data', function(data) {
      console.log(data);
      c.send(' peer');
    });
  },

  client: function()
  {
    this.state.start('ClientWaiting');
  },

  server: function()
  {
    this.state.start('ServerWaiting');
  }
};
