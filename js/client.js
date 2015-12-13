function Client(id) {
  this.id = id;
  this.client = new Peer({host: 'localhost', port: 9000, path: '/', debug: 3}).connect(this.id);
}

Client.prototype.send = function(data)
{
  this.client.send(data);
  console.log(data);
}
