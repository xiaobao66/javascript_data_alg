function CircleLinkedList() {
    var Node = function(elem) {
        this.elem = elem;
        this.next = null;
    }

    var length = 0,
        head = null;

    this.append = function(elem) {
        var node = new Node(elem),
            current;

        if (length === 0) {
            head = node;
            node.next = head;
        } else {
            current = head;
            while (current.next !== head) {
                current = current.next;
            }
            current.next = node;
            node.next = head;
        }

        length++;
    }

    this.insert = function(pos, elem) {
        if (pos >= 0 && pos <= length) {
            var node = new Node(elem),
                current = head,
                previous,
                index = 0;

            if (pos === 0) {
                if (length === 0) {
                    head = node;
                    node.next = head;
                } else {
                    node.next = current;

                    while (current.next !== head) {
                        current = current.next;
                    }

                    head = node;
                    current.next = head;
                }
            } else {
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }

                previous.next = node;
                node.next = current;
            }

            length++;
            return true;
        } else {
            return false;
        }
    }

    this.removeAt = function(pos) {
        if (pos > -1 && pos < length) {
            var current = head,
                previous,
                index = 0;

            if (pos === 0) {
                while (current.next !== head) {
                    current = current.next;
                }

                if (length === 1) {
                    head = null;
                } else {
                    head = head.next;
                    current.next = head;
                }
            } else {
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }

            length--;
            return current.elem;
        } else {
            return null;
        }
    }

    this.remove = function(elem) {
        var index = this.indexOf(elem);
        return this.removeAt(index);
    }

    this.indexOf = function(elem) {
        var current = head,
            index = 0;

        while (current.next !== head) {
            if (elem === current.elem) {
                return index;
            }
            index++;
            current = current.next;
        }

        if (elem === current.elem) {
            return index;
        }

        return -1;
    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.size = function() {
        return length;
    }

    this.getHead = function() {
        return head;
    }

    this.toString = function() {
        var current = head,
            str = current ? current.elem : '';

        while (current.next !== head) {
            current = current.next;
            str += ' ' + current.elem;
        }

        return str;
    }

    this.print = function() {
        console.log(this.toString());
    }
}
