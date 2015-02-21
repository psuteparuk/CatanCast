define([
  'jquery',
  'underscore',
  'backbone',
  'game',
  'models/property'
], function($, _, Backbone, Game) {
  Game.Models.Settlement = Game.Models.Property.extend({
    __name__: "Game$Models$Settlement",
    super: Game.Models.Property.prototype,

    initialize: function(options) {

    }
  });

  return Game.Models.Settlement;
});