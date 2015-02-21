define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'models/property'
], function($, _, Backbone, Game) {
  Game.Models.City = Game.Models.Property.extend({
    __name__: "Game$Models$City",
    super: Game.Models.Property.prototype
  });

  return Game.Models.City;
});