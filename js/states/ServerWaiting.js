MultiPong.ServerWaiting = function (game) {
  this.players = [];
};

MultiPong.ServerWaiting.prototype = {

  create: function () {
    this.connection = new Server();

    this.add.text(400, 300, this.connection.id,{fill: "#1d428a"});
    // temporarily hardcoded
    this.player_count = 4;
    var that = this;
    this.connection.server.on('connection', function (new_conn) {
      var player;
      if (that.players.length < that.player_count) {
        player = new Player(that, 0, 0, 0, 0);
        var inputController = new InputController(player, new_conn);
        that.players.push(player);
      }
      new_conn.on('open', function () {
        player.ready = true;
        if (that.players.length == that.player_count)
        {
          var all_ready = true;
          for (p in that.players) {
            if (!that.players[p].ready) {
              all_ready = false;
            }
          }
          if (all_ready) {
            // for all clients do next line
              that.connection.server.send("start");
            that.state.start("ServerGame");
          }
        }
      });
    });
  }
}
