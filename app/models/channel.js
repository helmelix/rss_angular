"use strict";
var Channel = (function () {
    function Channel(name, url, id, type) {
        if (type === void 0) { type = "channels"; }
        this.name = name;
        this.url = url;
        this.id = id;
        this.type = type;
    }
    return Channel;
}());
exports.Channel = Channel;
//# sourceMappingURL=channel.js.map