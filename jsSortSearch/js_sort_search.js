function ArrayList() {
    var array = [];

    this.insert = function(item) {
        array.push(item);
    };

    this.toString = function() {
        return array.join();
    };

    //交换位置函数
    var swap = function(index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    //冒泡排序(时间复杂度O(n^2))
    this.bubbleSort = function() {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1; j++) {
                // console.log('compare ' + array[j] + ' with ' + array[j + 1]);
                if (array[j] > array[j + 1]) {
                    // console.log('swap ' + array[j] + ' with ' + array[j + 1]);
                    swap(j, j + 1);
                }
            }
        }
    };

    //改进后的冒泡排序
    this.modifiedBubbleSort = function() {
        var len = array.length;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    //选择排序算法(时间复杂度O(n^2))
    this.selectionSort = function() {
        var len = array.length,
            indexMin;

        for (var i = 0; i < len - 1; i++) {
            indexMin = i;
            for (var j = i; j < len; j++) {
                if (array[j] < array[indexMin]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin);
            }
        }
    };

    //插入排序算法(最优时间复杂度O(n),最差时间复杂度O(n^2))
    this.insertionSort = function() {
        var len = array.length,
            j,
            temp;

        for (var i = 1; i < len; i++) {
            j = i;
            temp = array[i];
            while (j > 0 && array[j - 1] > temp) {
                array[j] = array[j - 1];
                j--;
            }
            array[j] = temp;
        }
    };

    //希尔排序算法
    this.shellSort = function() {
        var len = array.length,
            j,
            temp;

        for (var gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (var i = gap; i < len; i++) {
                j = i;
                temp = array[i];
                while (j > 0 && array[j - gap] > temp) {
                    array[j] = array[j - gap];
                    j -= gap;
                }
                array[j] = temp;
            }
        }
    };

    //归并排序算法(时间复杂度O(nlogn))
    var merge = function(left, right) {
        var results = [],
            il = 0,
            ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                results.push(left[il++]);
            } else {
                results.push(right[ir++]);
            }
        }

        while (il < left.length) {
            results.push(left[il++]);
        }

        while (ir < right.length) {
            results.push(right[ir++]);
        }

        return results;
    };

    var mergeSortRec = function(array) {
        var len = array.length;
        if (len === 1) {
            return array;
        }
        var mid = Math.floor(len / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, len);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    this.mergeSort = function() {
        array = mergeSortRec(array);
    };

    //快速排序算法(时间复杂度O(nlogn))
    var swapQuickSort = function(array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };

    var partition = function(array, left, right) {
        var pivot = array[Math.floor((left + right) / 2)];
        // var pivot = array[left];
        var i = left,
            j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }
            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swapQuickSort(array, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    var quick = function(array, left, right) {
        var index;

        if (array.length > 1) {
            index = partition(array, left, right);

            if (left < index - 1) {
                quick(array, left, index - 1);
            }

            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    this.quickSort = function() {
        quick(array, 0, array.length - 1);
    };

    //调整数组形成最大堆
    var minHeapFixDown = function(i, len) {
        var j = 2 * i + 1,
            temp = array[i];

        while (j < len) {
            if (j + 1 < len && array[j + 1] > array[j]) {
                j++;
            }

            if (array[j] <= temp) {
                break;
            }

            array[i] = array[j];
            i = j;
            j = 2 * i + 1;
        }

        array[i] = temp;
    };

    this.minHeapFix = function() {
        for (var i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
            minHeapFixDown(i, array.length);
        }
    };

    //堆排序算法(时间复杂度O(nlogn))
    this.heapSort = function() {
        //创建最小堆
        this.minHeapFix();

        for (var i = array.length - 1; i > 0; i--) {
            swap(i, 0);
            minHeapFixDown(0, i);
        }
    };

    //顺序搜索算法
    this.sequentialSearch = function(item) {
        for (var i = 0; i < array.length; i++) {
            if (item === array[i]) {
                return i;
            }
        }

        return -1;
    };

    //找出最大数
    this.max = function() {
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }

        return max;
    };

    //找出最小数
    this.min = function() {
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (min > array[i]) {
                min = array[i];
            }
        }

        return min;
    };

    //二分折半搜索
    this.binarySearch = function(item) {
        //先对数组进行排序
        this.quickSort();

        var low = 0,
            high = array.length - 1,
            mid, elem;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            elem = array[mid];
            if (elem < item) {
                low = mid + 1;
            } else if (elem > item) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    };
}
