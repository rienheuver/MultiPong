function DeviceView(game) {
  this.game = game;

  this.client_button = game.add.button(10, 10, 'knopje', this.game.choose_client);
  this.server_button = game.add.button(400, 10, 'knopje', this.game.choose_server);
}
