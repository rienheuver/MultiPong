var peer = new Peer('multi-pong-server', {host: '130.89.176.157', port: 9000, path: '/'}); 
peer.on('connection', function(conn) {
  conn.on('data', function(data){
    // Will print 'hi!'
    console.log(data);
  });
});
