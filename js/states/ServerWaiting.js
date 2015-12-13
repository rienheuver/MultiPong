MultiPong.ServerWaiting = function (game) {
  this.players = [];
};

MultiPong.ServerWaiting.prototype = {

  create: function () {
    this.connection = new Server();

    this.add.text(400, 300, this.connection.id,{fill: "#fff"});
    // temporarily hardcoded
    this.player_count = 1;
    var that = this;
    var temp_name = 0;
    this.connection.server.on('connection', function (new_conn) {
      var player;
      if (that.players.length < that.player_count) {
        player = new Player(that, 0, 0, 0, 0, new_conn, temp_name);
        temp_name++
        //var inputController = new InputController(player, new_conn);
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
            that.connection.send(that.players,"start");
            // send player_array and Server-object to new state's init
            that.state.start("ServerGame", true, false, that.players,that.connection);
          }
        }
      });
    });
  }
}
