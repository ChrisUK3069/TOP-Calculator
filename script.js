let primaryValue = "";
let secondaryValue = "";
let operand = "";
let displayValue;
let screenValue = "";
let sum = "";
dbZero = false;

function divideByZero() {
    if (operand == "/" && primaryValue === 0) {
        console.log("Cannot Divide By Zero");
        Display.textContent = "";
        Display.textContent = "Cannot Divide By Zero!";
        let primaryValue = "";
        let secondaryValue = "";
        let operand = "";
        let displayValue;
        let screenValue = "";
        let sum = "";
        dbZero = true;

    }
}

function add(number1, number2) {
    console.log("function add:" + number1, number2);
     sum = number1 + number2;
     console.log("SUM: " + sum);
     console.log(typeof sum);
     return sum;
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
    } else if (operand === "/") {
        return divide(value1, value2);
    } 

}

function screenUpdate(number) {
    
    Display.textContent = "";
    Display.textContent = number;



    
}

const btnZero = document.querySelector("#zer");
btnZero.addEventListener('click', function (e) {
    primaryValue = primaryValue + 0;
    screenUpdate(primaryValue);
});

const btnOne = document.querySelector("#one");
btnOne.addEventListener('click', function (e) {
    
    primaryValue = primaryValue + 1;
    screenUpdate(primaryValue);
    console.log("function btnOne: " + primaryValue);
});

const btnTwo = document.querySelector("#two");
btnTwo.addEventListener('click', function (e) {

    primaryValue = primaryValue + 2;
    screenUpdate(primaryValue);
    console.log("function btnTwo: " + primaryValue);
});

const btnThree = document.querySelector("#thr");
btnThree.addEventListener('click', function (e) {
    primaryValue = primaryValue + 3;
    screenUpdate(primaryValue);
});

const btnFour = document.querySelector("#fou");
btnFour.addEventListener('click', function (e) {
    primaryValue = primaryValue + 4;
    screenUpdate(primaryValue);
});

const btnFive = document.querySelector("#fiv");
btnFive.addEventListener('click', function (e) {
    primaryValue = primaryValue + 5;
    screenUpdate(primaryValue);
});

const btnSix = document.querySelector("#six");
btnSix.addEventListener('click', function (e) {
    primaryValue = primaryValue + 6;
    screenUpdate(primaryValue);
});

const btnSeven = document.querySelector("#sev");
btnSeven.addEventListener('click', function (e) {
    primaryValue = primaryValue + 7;
    screenUpdate(primaryValue);
});

const btnEight = document.querySelector("#eig");
btnEight.addEventListener('click', function (e) {
    primaryValue = primaryValue + 8;
    screenUpdate(primaryValue);
});

const btnNine = document.querySelector("#nin");
btnNine.addEventListener('click', function (e) {
    primaryValue = primaryValue + 9;
    screenUpdate(primaryValue);
});

const btnAC = document.querySelector("#AC");
btnAC.addEventListener('click', function (e) {

    screenValue = 0;
    primaryValue = "";
    secondaryValue = "";
    Display.textContent = screenValue;
    screenValue = "";
    operand = "";
    sum = "";
    dbZero = false;
    displayOperand.textContent = "";

});

const btnAdd = document.querySelector("#plu");
btnAdd.addEventListener('click', function (e) {
    
    displayOperand.textContent = "";
    operand = "+";
    displayOperand.textContent = operand;

    primaryValue = parseFloat(primaryValue);
    console.log(typeof primaryValue);
    if (secondaryValue === "") {    // To run on first entry
        secondaryValue = primaryValue;
        primaryValue = "";
    } else {                        // To run when both variables contain values
        
        if (sum === "") {
            sum = operate(operand, primaryValue, secondaryValue);
            console.log("function btnAdd, both values full, empty to full sum" + sum);
            screenUpdate(sum);
            primaryValue = "";
            // secondaryValue = "";
        } else {
            console.log("function btnAdd, both values full, pre operate() call" + sum)
            sum = operate(operand, sum, primaryValue);
            sum = Math.round(sum * 10) / 10;
            console.log("function btnAdd, both values full, post operate() call" + sum)
            screenUpdate(sum);
            primaryValue = "";
        }
    }


});

