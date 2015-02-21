define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Tile = Game.Models.Base.extend({
    __name__: "Game$Models$Tile",
    super: Game.Models.Base.prototype
  });

  return Game.Models.Tile;
});