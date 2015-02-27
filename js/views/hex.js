define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'game'
], function($, _, Backbone, PIXI, Game) {
  Game.Views.Hex = Game.Views.Base.extend({
    __name__: "Game$Views$Hex",
    super: Game.Views.Base.prototype,

    render: function(container) {
      var type = Game.resourceType[this.model.getResourceType()];
      var qr = this.model.getQRCoordinates();
      var hexTexture = PIXI.Texture.fromImage('images/hexagon-' + type.toLowerCase());
      var hex = new PIXI.Sprite(hexTexture);
      hex.anchor.set(0.5, 0.5);
      hex.scale.set(0.3, 0.3);

      var hexLength = hex.height;
      var position = this.model.getXYCoordinates(hexLength);
      hex.position.set(position.x, position.y);

      container.addChild(hex);
    }
  });

  return Game.Views.Hex;
});