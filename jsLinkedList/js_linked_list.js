//linkedList class
function LinkedList() {
    //node class
    var Node = function(elem) {
        this.elem = elem;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(elem) {
        var node = new Node(elem),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;

            //循环链表，找到最后一项
            while (current.next !== null) {
                current = current.next;
            }

            //找到最后一项，将其next赋为node
            current.next = node;
        }

        length++;
    };

    this.removeAt = function(pos) {
        //检查位置是否合法
        if (pos > -1 && pos < length) {
            var current = head,
                previous,
                index = 0;

            //移除第一项
            if (pos === 0) {
                head = current.next;
            } else {
                while (index < pos) {
                    previous = current;
                    current = current.next;
                    index++;
                }

                //将previous和current的下一项连接起来，移除current
                previous.next = current.next;
            }
            length--;
            return current.elem;
        } else {
            return null;
        }
    }

    this.insert = function(pos, elem) {
        //检查位置是否合法
        if (pos > -1 && pos <= length) {
            var node = new Node(elem),
                current = head,
                previous,
                index = 0;

            //在第一个位置添加
            if (pos === 0) {
                head = node;
                node.next = current;
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

    this.toString = function() {
        var current = head,
            string = '';

        while (current) {
            string += current.elem + (current.next ? ' ' : '');
            current = current.next;
        }

        return string;
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

    this.remove = function(elem) {
        var index = this.indexOf(elem);
        return this.removeAt(index);
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

    this.print = function() {
        console.log(this.toString());
    }
}
