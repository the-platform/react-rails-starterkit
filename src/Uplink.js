var R = require("react-rails");
var config = require("./config");

var Uplink = function Uplink(guid) {
    var uplink;
    var url = "http://" + config.uplinkServer.hostname + ":" + config.uplinkServer.port + config.uplinkServer.prefix;
    if(R.isClient()) {
        uplink = new R.Uplink(url, url, guid);
    }
    if(R.isServer() {
        uplink = new R.Uplink(url, null, guid);
    }
    return uplink;
};

module.exports = Uplink;
