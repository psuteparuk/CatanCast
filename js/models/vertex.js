define([
  'jquery',
  'underscore',
  'backbone',
  'game'
], function($, _, Backbone, Game) {
  Game.Models.Vertex = Game.Models.Base.extend({
    __name__: "Game$Models$Vertex",
    super: Game.Models.Base.prototype,

    initialize: function() {
      this.q = -1;
      this.r = -1;
      this.property = null;
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

    getProperty: function() {
      return this.property;
    },

    setProperty: function(property) {
      this.property = property;
    },

    getHexesQR: function() {
      if (!this.isValid()) return false;
      var offset = (this.q + this.r) % 3;
      if (offset) { // q+r = 1 (mod 3)
        return [
          { q: (2*this.q-this.r-2)/3, r: (2*this.r-this.q-2)/3 },
          { q: (2*this.q-this.r-2)/3, r: (2*this.r-this.q+1)/3 },
          { q: (2*this.q-this.r+1)/2, r: (2*this.r-this.q-2)/3 }
        ];
      } else { // q+r = 0 (mod 3)
        return [
          { q: (2*this.q-this.r)/3-1, r: (2*this.r-this.q)/3 },
          { q: (2*this.q-this.r)/3, r: (2*this.r-this.q)/3 },
          { q: (2*this.q-this.r)/3, r: (2*this.r-this.q)/3-1 }
        ];
      }
    },

    isValid: function() {
      return (this.q + this.r) % 3 !== 2;
    }
  });

  return Game.Models.Vertex;
});