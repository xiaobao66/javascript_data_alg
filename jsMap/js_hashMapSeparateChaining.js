function HashMapSeparateChaining() {
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
            hash += key.charCodeAt(key[i]);
        }

        return hash % 37;
    };

    //put
    this.put = function(key, value) {
        var position = loseloseHashCode(key);

        if (hashMap[position] === undefined) {
            hashMap[position] = new LinkedList();
        }

        hashMap[position].append(new ValuePair(key, value));
    };

    //get
    this.get = function(key) {
        var position = loseloseHashCode(key);

        if (hashMap[position] !== undefined) {
            var current = hashMap[position].getHead();

            //遍历链表，寻找键/值
            while (current.next) {
                if (current.elem.key === key) {
                    return current.elem.value;
                }
                current = current.next;
            }

            //检查链表第一个或最后一个节点
            if (current.elem.key === key) {
                return current.elem.value;
            }
        }

        return undefined;
    };

    //remove
    this.remove = function(key) {
        var position = loseloseHashCode(key);

        if (hashMap[position] !== undefined) {
            var current = hashMap[position].getHead();

            while (current.next) {
                if (current.elem.key === key) {
                    hashMap[position].remove(current.elem);
                    if (hashMap[position].isEmpty()) {
                        hashMap[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }

            //检查链表第一个或最后一个节点
            if (current.elem.key === key) {
                hashMap[position].remove(current.elem);
                if (hashMap[position].isEmpty()) {
                    hashMap[position] = undefined;
                }
                return true;
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
