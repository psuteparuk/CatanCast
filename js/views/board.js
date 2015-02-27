/*
 * Look at http://www.redblobgames.com/grids/hexagons/ for hexagon grid data structure.
 * We use Axial Coordinates for this project.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'game'
], function($, _, Backbone, PIXI, TWEEN, Game) {
  Game.Views.Board = Game.Views.Base.extend({
    __name__: "Game$Views$Board",
    super: Game.Views.Base.prototype,

    initialize: function() {
      this.container = null;
      this.bg = null;
    },

    render: function() {
      this.addContainer();
      this.addBgImage();
    },

    addContainer: function() {
      this.container = new PIXI.DisplayObjectContainer();
      this.container.position.set(0, 0);
      this.container.width = Game.width;
      this.container.height = Game.height;
      this.container.alpha = 0;

      Game.stage.addChild(this.container);

      new TWEEN.Tween(this.container)
        .to({ alpha: 1 }, 1000)
        .easing(TWEEN.Easing.Linear.None)
        .start();
    },

    addBgImage: function() {
      var bgTexture = PIXI.Texture.fromImage('images/skyblue-bg.png');
      this.bg = new PIXI.Sprite(bgTexture);
      this.bg.position.set(0, 0);
      this.bg.width = Game.width;
      this.bg.height = Game.height;

      this.container.addChild(this.bg);
    },

    addBoard: function() {
      var hexesView = new Game.Views.Hexes({ collection: this.model.hexes });
      var tokensView = new Game.Views.Tokens({ collection: this.model.tokens });
      var robberView = new Game.Views.Robber({ model: this.model.robber });

      hexesView.render(this.container);
      tokensView.render(this.container);
      robberView.render(this.container);
    }
  });

  return Game.Views.Board;
});