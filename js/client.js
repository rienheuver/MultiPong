function Client(id) {
  this.id = id;
  this.client = new Peer({host: 'localhost', port: 9000, path: '/', debug: 3}).connect(this.id);
}
