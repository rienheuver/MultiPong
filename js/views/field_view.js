/**
 * Created by langstra on 12-12-15.
 */
function FieldView(game, field_model) {

  this.field_model = field_model;
  this.game = game;

  this.game.add.sprite(0, 0, 'world_background');
}