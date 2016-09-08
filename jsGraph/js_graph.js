var DEFAULT = {
    'WHITE': 0,
    'GRAY': 1,
    'BLACK': 2
};

function Graph() {
    //顶点
    var vertices = [];
    var adjList = new Dictionary();

    //添加新的顶点
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    //添加新的边
    this.addEdge = function(v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    //打印图的信息
    this.toString = function() {
        var s = '';
        vertices.forEach(function(value, index) {
            s += value + '->';
            var neighbours = adjList.get(value);
            for (var i = 0; i < neighbours.length; i++) {
                s += neighbours[i] + ' ';
            }
            s += '\n';
        });
        return s;
    };

    //标记顶点颜色
    var initializeColor = function() {
        var color = {};
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = DEFAULT.WHITE;
        }
        return color;
    };

    //广度优先搜索
    this.bfs = function(v, callback) {
        var color = initializeColor(),
            queue = new Queue();

        queue.enqueue(v);

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbours = adjList.get(u);
            color[u] = DEFAULT.GRAY;
            for (var i = 0; i < neighbours.length; i++) {
                var w = neighbours[i];
                if (color[w] === DEFAULT.WHITE) {
                    color[w] = DEFAULT.GRAY;
                    queue.enqueue(w);
                }
            }
            color[u] = DEFAULT.BLACK;
            if (callback) {
                callback(u);
            }
        }
    };

    //使用广度优先搜索算法来获取最短路径
    this.BFS = function(v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [],
            pred = [];

        queue.enqueue(v);

        for (var i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbours = adjList.get(u);
            color[u] = DEFAULT.GRAY;
            for (i = 0; i < neighbours.length; i++) {
                var w = neighbours[i];
                if (color[w] === DEFAULT.WHITE) {
                    color[w] = DEFAULT.GRAY;
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = DEFAULT.BLACK;
        }

        return {
            distances: d,
            predecessors: pred
        };
    };

    //深度优先搜索算法
    var dfsVisit = function(u, color, callback) {
        color[u] = DEFAULT.GRAY;
        if (callback) {
            callback(u);
        }
        var neighbours = adjList.get(u);
        for (var i = 0; i < neighbours.length; i++) {
            var w = neighbours[i];
            if (color[w] === DEFAULT.WHITE) {
                dfsVisit(w, color, callback);
            }
        }
        color[u] = DEFAULT.BLACK;
    };

    this.dfs = function(callback) {
        var color = initializeColor();

        for (var i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === DEFAULT.WHITE) {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    //使用深度优先搜索获取发现时间和探索时间
    var time = 0;

    var DFSVisit = function(u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = DEFAULT.GRAY;
        d[u] = ++time;
        var neighbours = adjList.get(u);

        for (var i = 0; i < neighbours.length; i++) {
            var w = neighbours[i];
            if (color[w] === DEFAULT.WHITE) {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = DEFAULT.BLACK;
        f[u] = ++time;
        console.log('explored ' + u);
    }

    this.DFS = function() {
        var color = initializeColor(),
            d = {},
            f = {},
            p = {};
        time = 0;

        for (var i = 0; i < vertices.length; i++) {
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === DEFAULT.WHITE) {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        };
    }

}
