define(function() {
  cast = window.cast || {};

  var connection = {};

  connection.PROTOCOL = 'urn:x-cast:com.company.catancast';

  connection.initialize = function() {
    this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
    this.castMessageBus = this.castReceiverManager.getCastMessageBus(this.PROTOCOL, cast.receiver.CastMessageBus.MessageType.JSON);

    this.castReceiverManager.onSenderConnected = this.onSenderConnected;
    this.castReceiverManager.onSenderDisconnected = this.onSenderDisconnected;
    this.castMessageBus.onMessage = this.onMessage;
  };

  connection.onMessage = function(e) {
    Game.onMessage(e);
  };

  connection.onSenderConnected = function(e) {
    var numSenders = this.numSenders();
    console.log('Player joined. Total number of players: ' + numSenders);
    Game.onPlayerJoined(e);
  }.bind(connection);

  connection.onSenderDisconnected = function(e) {
    var numSenders = this.numSenders();
    console.log('Player left. Total number of players: ' + numSenders);
    Game.onPlayerLeft(e);
    if (numSenders <= 0) {
      console.log('******* GOODBYE *******');
      this.castReceiverManager.stop();
      return;
    }
  }.bind(connection);

  connection.numSenders = function() {
    return this.castReceiverManager.getSenders().length;
  };

  connection.connect = function(config) {
    console.log('******* WELCOME TO CATANCAST *******');
    this.initialize();
    // this.castReceiverManager.start(config || {});
  };

  return connection;
});