MultiPong.ClientGame = function (game) {
};

MultiPong.ClientGame.prototype = {
  create: function () {
    var links = this.add.button(10,10,'knopje',this.connect,this);
    var rechts = this.add.button(400,10,'knopje',this.connect,this);
  }
}
