function DoublyLinkedList() {
    var Node = function(elem) {
        this.elem = elem;
        this.next = null;
        this.pre = null;
    }

    var length = 0,
        head = null,
        tail = null;

    this.append = function(elem) {
        var node = new Node(elem);

        if (length === 0) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            node.pre = tail;
            tail = node;
        }

        length++;
    }

    this.insert = function(pos, elem) {
        //检查pos是否合法
        if (pos >= 0 && pos <= length) {
            var node = new Node(elem),
                current = head,
                previous,
                index = 0;

            //pos为0即链表头时
            if (pos === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.pre = node;
                    head = node;
                }
            } else if (pos === length) {
                //位置在链表尾
                current = tail;
                current.next = node;
                node.pre = current;
                tail = node;
            } else {
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }

                node.next = current;
                previous.next = node;
                current.pre = node;
                node.pre = previous;
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
                //在链表头删除
                head = current.next;

                if (length === 1) {
                    tail = null;
                } else {
                    head.pre = null;
                }
            } else if (pos === length - 1) {
                //在链表尾删除
                current = tail;
                tail = current.pre;
                tail.next = null;
            } else {
                //在中间删除
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
                current.next.pre = previous;
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

        while (current) {
            if (elem === current.elem) {
                return index;
            }
            index++;
            current = current.next;
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

    this.getTail = function() {
        return tail;
    }

    this.toString = function() {
        var current = head,
            str = '';

        while (current) {
            str += current.elem + (current.next ? ' ' : '');
            current = current.next;
        }

        return str;
    }

    this.inverseToString = function() {
        var current = tail,
            str = '';

        while (current) {
            str += current.elem + (current.pre ? ' ' : '');
            current = current.pre;
        }

        return str;
    }

    this.print = function() {
        console.log(this.toString());
    }

    this.inversePrint = function() {
        console.log(this.inverseToString());
    }
}
