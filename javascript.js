const add = function(n1, n2) {
    return  n1 + n2;
};

const subtract = function(n1, n2) {
    return n1 - n2;
};

const multiply = function(n1, n2) {
    return n1 * n2;
};

const divide = function(n1, n2) {
    return n1 / n2;
};

const operate = function(operator, n1, n2){
    if (operator === '+'){
        return add(n1, n1);
    } else if (operator === '-'){
        return subtract(n1, n2);
    } else if (operator === '*'){
        return multiply(n1, n2);
    } else if (operator === '/'){
        return divide(n1, n2);
    } else {
        return 'ERROR: it only accept +, -, / and * in string format plus 2 numbers';
    }
};

console.log(operate("/", 2, 3));