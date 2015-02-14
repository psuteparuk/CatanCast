define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'connection'
], function($, _, Backbone, PIXI, TWEEN, Connection) {
  Game = {};
  Game.Models = {};
  Game.Views = {};
  Game.Collections = {};
  Game.connection = Connection;
  Game.numPlayers = 0;
  Game.hasStarted = false;
  Game.$mainCanvas = null;
  Game.width = 0;
  Game.height = 0;
  Game.stage = null;
  Game.renderer = null;

  Game.initialize = function() {
    this.connection.connect();
    this.stage = new PIXI.Stage(0x000000);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    var renderOptions = renderOptions || {};
    this.renderer = PIXI.autoDetectRenderer(this.width, this.height, renderOptions);
    this.$mainCanvas = $(this.renderer.view);
    this.$mainCanvas.addClass('game-canvas');
    document.body.appendChild(this.$mainCanvas.get(0));
  };

  Game.animate = function() {
    requestAnimationFrame(this.animate);
    TWEEN.update();
    this.renderer.render(this.stage);
  }.bind(Game);

  Game.onMessage = function(e) {
    var message = e.data;
    var senderId = e.senderId;

    console.log('Message received from ' + senderId);
    console.log('Content: ' + JSON.stringify(message));
  };

  Game.onPlayerJoined = function(e) {
    this.numPlayers++;

    if (this.numPlayers === 1 && !this.hasStarted) {
      this.hasStarted = true;
      this.renderWelcome();
    }
  };

  Game.onPlayerLeft = function(e) {
    this.numPlayers--;
  };

  Game.renderWelcome = function() {
    (new Game.Views.Welcome()).render();
  };

  /**************************************************/

  Game.Models.Base = Backbone.Model.extend({
    __name__: 'Game$Models$Base'
  });

  Game.Views.Base = Backbone.View.extend({
    __name__: 'Game$Views$Base'
  });

  return Game;
});