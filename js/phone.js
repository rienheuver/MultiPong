peer2 = new Peer({host: 'localhost', port: 9000, path: '/', debug: 3});
var c = peer2.connect('hardcoded');
console.log(c);
c.on('data', function(data) {
  console.log(data);
  c.send(' peer');
});
