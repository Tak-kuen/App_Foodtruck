cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCMPlugin"
      ]
    },
    {
      "id": "cordova-plugin-sim.Sim",
      "file": "plugins/cordova-plugin-sim/www/sim.js",
      "pluginId": "cordova-plugin-sim",
      "merges": [
        "window.plugins.sim"
      ]
    },
    {
      "id": "cordova-plugin-sim.SimAndroid",
      "file": "plugins/cordova-plugin-sim/www/android/sim.js",
      "pluginId": "cordova-plugin-sim",
      "merges": [
        "window.plugins.sim"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-fcm-with-dependecy-updated": "2.4.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-sim": "1.3.3"
  };
});