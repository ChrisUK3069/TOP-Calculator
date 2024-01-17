let value1 = 0;
let value2 = 0;
let operand = "";
let displayValue;
let screenValue = "";

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operate(operand, value1, value2) {
    if (operand === "+") {
        return add(value1, value2);
    } else if (operand === "-") {
         return subtract(value1, value2);
    } else if (operand === "*") {
         return multiply(value1, value2);
        } else {
         return divide(value1, value2);
        }
    }

function screenUpdate(number) {

    screenValue = screenValue + `${number}`;
    Display.textContent = screenValue;
    
}

const btnSeven = document.querySelector("#sev");
btnSeven.addEventListener('click', function (e) {
    return screenUpdate(7);
});

const btnEight = document.querySelector("#eig");
btnEight.addEventListener('click', function (e) {
    return screenUpdate(8);
});

const btnNine = document.querySelector("#nin");
btnNine.addEventListener('click', function (e) {
    return screenUpdate(9);
});

const Display = document.querySelector("#displayText");

console.log(operate("+", 4, 2));
console.log(operate("-", 15, 2));
console.log(operate("*", 5, 3));
console.log(operate("/", 12, 4));