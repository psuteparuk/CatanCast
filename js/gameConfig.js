define(function() {
  var config = {};

  config.init = function(options) {
    options = options || {};
    for (var key in options) { config[key] = options[key]; }
  };

  return config;
});