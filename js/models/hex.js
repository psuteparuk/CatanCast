define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Hex = Game.Models.Base.extend({
    __name__: "Game$Models$Hex",
    super: Game.Models.Base.prototype,

    initialize: function() {
      this.q = -1;
      this.r = -1;
      this.resourceType = -1;
      this.isRobbed = false;
    },

    getQRCoordinates: function() {
      return { q: this.q, r: this.r };
    },

    setQRCoordinates: function(q, r) {
      this.q = q;
      this.r = r;
    },

    getXYCoordinates: function(hexLength) {
      var qVec = { x: 0.5*Math.sqrt(3)*hexLength, y: 0.5*hexLength };
      var rVec = { x: 0, y: hexLength };
      return {
        x: qVec.x*(this.q-2) + rVec.x*(this.r-2) + Game.width/2,
        y: qVec.y*(this.q-2) + rVec.y*(this.r-2) + Game.height/2
      };
    },

    getResourceType: function() {
      return this.resourceType;
    },

    setResourceType: function(type) {
      this.resourceType = type;
    },

    robbed: function() {
      this.isRobbed = true;
    },

    freed: function() {
      this.isRobbed = false;
    },

    getVerticesQR: function() {
      return [
        { q: 2*this.q+this.r, r: this.q+2*this.r },
        { q: 2*this.q+this.r, r: this.q+2*this.r+1 },
        { q: 2*this.q+this.r+1, r: this.q+2*this.r+2 },
        { q: 2*this.q+this.r+2, r: this.q+2*this.r+2 },
        { q: 2*this.q+this.r+2, r: this.q+2*this.r+1 },
        { q: 2*this.q+this.r+1, r: this.q+2*this.r }
      ];
    }
  });

  return Game.Models.Hex;
});