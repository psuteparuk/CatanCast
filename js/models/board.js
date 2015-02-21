define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Board = Game.Models.Base.extend({
    __name__: "Game$Models$Board",
    super: Game.Models.Base.prototype,

    initialize: function(options) {
      options = options || {};
      this.set(options);
    }
  });

  return Game.Models.Board;
});