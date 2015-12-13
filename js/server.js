function Server() {
  this.id = makeid();
  this.server = new Peer(this.id, {host: 'localhost', port: 9000, path: '/', debug: 3});
}

Server.prototype.send = function(players, data)
{
  for (p in players)
  {
    players[p].connection.send(data);
  }
};

function makeid() {
  var text = "";
  var possible = "0123456789";
  for (var i = 0; i < 4; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
