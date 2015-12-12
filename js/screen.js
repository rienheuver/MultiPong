function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

    // Create a new Peer with our demo API key, with debug set to true so we can
    // see what's going on.
    var id = makeid();
    peer1 = new Peer('hardcoded', {host: 'localhost', port: 9000, path: '/', debug: 3});

    // The `open` event signifies that the Peer is ready to connect with other
    // Peers and, if we didn't provide the Peer with an ID, that an ID has been
    // assigned by the server.
    peer1.on('open', function(id){
      peerId1 = id;
      console.log(id);
    });

    peer1.on('connection', function(connection) {
      connection.on('open', function() {
        //ready to send data
        connection.send('Hello');
      });

      // data received
      connection.on('data', function(data) {
        console.log(data);
      });
    });
