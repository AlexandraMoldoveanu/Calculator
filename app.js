//Right now it works with 2 flows:
// - chaining operatorS: 3*3*2/2+3+5
// -simple pairs with equal : 2+3=5 -2= 3*7=21
// It doesnt work if I chain an operator after equal: 20-5 = 15 + 5 - 3



let userInput = document.querySelector(".user-input");
let calculatorButtons = document.querySelectorAll(".calculator-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let clearButton = document.querySelector(".clear-button");
let equalButton = document.querySelector(".equal-button");
let operand1;
let operand2;
let operator;
let result;

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const operate = (operatorString, num1, num2) => {
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    switch (operatorString) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}
const isOperatorActive = () => {
    for(let i = 0; i < operatorButtons.length; i++){   
        if(operatorButtons[i].style.backgroundColor === "rgb(237, 145, 33)"){   
            return true;
        }
    }
    return false;
}

const resetValues = () => {
    operand1 = undefined;
    operand2 = undefined;
    operator = undefined;
    clearAll();
}

const displayUserInput = (event) => {
     userInput.innerText += event.target.innerText;
    if(isOperatorActive()){
        clearAll();
        userInput.innerText += event.target.innerText;
        };
    }   


const clearAll = (event) => {
    userInput.innerText = "";
    operatorButtons.forEach(button => {
        button.style.backgroundColor = "teal";
    });
    equalButton.style.backgroundColor = "teal";

}


const setCalcValues = (event) => {
    equalButton.style.backgroundColor = "teal";
    if(resetOperator1) {
        operand1 = userInput.innerText;
        operator = event.target.innerText;
        event.target.style.backgroundColor = "rgb(237,145,33)"; 
    } 

    else if (operand1){
        operand2 = userInput.innerText;
        result = operate(operator, operand1, operand2);
        userInput.innerText = result;
    } 
        operand1 = userInput.innerText;
        operator = event.target.innerText;
        event.target.style.backgroundColor = "rgb(237,145,33)";
    
    
     
}


const showResult = (event) => {
    event.target.style.backgroundColor = "rgb(237,145,33)";
    operand2 = userInput.innerText;
    result = operate(operator, operand1, operand2);
    userInput.innerText = result;
    console.log(operand1);
    console.log(operator);
    console.log(operand2);
    resetOperator1 = true;
}

let resetOperator1 = false;

calculatorButtons.forEach( button =>{
    button.addEventListener("click", displayUserInput);
}) 
operatorButtons.forEach( button => {
    button.addEventListener("click", setCalcValues);
})
clearButton.addEventListener("click", resetValues);
equalButton.addEventListener("click", showResult)



