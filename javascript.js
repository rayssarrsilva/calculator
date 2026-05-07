const add = function(n1, n2) {
    Number(n1);
    Number(n2);
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
        return add(n1, n2);
    } else if (operator === '-'){
        return subtract(n1, n2);
    } else if (operator === '*'){
        return multiply(n1, n2);
    } else if (operator === '/'){
        return divide(n1, n2);
    } else {
        return 'ERROR';
    }
};

console.log(operate("/", 2, 3));

let numberOne = "";
let numberTwo = "";
let operatorSimbol = "";

const display = document.querySelector("#display");
const v1 = document.querySelector("#v1");
const op = document.querySelector("#op");
const v2 = document.querySelector("#v2");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

const numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "/", "*"];
const remove = ["⌫"];
const clear = ["clear"];
const equal = ["="];

v2.textContent = "";
v1.textContent = ""; 
op.textContent = "";


function input(event){
    if (operatorSimbol === ""){
        numberOne = numberOne + event.target.textContent;
        v1.textContent = numberOne;
    }
    
    if (operators.includes(event.target.textContent)){
        operatorSimbol = event.target.textContent;
        op.textContent = operatorSimbol;
    }

    if (operatorSimbol != "" && numbers.includes(event.target.textContent)){
        numberTwo = numberTwo + event.target.textContent;
        v2.textContent = numberTwo;
    }

    if (event.target.textContent === "="){
        let operacao = operate(operatorSimbol, Number(numberOne), Number(numberTwo));
        result.textContent = operacao;
    }

    if (event.target.textContent === "clear"){
            numberOne = "";
            numberTwo = "";
            operatorSimbol = "";
            v1.textContent = "";
            v2.textContent = "";
            op.textContent = "";
            result.textContent = "";
        }
}

function clickOperator(event){
    if (operators.includes(event.target.textContent)){
        operatorSimbol = event.target.textContent;
        op.textContent = operatorSimbol;
    }
    return operatorSimbol;
}