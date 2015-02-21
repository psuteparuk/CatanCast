define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Player = Game.Models.Base.extend({
    __name__: "Game$Models$Player",
    super: Game.Models.Base.prototype,

    // defaults: {
    //   id: Game.numPlayers() + 1,
    //   name: "Player #" + (Game.numPlayers()+1),
    //   order: Game.numPlayers() + 1,
    //   resources: []
    // },

    initialize: function(options) {
      options = options || {};
      this.set(options);
    },

    getName: function() {
      return this.name;
    },

    setName: function(name) {
      this.name = name;
    }
  });

  return Game.Models.Player;
});