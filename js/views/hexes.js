define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'views/hex'
], function($, _, Backbone, Game) {
  Game.Views.Hexes = Game.Views.Base.extend({
    __name__: "Game$Views$Hexes",
    super: Game.Views.Base.prototype,

    render: function() {
      this.collection.forEach(function(hex) {
        var hexView = new Game.Views.Hex({ model: hex });
        hexView.render();
      }, this);
    }
  });

  return Game.Views.Hexes;
});