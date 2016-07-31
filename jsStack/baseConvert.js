function ten2two(num) {
    var remStack = new Stack(),
        rem,
        binaryString = '';

    while (num > 0) {
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }

    while (remStack.size() > 0) {
        binaryString += remStack.pop();
    }

    return binaryString;
}

function baseConvert(num, base) {
    var remStack = new Stack(),
        rem,
        baseString = '',
        digits = '0123456789ABCDEF';

    while (num > 0) {
        rem = Math.floor(num % base);
        remStack.push(rem);
        num = Math.floor(num / base);
    }

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }

    return baseString;
}
