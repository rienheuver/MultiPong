MultiPong.MainMenu = function (game) {
};

MultiPong.MainMenu.prototype = {

  create: function () {
    this.scale.startFullScreen();
    this.client_button = this.add.button(this.world.centerX-300, this.world.centerY, 'button_chose_client', this.client, this,1,2);
    this.server_button = this.add.button(this.world.centerX+100, this.world.centerY, 'button_chose_server', this.server, this,1,2);
  },

  client: function () {
    this.state.start('ClientGame');
  },

  server: function () {
    this.state.start('ServerGame');
  }
};
