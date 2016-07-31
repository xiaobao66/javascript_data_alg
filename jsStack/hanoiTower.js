var hanoiTower = function(n, from, helper, dest) {
	var temp;
    if (n > 0) {
        hanoiTower(n - 1, from, dest, helper);
        dest.push(from.pop());
        console.log('---');
        console.log('sourc: ' + from.toString());
        console.log('helper: ' + helper.toString());
        console.log('dest: ' + dest.toString());
        hanoiTower(n - 1, helper, from, dest);
    }
}
