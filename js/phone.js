var peer = new Peer('multi-pong-server', {key: '5ciq8bfxpc766r', debug: 3});
var conn = peer.connect('multi-pong-server');
console.log(conn);
conn.on('open', function (id) {
    console.log(id);
    conn.send('hi!');
});

conn.on('call', function () {
    console.log('hi');
    conn.send('hi!');
});