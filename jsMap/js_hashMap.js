function HashMap() {
    var hashMap = [];

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
        console.log(position + '-' + key);
        hashMap[position] = value;
    };

    //get
    this.get = function(key) {
        return hashMap[loseloseHashCode(key)];
    };

    //remove
    this.remove = function(key) {
        hashMap[loseloseHashCode(key)] = undefined;
    };
}
