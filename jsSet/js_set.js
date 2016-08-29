function Set() {
    var items = {};

    //has
    this.has = function(val) {
        // return val in items;
        return items.hasOwnProperty(val);
    };

    //add
    this.add = function(val) {
        if (!this.has(val)) {
            items[val] = val;
            return true;
        }

        return false;
    };

    //remove
    this.remove = function(val) {
        if (this.has(val)) {
            delete items[val];
            return true;
        }

        return false;
    };

    //clear
    this.clear = function() {
        items = {};
    };

    //size 使用Object.keys方法返回一个属性数组，通过数组的长度来获取集合的大小
    this.size = function() {
        return Object.keys(items).length;
    };

    //sizeLegacy 与size方法等价
    this.sizeLegacy = function() {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                count++;
            }
        }

        return count;
    };

    //values 使用Object.keys方法返回一个数组
    this.values = function() {
        return Object.keys(items);
    };

    //valuesLegacy 与values方法等价
    this.valuesLegacy = function() {
        var vals = [];
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                vals.push(prop);
            }
        }

        return vals;
    }

    //集合的并
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

    //集合的交
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

    //集合的差
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

    //集合的子集
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
