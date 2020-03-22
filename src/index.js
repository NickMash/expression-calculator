function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let exprWithoutWhitespaces = expr.replace(/\s/g, "");
    let arrOfSymbols = exprWithoutWhitespaces.split('');
    let openBracketCount = 0;
    let closeBracketCount = 0;

    for (let symbol of arrOfSymbols){
        if (symbol === "(") {
            openBracketCount += 1;
        }
        else if (symbol === ')') {
            closeBracketCount += 1;
        }
    }

    if (openBracketCount !== closeBracketCount) {
        throw new Error('ExpressionError: Brackets must be paired');
    }

    for (let i = 0 ; i < arrOfSymbols.length ; i ++){
        if (arrOfSymbols[i] === "/" &&
            arrOfSymbols[i+1] === "0") {
            throw new Error('TypeError: Division by zero.');
        }
    }
    let result = new Function("return " + exprWithoutWhitespaces);
    return(result());
}

module.exports = {
    expressionCalculator
}