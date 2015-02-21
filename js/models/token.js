define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Token = Game.Models.Base.extend({
    __name__: "Game$Models$Token",
    super: Game.Models.Base.prototype,

    initialize: function(options) {
      options = options || {};
      this.value = options.value;
    },

    getValue: function() {
      return this.value;
    },

    setValue: function(value) {
      this.value = value;
    }
  });

  return Game.Models.Token;
});