/*
 * Look at http://www.redblobgames.com/grids/hexagons/ for hexagon grid data structure.
 * We use Axial Coordinates for this project.
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Board = Game.Models.Base.extend({
    __name__: "Game$Models$Board",
    super: Game.Models.Base.prototype,

    initialize: function() {
      this.boardSize = 5;
      this.hexesArray = [];
      this.tokensArray = [];
      this.hexes = new Game.Collections.Hexes();
      this.tokens = new Game.Collections.Tokens();
      this.robber = null;

      this.initHexesArray();
      this.initTokensArray();
    },

    /* 4 Lumbers, 3 Bricks, 4 Wools, 4 Grains, 3 Ores, and 1 Desert */
    initHexesArray: function() {
      var shuffleResources = shuffle([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,0]);
      for (var q = 0; q < this.boardSize; ++q) {
        this.hexesArray[q] = [];
        for (var r = 0; r < this.boardSize; ++r) {
          var hex = new Game.Models.Hex();
          hex.setQRCoordinates(q, r);
          hex.setResourceType(shuffleResources[q*this.boardSize+r]);
          this.hexesArray[q][r] = hex;
          this.hexes.add(hex);
        }
      }
    },

    initTokensArray: function() {
      var shuffleTokens = shuffle([2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]);
      for (var q = 0; q < this.boardSize; ++q) {
        this.tokensArray[q] = [];
        for (var r = 0; r < this.boardSize; ++r) {
          var hex = this.hexesArray[q][r];
          if (hex.getResourceType() === 0) {
            this.robber = new Game.Models.Robber();
            this.robber.setHex(hex);
            hex.robbed();
            continue;
          }
          var token = new Game.Models.Token();
          token.setQRCoordinates(q, r);
          token.setValue(shuffleTokens[q*this.boardSize+r]);
          token.setHex(hex);
          this.tokensArray[q][r] = token;
          this.tokens.add(token);
        }
      }
    }
  });

  function shuffle(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  }

  return Game.Models.Board;
});