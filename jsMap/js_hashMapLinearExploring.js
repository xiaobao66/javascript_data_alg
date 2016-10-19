function HashMapLinearExploring(len) {
    var hashMap = [];

    var ValuePair = function(key, value) {
        this.key = key;
        this.value = value;

        this.toString = function() {
            return '[' + this.key + '-' + this.value + ']';
        };
    };

    //散列函数，确定key在hash表中的位置
    var loseloseHashCode = function(key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.len = len; //限定hashMap的长度

    //put
    this.put = function(key, value) {
        var position = loseloseHashCode(key);
        if (hashMap[position] === undefined) {
            hashMap[position] = new ValuePair(key, value);
        } else {
            var index = ++position;
            while (hashMap[index] !== undefined) {
                index++;
            }
            if (index >= this.len) {
                return false;
            }
            hashMap[index] = new ValuePair(key, value);
        }

        return true;
    };

    //get
    this.get = function(key) {
        var position = loseloseHashCode(key);

        if (hashMap[position] !== undefined) {
            if (hashMap[position].key === key) {
                return hashMap[position].value;
            } else {
                var index = ++position;
                while (index < this.len && (hashMap[index] === undefined || hashMap[index].key !== key)) {
                    index++;
                }
                if (index === this.len) {
                    return undefined;
                } else if (hashMap[index].key === key) {
                    return hashMap[index].value;
                }
            }
        }

        return undefined;
    };

    //remove
    this.remove = function(key) {
        var position = loseloseHashCode(key);

        if (hashMap[position] !== undefined) {
            if (hashMap[position].key === key) {
                hashMap[position] = undefined;
                return true;
            } else {
                var index = ++position;
                while (index < this.len && (hashMap[index] === undefined || hashMap[index].key !== key)) {
                    index++;
                }
                if (index === this.len) {
                    return false;
                } else if (hashMap[index].key === key) {
                    hashMap[index] = undefined;
                    return true;
                }
            }
        }

        return false;
    };

    //print
    this.print = function() {
        for (var i = 0; i < hashMap.length; ++i) {
            if (hashMap[i] !== undefined) {
                console.log(hashMap[i].toString());
            }
        }
    };
}
