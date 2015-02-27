define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'game'
], function($, _, Backbone, PIXI, Game) {
  Game.Views.Token = Game.Views.Base.extend({
    __name__: "Game$Views$Token",
    super: Game.Views.Base.prototype,

    render: function(container) {
      var hexTexture = PIXI.Texture.fromImage('images/hexagon-' + type.toLowerCase());
      var hex = new PIXI.Sprite(hexTexture);
      hex.anchor.set(0.5, 0.5);
      hex.scale.set(0.3, 0.3);

      var hexLength = hex.height;
      var qVec = { x: 0.5*Math.sqrt(3)*hexLength, y: 0.5*hexLength };
      var rVec = { x: 0, y: hexLength };
      var positionX = qVec.x*(qr.q-2) + rVec.x*(qr.r-2) + Game.width/2;
      var positionY = qVec.y*(qr.q-2) + rVec.y*(qr.r-2) + Game.height/2;
      hex.position.set(positionX, positionY);

      container.addChild(hex);
    }
  });

  return Game.Views.Token;
});