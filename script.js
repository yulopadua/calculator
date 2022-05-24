class Calculator {
    constructor(previousOperandDisplay, currentOperandDisplay) {
        this.previousOperandDisplay = previousOperandDisplay;
        this.currentOperandDisplay = currentOperandDisplay;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
    
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperator(operator) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if(isNaN(prev) || isNaN(current)) return;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break
            case '−':
                result = prev - current;
                break
            case '×':
                result = prev * current;
                break
            case '÷':
                if (current === 0) {
                    alert("Can't divide by zero!");
                    this.clear();
                    return
                }
                result = prev / current;
                break
            default:
                return;
        }

        this.currentOperand = result;
        this.operator = undefined;
        this.previousOperand = '';
    }

    updateDisplay() {
        this.currentOperandDisplay.innerText = this.currentOperand;
        if (this.operator != null) {
            this.previousOperandDisplay.innerText = `${this.previousOperand} ${this.operator}`;
        } else {
            this.previousOperandDisplay.innerText = '';
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-clear]');
const deleteButton = document.querySelector('[data-delete]');
const previousOperandDisplay = document.querySelector('[data-previous-operand]');
const currentOperandDisplay = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandDisplay, currentOperandDisplay);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        console.log(button.innerText)
        calculator.updateDisplay()
    })
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText)
        console.log(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();
})

clearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
})

window.addEventListener('keydown', handleKeyboardInput)

function handleKeyboardInput(e) {
    if ((e.key >= 0 && e.key <= 9) || (e.key === '.')) {
        calculator.appendNumber(e.key);
        calculator.updateDisplay();
    }
        
    if (e.key === '=' || e.key === 'Enter') {
        calculator.calculate();
        calculator.updateDisplay();
    } 

    if (e.key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    }

    if (e.key === 'Delete') {
        calculator.clear();
        calculator.updateDisplay();
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        calculator.chooseOperator(convertOperator(e.key));
        calculator.updateDisplay();
    }
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
}