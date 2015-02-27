define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Port = Game.Models.Base.extend({
    __name__: "Game$Models$Port",
    super: Game.Models.Base.prototype,

    defaults: {
      type: 1
    },

    initialize: function(options) {
      options = options || {};
      if (options.type && _.isString(options.type)) {
        this.type = options.type;
      }
    }
  });

  return Game.Models.Port;
});