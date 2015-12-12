var peer = new Peer('multi-pong-server', {host: '130.89.176.157', port: 9000, path: '/'}); 
var conn = peer.connect('multi-pong-server');
conn.on('open', function(){
  conn.send('hi!');
});
