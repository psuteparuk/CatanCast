define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Token = Game.Models.Base.extend({
    __name__: "Game$Models$Token",
    super: Game.Models.Base.prototype,

    initialize: function() {
      this.value = 0;
      this.hex = null;
    },

    getValue: function() {
      return this.value;
    },

    setValue: function(value) {
      this.value = value;
    },

    getHex: function() {
      return this.hex;
    },

    setHex: function(hex) {
      this.hex = hex;
    }
  });

  return Game.Models.Token;
});