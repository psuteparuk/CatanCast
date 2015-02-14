define(function() {
  cast = window.cast || {};

  var connection = {};

  connection.PROTOCOL = 'urn:x-cast:com.company.catancast';

  connection.initialize = function() {
    this.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
    this.castMessageBus = this.castReceiverManager.getCastMessageBus(this.PROTOCOL, cast.receiver.CastMessageBus.MessageType.JSON);
  };

  connection.onSenderConnected = function(e) {
    console.log('onSenderConnected. Total number of players: ' + this.numSenders());
  };

  connection.onSenderDisconnected = function(e) {
    console.log('onSenderDisconnected. Total number of players: ' + this.numSenders());
  };

  connection.numSenders = function() {
    return this.castReceiverManager.getSenders().length;
  };

  connection.connect = function(config) {
    this.castReceiverManager.start(config || {});
  };

  return connection;
});