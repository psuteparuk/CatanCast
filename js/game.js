define([
  'jquery',
  'underscore',
  'backbone',
  'pixi',
  'tween',
  'connection',
  'gameConfig'
], function($, _, Backbone, PIXI, TWEEN, Connection, Config) {
  Game = {};
  Game.Models = {};
  Game.Views = {};
  Game.Collections = {};

  Game.$mainCanvas = null;
  Game.width = 0;
  Game.height = 0;
  Game.stage = null;
  Game.renderer = null;

  Game.config = {};
  Game.players = null;
  Game.hasStarted = false;
  Game.resourceType = ['Desert', 'Lumber', 'Brick', 'Wool', 'Grain', 'Ore'];
  Game.portType = ['2:1', '3:1'];

  Game.welcomeView = null;
  Game.board = null;
  Game.boardView = null;

  Game.initialize = function() {
    Connection.connect();
    this.config = new Config();
    this.stage = new PIXI.Stage(0x000000);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    var renderOptions = renderOptions || {};
    this.renderer = PIXI.autoDetectRenderer(this.width, this.height, renderOptions);
    this.$mainCanvas = $(this.renderer.view);
    this.$mainCanvas.addClass('game-canvas');
    document.body.appendChild(this.$mainCanvas.get(0));

    this.players = new Game.Collections.Players();
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

    switch(message.action) {
      case 'playerJoin': // additional action to onPlayerJoined
        var player = this.players.findWhere({ id: senderId });
        player.setName(message.userName);
        break;
      case 'gameOptions':
        this.config.init(message.options);
        this.clearWelcome();
        this.stage.removeChildren();
        this.renderMain(message.options);
        break;
      default:
    }
  };

  Game.onPlayerJoined = function(e) {
    var player = new Game.Models.Player({ id: e.senderId });
    this.players.add(player);
    var numPlayers = this.players.length;
    if (numPlayers === 1 && !this.hasStarted) {
      this.hasStarted = true;
      this.renderWelcome(player);
    }
  };

  Game.onPlayerLeft = function(e) {
    var player = this.players.findWhere({ id: e.senderId });
    this.players.remove(player);
  };

  Game.renderWelcome = function(player) {
    this.welcomeView = new Game.Views.Welcome();
    this.welcomeView.render(player);
    setTimeout(this.clearWelcome, 10000);
  };

  Game.clearWelcome = function() {
    if (!this.welcomeView) return;
    this.welcomeView.clear();
  }.bind(Game);

  Game.renderMain = function() {
    this.board = new Game.Models.Board();
    this.boardView = new Game.Views.Board({ model: this.board });
    this.boardView.render();
  };

  /**************************************************/

  Game.Models.Base = Backbone.Model.extend({
    __name__: 'Game$Models$Base'
  });

  Game.Collections.Base = Backbone.Collection.extend({
    __name__: 'Game$Collections$Base'
  });

  Game.Views.Base = Backbone.View.extend({
    __name__: 'Game$Views$Base'
  });

  return Game;
});