MultiPong.ServerWaiting = function(game) {};

MultiPong.ServerWaiting.prototype = {

  create: function() {
    this.connection = new Server();

    this.add.text(400,300,this.connection.id);
    this.player_count = 4;
    // temporary hardcoded
    this.connection.server.on('connection', function(new_conn) {
    if (this.players.length < this.player_count)
    {
      var player = new Player(this, 0, 0, 0, 0);
      var inputController = new InputController(player, new_conn);
      this.players.push(player);
    }
    new_conn.on('open', function() {
      player.ready = true;
      var all_ready = true;
      for (p in this.players)
      {
        if (!p.ready)
        {
          all_ready = false;
        }
      }
      if (all_ready)
      {
        this.state.start("ServerGame");
      }
      });
    });
  }
}
