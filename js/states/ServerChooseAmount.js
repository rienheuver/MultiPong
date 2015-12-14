MultiPong.ServerChooseAmount = function (game) {
};

MultiPong.ServerChooseAmount.prototype = {

  create: function () {
    this.player_amount_input = document.createElement('input');
    this.player_amount_input.type = 'number';
    this.player_amount_input.id = 'player_amount_input';
    document.body.appendChild(this.player_amount_input);

    this.button_amount = this.add.button(this.world.centerX-100,this.world.centerY,'button_connect',this.choose_amount,this,1,2);
    this.enter_text = this.add.text(this.world.centerX-140,this.world.centerY-250,"Enter player amount",{fill: "#fff"});
  },

  choose_amount: function() {
    var amount = this.player_amount_input.value;
    this.player_amount_input.remove();
    this.state.start('ServerWaiting',true,false,amount);
  }
}
