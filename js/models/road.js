define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Road = Game.Models.Base.extend({
    __name__: "Game$Models$Road",
    super: Game.Models.Base.prototype
  });

  return Game.Models.Road;
});