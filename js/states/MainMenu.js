MultiPong.MainMenu = function(game) {};

MultiPong.MainMenu.prototype = {

  create: function() {
    this.client_button = this.add.button(10, 10, 'knopje', this.client, this);
    this.server_button = this.add.button(400, 10, 'knopje', this.server, this);
  },

  client: function()
  {
    this.state.start('ClientWaiting');
  },

  server: function()
  {
    this.state.start('ServerWaiting');
  }
};
