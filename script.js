let primaryValue = "";
let secondaryValue = "";
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
        primaryValue = add(value1, value2);
        Display.textContent = primaryValue;
    } else if (operand === "-") {
        primaryValue =  subtract(value1, value2);
        Display.textContent = primaryValue;
    } else if (operand === "*") {
        primaryValue =  multiply(value1, value2);
        Display.textContent = primaryValue;
        } else {
            primaryValue =  divide(value1, value2);
            Display.textContent = primaryValue;
        }
    }

function screenUpdate(number) {

    if (primaryValue === "") {  // erases contents of screen from previous entry.
        Display.textContent = "";
    }


        screenValue = screenValue + `${number}`;
        Display.textContent = screenValue;
        primaryValue = parseInt(screenValue);
        console.log(primaryValue);

    
}

const btnZero = document.querySelector("#zer");
btnZero.addEventListener('click', function (e) {
    return screenUpdate(0);
});

const btnOne = document.querySelector("#one");
btnOne.addEventListener('click', function (e) {
    return screenUpdate(1);
});

const btnTwo = document.querySelector("#two");
btnTwo.addEventListener('click', function (e) {
    return screenUpdate(2);
});

const btnThree = document.querySelector("#thr");
btnThree.addEventListener('click', function (e) {
    return screenUpdate(3);
});

const btnFour = document.querySelector("#fou");
btnFour.addEventListener('click', function (e) {
    return screenUpdate(4);
});

const btnFive = document.querySelector("#fiv");
btnFive.addEventListener('click', function (e) {
    return screenUpdate(5);
});

const btnSix = document.querySelector("#six");
btnSix.addEventListener('click', function (e) {
    return screenUpdate(6);
});

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

const btnAC = document.querySelector("#AC");
btnAC.addEventListener('click', function (e) {

    screenValue = 0;
    primaryValue = "";
    secondaryValue = "";
    Display.textContent = screenValue;
    screenValue = "";
    operand = "";
    displayOperand.textContent = "";

});

const btnAdd = document.querySelector("#plu");
btnAdd.addEventListener('click', function (e) {
    
    if (primaryValue !== "" && secondaryValue !== "") {
        operate(operand, primaryValue, secondaryValue);
    } else {    
        operand = "+";
        displayOperand.textContent = operand;
        secondaryValue = primaryValue;
        primaryValue = "";
        screenValue = "";
    }
});

const btnMinus = document.querySelector("#min");
btnMinus.addEventListener('click', function (e) {
    operand = "-";
});

const btnMultiply = document.querySelector("#mul");
btnMultiply.addEventListener('click', function (e) {
    operand = "*";

});

const btnDivide = document.querySelector("#div");
btnDivide.addEventListener('click', function (e) {
    operand = "/";
});

const btnEqual = document.querySelector("#equ");
btnEqual.addEventListener('click', function (e) {

    screenValue = "";
    Display.textContent = "";
    operate(operand, primaryValue, secondaryValue);

});

const Display = document.querySelector("#displayText");
const displayOperand = document.querySelector("#disOperand");
