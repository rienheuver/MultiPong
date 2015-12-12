var peer = new Peer('multi-pong-server', {key: 'qya3ugslm5tgldi'});
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    console.log(data);
  });
  conn.on('open', function() {
    console.log("Dingen");
  });
});
