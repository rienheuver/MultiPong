/**
 * Created by langstra on 12-12-15.
 */
function FieldView(stage, loader, field_model) {

  this.field_model = field_model;
  this.stage = stage;
  this.loader = loader;
  this.loader.add('background', 'sprites/background.png');

  this.loader.once('complete',start);
  this.loader.load();

  function start () {
    console.log('test');
    var background = new PIXI.Sprite(this.resources.background.texture);
    this.stage.addChild(background);
  }

}