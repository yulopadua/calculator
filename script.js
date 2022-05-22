//functions for basic math operators
function add(a, b){
    return Math.round((a + b) * 100) / 100;
};

function subtract(a, b){
    return Math.round((a - b) * 100) / 100;
};

function multiply(a, b){
    return Math.round((a * b) * 100) / 100;
};

function divide(a, b){
    if (b === 0) {
        return "Error";
    }

    return Math.round((a / b) * 100) / 100;
};

//function that takes an operator and 2 numbers then call one of the above functions
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "−") {
        return subtract(a, b)
    } else if (operator === "×") {
        return multiply(a, b)
    } else if (operator === "÷") {
        return divide(a, b)
    }
};

function clear() {
    storedValue = '';
    firstValue = '';
    operatorValue = '';
    displayResult.textContent = '';
}

function calculate() {
    result = operate(operatorValue, parseInt(firstValue), parseInt(storedValue));
    displayResult.textContent = result;
}

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const displayResult = document.querySelector('.result');

let storedValue = '';
let firstValue = '';
let operatorValue = '';
let result = '';

numberButton.forEach(number => {
    number.addEventListener('click', () => {
        storedValue += number.value;
        displayResult.textContent = storedValue;
        console.log(`Stored: ${storedValue}`)
     })
});

operatorButton.forEach(operator => {
    operator.addEventListener('click', () => {
    
        firstValue = storedValue;
        console.log(`First: ${firstValue}`)

        operatorValue = operator.value;
        displayResult.textContent = operatorValue;
        storedValue = '';
    })
});

equalButton.addEventListener('click', calculate)

clearButton.addEventListener('click', clear)