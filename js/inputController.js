function InputController(player, connection)
{
  connection.on('data', function(data){
    switch(data)
    {
      case 'left':
      player.handle_input({b1: true, b2: false});
      break;

      case 'right':
      player.handle_input({b1: false, b2: true});
      break;
    }
  });
}
