var peer = new Peer('multi-pong-server', {key: '5ciq8bfxpc766r', debug: 3});
peer.on('connection', function (conn) {

    console.log('blaat');

    conn.on('data', function (data) {
        // Will print 'hi!'
        console.log(data);
    });
});
