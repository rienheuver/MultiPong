function Client(id) {
  this.id = id;
  this.client = new Peer({host: '130.89.138.104', port: 9000, path: '/', debug: 3}).connect(this.id);
}

Client.prototype.send = function(data)
{
  this.client.send(data);
}
