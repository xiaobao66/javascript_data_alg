function Queue() {
    var items = [];

    //enqueue
    this.enqueue = function(elems) {
        for (var i = 0; i < arguments.length; i++) {
            items.push(arguments[i]);
        }
    }

    //dequeue
    this.dequeue = function() {
        return items.shift();
    }

    //front
    this.front = function() {
        if (!this.isEmpty()) {
            return items[0];
        } else {
        	return 'empty';
        }
    }

    //isEmpty
    this.isEmpty = function() {
        return items.length === 0;
    }

    //size
    this.size = function() {
        return items.length;
    }

    //print
    this.print = function() {
        console.log(items.toString());
    }
}
