define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Robber = Game.Models.Base.extend({
    __name__: "Game$Models$Robber",
    super: Game.Models.Base.prototype,

    initialize: function() {
      this.q = -1;
      this.r = -1;
    },

    getQRCoordinates: function() {
      return { q: this.q, r: this.r };
    },

    setQRCoordinates: function(q, r) {
      this.q = q;
      this.r = r;
    }
  });

  return Game.Models.Robber;
});