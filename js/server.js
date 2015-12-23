function Server() {
  this.id = makeid();
  this.server = new Peer(this.id, {host: 'raspi.rienheuver.nl', port: 3636, path: '/', debug: 3});
}

// currently unused
Server.prototype.send = function(players, data)
{
  for (var p in players)
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
