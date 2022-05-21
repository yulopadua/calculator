//functions for basic math operators
function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

//function that takes an operator and 2 numbers then call one of the above functions
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b)
    } else if (operator === "/") {
        return divide(a, b)
    }
};

const numBtn = document.querySelectorAll('.num-btn');
const displayPreview = document.querySelector('.display-preview');

let firstValue = '';

numBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        firstValue += btn.value;
        displayPreview.textContent = `${firstValue}`;
    })
});