cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
        "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
        "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-sim/www/sim.js",
        "id": "cordova-plugin-sim.Sim",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-fcm-with-dependecy-updated": "2.4.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-sim": "1.3.3"
}
// BOTTOM OF METADATA
});