//create stack class
function Stack() {
    var items = [];

    //push
    this.push = function(elems) {
        for (var i = 0; i < arguments.length; i++) {
            items.push(arguments[i]);
        }
    }

    //pop
    this.pop = function() {
        return items.pop();
    }

    //peek
    this.peek = function() {
        if (items.length !== 0) {
            return items[items.length - 1];
        }
    }

    //isEmpty
    this.isEmpty = function() {
        return items.length === 0;
    }

    //clear
    this.clear = function() {
        items = [];
    }

    //size
    this.size = function() {
        return items.length;
    }

    //print
    this.print = function() {
        console.log(items.toString());
    }

    //toString
    this.toString = function() {
        return items.toString();
    }
}