const btnMinus = document.querySelector("#min");
btnMinus.addEventListener('click', function (e) {
    
    displayOperand.textContent = "";
    operand = "-";
    displayOperand.textContent = operand;

    primaryValue = parseFloat(primaryValue);
    if (secondaryValue === "") {    // To run on first entry
        secondaryValue = primaryValue;
        primaryValue = "";
    } else {                        // To run when both variables contain values
        
        if (sum === "") {
            sum = operate(operand, secondaryValue, primaryValue);
            console.log("function btnAdd, both values full, empty to full sum" + sum);
            screenUpdate(sum);
            primaryValue = "";
            // secondaryValue = "";
        } else {
            console.log("function btnAdd, both values full, pre operate() call" + sum)
            sum = operate(operand, sum, primaryValue);
            sum = Math.round(sum * 10) / 10;
            console.log("function btnAdd, both values full, post operate() call" + sum)
            screenUpdate(sum);
            primaryValue = "";
        }
    }
});

const btnMultiply = document.querySelector("#mul");
btnMultiply.addEventListener('click', function (e) {

    displayOperand.textContent = "";
    operand = "*";
    displayOperand.textContent = operand;

    primaryValue = parseFloat(primaryValue);
    if (secondaryValue === "") {    // To run on first entry
        secondaryValue = primaryValue;
        primaryValue = "";
    } else {                        // To run when both variables contain values
        
        if (sum === "") {
            sum = operate(operand, secondaryValue, primaryValue);
            console.log("function btnAdd, both values full, empty to full sum" + sum);
            screenUpdate(sum);
            primaryValue = "";
            // secondaryValue = "";
        } else {
            console.log("function btnAdd, both values full, pre operate() call" + sum)
            sum = operate(operand, sum, primaryValue);
            sum = Math.round(sum * 10) / 10;
            console.log("function btnAdd, both values full, post operate() call" + sum)
            screenUpdate(sum);
            primaryValue = "";
        }
    }

});

const btnDivide = document.querySelector("#div");
btnDivide.addEventListener('click', function (e) {
   
    displayOperand.textContent = "";
    operand = "/";
    displayOperand.textContent = operand;

    primaryValue = parseFloat(primaryValue);
    divideByZero();
    if (dbZero === true) {
        console.log("Error, Cannot Divide by Zero, all values reset.");
    } else {

        if (secondaryValue === "") {    // To run on first entry
            secondaryValue = primaryValue;
           primaryValue = "";
        } else {                        // To run when both variables contain values
        
          if (sum === "") {
              sum = operate(operand, secondaryValue, primaryValue);
             console.log("function btnAdd, both values full, empty to full sum" + sum);
             screenUpdate(sum);
             primaryValue = "";
             // secondaryValue = "";
          } else {
                console.log("function btnAdd, both values full, pre operate() call" + sum)
             sum = operate(operand, sum, primaryValue);
             sum = Math.round(sum * 10) / 10;
            
              console.log("function btnAdd, both values full, post operate() call" + sum)
              screenUpdate(sum);
                primaryValue = "";
            }
        }
    }
});

const btnEqual = document.querySelector("#equ");
btnEqual.addEventListener('click', function (e) {
    
    primaryValue = parseFloat(primaryValue);
    divideByZero();



    if (dbZero === true) {
        console.log("Error, Cannot Divide by Zero, all values reset.");
    } else {

  
        if (secondaryValue === "") {    // no other value to operate on
        displayOperand.textContent = "";
        operand = "=";
        displayOperand.textContent = operand;
        } else {  
        sum = operate(operand, secondaryValue, primaryValue);
        sum = Math.round(sum * 10) / 10;
        screenUpdate(sum);
        primaryValue = sum;
        secondaryValue = "";
        sum = "";
            console.log(sum);
        }
    }
    
});

const btnDot = document.querySelector("#dot");
btnDot.addEventListener('click', function (e) {
    primaryValue = primaryValue + ".";
    screenUpdate(primaryValue);
});

const Display = document.querySelector("#displayText");
const displayOperand = document.querySelector("#disOperand");
