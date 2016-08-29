function Set() {
    var items = {};

    this.has = function(val) {
        // return val in items;
        return items.hasOwnProperty(val);
    };

    this.add = function(val) {
        if (!this.has(val)) {
            items[val] = val;
            return true;
        }

        return false;
    };

    this.remove = function(val) {
        if (this.has(val)) {
            delete items[val];
            return true;
        }

        return false;
    };

    this.clear = function() {
        items = {};
    };

    this.size = function() {
        return Object.keys(items).length;
    };

    this.sizeLegacy = function() {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                count++;
            }
        }

        return count;
    };

    this.values = function() {
        return Object.keys(items);
    };

    this.valueLegacy = function() {
        var vals = [];
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                vals.push(prop);
            }
        }

        return vals;
    }

    this.union = function(otherSet) {
        var unionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;
    };

    this.intersection = function(otherSet) {
        var intersectionSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    };

    this.difference = function(otherSet) {
        var differenceSet = new Set();

        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    };

    this.subset = function(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();

            for (var i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }

            return true;
        }
    };
}
