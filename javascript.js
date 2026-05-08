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
}

console.log(operate("/", 2, 3));

const display = document.querySelector("#display");
const v1 = document.querySelector("#v1");
const op = document.querySelector("#op");
const v2 = document.querySelector("#v2");
const buttons = document.querySelectorAll("button");
const result = document.querySelector("#result");

let numberOne = "";
let numberTwo = "";
let operatorSimbol = "";
let resultValue = "";

const numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "/", "*"];
const remove = ["⌫"];
const clearButton = ["clear"];
const equal = ["="];
const dot = ["."];

v2.textContent = "";
v1.textContent = ""; 
op.textContent = "";

function input(event){

    if (operatorSimbol === "" && numbers.includes(event.target.textContent)){ // first value
        numberOne = numberOne + event.target.textContent;
        v1.textContent = numberOne;
    }

    if (numbers.includes(event.target.textContent) && resultValue != ""){
        clear();
        resultValue = "";
        numberOne = numberOne + event.target.textContent;
        v1.textContent = numberOne;
    } // clean everything if a new number is typed before an operator, this, after the result is showed
    
    if (operatorSimbol != "" && numbers.includes(event.target.textContent)){ // second value
        numberTwo = numberTwo + event.target.textContent;
        v2.textContent = numberTwo;
    }

    if (event.target.textContent === "="){ // =
        let operacao = operate(operatorSimbol, Number(numberOne), Number(numberTwo));
        resultValue = operacao;
        result.textContent = operacao;
    }

    if (operators.includes(event.target.textContent) && resultValue){
        numberTwo = "";
        v2.textContent = numberTwo;

        numberOne = resultValue;
        v1.textContent = numberOne;
        operatorSimbol = event.target.textContent;
        op.operatorSimbol;
        result.textContent = "";
        resultValue = "";

    }

    if (event.target.textContent === "clear"){
        clear();
    }

    if (operators.includes(event.target.textContent)){
        operatorSimbol = event.target.textContent;
        op.textContent = operatorSimbol;
    }

    if (remove.includes(event.target.textContent)){
        if (v2.textContent != ""){
            numberTwo = numberTwo.slice(0, numberTwo.length - 1);
            v2.textContent = numberTwo;
        } else if (op.textContent != ""){
            operatorSimbol = "";
            op.textContent = operatorSimbol;
        } else if (v1.textContent != ""){
            numberOne = numberOne.slice(0, numberOne.length - 1);
            v1.textContent = numberOne;
        }
    }

    if (dot.includes(event.target.textContent)){

    }
}

function clear(){
    numberOne = "";
    numberTwo = "";
    operatorSimbol = "";
    v1.textContent = "";
    v2.textContent = "";
    op.textContent = "";
    result.textContent = "";
}

buttons.forEach(button => {
    button.addEventListener("click", input);
});