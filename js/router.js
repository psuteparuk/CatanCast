define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  var initialize = function() {
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});