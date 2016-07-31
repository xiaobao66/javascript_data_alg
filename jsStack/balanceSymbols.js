var match = function(open, close) {
    var opens = '([{',
        closes = ')]}';
    return opens.indexOf(open) === closes.indexOf(close);
}

var campareSymbols = function(symbols) {
    var symbolStack = new Stack(),
        balance = true,
        index = 0,
        symbol, top;

    while (index < symbols.length && balance) {
        symbol = symbols.charAt(index);

        if (symbol === '(' || symbol === '[' || symbol === '{') {
            symbolStack.push(symbol);
        } else if (symbol === ')' || symbol === ']' || symbol === '}') {
            if (symbolStack.isEmpty()) {
                balance = false;
            } else {
                top = symbolStack.pop();
                if (!match(top, symbol)) {
                    balance = false;
                }
            }
        }
        index++;
    }

    if(balance && symbolStack.isEmpty()) {
    	return true;
    }

    return false;
}
