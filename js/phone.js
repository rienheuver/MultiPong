var peer = new Peer('multi-pong-server', {key: 'qya3ugslm5tgldi'});
var conn = peer.connect('multi-pong-server');
conn.on('open', function(){
  conn.send('hi!');
});
