function Client(id) {
  this.id = id;
  this.client = new Peer({host: 'raspi.rienheuver.nl', port: 3636, path: '/', debug: 3}).connect(this.id);
}

Client.prototype.send = function(data)
{
  this.client.send(data);
};
