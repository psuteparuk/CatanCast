define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Property = Game.Models.Base.extend({
    __name__: "Game$Models$Property",
    super: Game.Models.Base.prototype
  });

  return Game.Models.Property;
});