peer2 = new Peer({host: '130.89.138.104', port: 9000, path: '/', debug: 3});
var c = peer2.connect('hardcoded');
console.log(c);
c.on('data', function(data) {
  console.log(data);
  c.send(' peer');
});
