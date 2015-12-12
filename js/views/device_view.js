/**
 * Created by langstra on 12-12-15.
 */
function FieldView(game, field_model) {

  this.field_model = field_model;
  this.game = game;

  this.game.add.sprite(0, 0, 'world_background');
  this.graphics = game.add.graphics(0,0);
  this.graphics.lineStyle(1, 0x00ff00, 1);

  this.circle = new Phaser.Circle(game.world.centerX, game.world.centerY, Math.min(game.world.centerY, game.world.centerX));

  this.graphics.drawCircle(this.circle.x, this.circle.y, this.circle.diameter*2);

  var vertices = this.field_model.get_polygon(this.circle.x, this.circle.y, Math.min(game.world.centerY, game.world.centerX), 0);

  this.graphics.drawPolygon(vertices);
}
