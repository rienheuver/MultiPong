var MultiPong  = {};

MultiPong.Boot = function(game) {};

MultiPong.Boot.prototype = {

  preload: function() {
    this.load.image('world_background', 'assets/background.png');
    this.load.image('knopje', 'assets/knopje.png');
  },

  create: function() {
    this.state.start('MainMenu');
  }
}
