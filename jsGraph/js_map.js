function Dictionary() {
    var items = {};

    //has
    this.has = function(key) {
        return items.hasOwnProperty(key);
    };

    //set
    this.set = function(key, value) {
        items[key] = value;
    };

    //remove
    this.remove = function(key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    //get
    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    //clear
    this.clear = function() {
        items = {};
    };

    //size
    this.size = function() {
        return Object.keys(items).length;
    };

    //keys
    this.keys = function() {
        return Object.keys(items);
    };

    //values
    this.values = function() {
        var values = [];
        for (var key in items) {
            if (this.has(key)) {
                values.push(items[key]);
            }
        }

        return values;
    };

    //entries
    this.entries = function() {
        var entries = [];
        for (var key in items) {
            if (this.has(key)) {
                entries.push([key, items[key]]);
            }
        }

        return entries;
    };

    //getItems
    this.getItems = function() {
        return items;
    };
}
