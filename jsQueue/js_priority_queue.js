function PriorityQueue() {
    var items = [];

    function QueueElem(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }

    //enqueue
    this.enqueue = function(elem, priority) {
        var queueElem = new QueueElem(elem, priority);

        if (this.isEmpty()) {
            items.push(queueElem);
        } else {
            var added = false;
            for (var i = 0; i < this.size(); i++) {
                if (queueElem.priority < items[i].priority) {
                    items.splice(i, 0, queueElem);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(queueElem);
            }
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
        for (var i = 0; i < this.size(); i++) {
            console.log(items[i].elem + '-' + items[i].priority);
        }
    }
}
