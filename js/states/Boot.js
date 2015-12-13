var MultiPong = {};

MultiPong.Boot = function (game) {
};

MultiPong.Boot.prototype = {

  preload: function () {
    this.load.image('world_background', 'assets/background.png');
    this.load.spritesheet('button_chose_server', 'assets/buttons/choose_server.png', 200, 100);
    this.load.spritesheet('button_chose_client', 'assets/buttons/choose_client.png', 200, 100);
    this.load.spritesheet('button_connect', 'assets/buttons/connect.png', 200, 100);
    this.load.spritesheet('button_left', 'assets/buttons/left.png', 100, 100);
    this.load.spritesheet('button_right', 'assets/buttons/right.png', 100, 100);
  },

  create: function () {
    this.state.start('MainMenu');
  }
}
