var Map = /** @class */ (function () {
    function Map() {
        this.items = {};
    }
    Map.prototype.setItem = function (key, item) {
        this.items[key] = item;
    };
    Map.prototype.getItem = function (key) {
        return this.items[key];
    };
    Map.prototype.clear = function () {
        this.items = {};
    };
    Map.prototype.printMap = function () {
        return this.items;
    };
    return Map;
}());
