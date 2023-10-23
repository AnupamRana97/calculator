let displayValue = '';
let firstOperand = null;
let operator = null;

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    operator = null;
    document.getElementById('display').value = '';
}

function operate(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operator = op;
        displayValue = '';
        document.getElementById('display').value = '';
    } else {
        calculate();
        operator = op;
    }
}

function calculate() {
    if (firstOperand !== null && operator !== null) {
        const secondOperand = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = (firstOperand + secondOperand).toString();
                break;
            case '-':
                displayValue = (firstOperand - secondOperand).toString();
                break;
            case '*':
                displayValue = (firstOperand * secondOperand).toString();
                break;
            case '/':
                displayValue = (firstOperand / secondOperand).toString();
                break;
        }
        document.getElementById('display').value = displayValue;
        firstOperand = null;
        operator = null;
    }
}
