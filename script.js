const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const funcBtns = document.querySelectorAll(".function");
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
let result = '';
let temp = '';
let operator = '';
let startNewNumber = true;
numberBtns.forEach(button => {
    button.addEventListener('click', e => {
        if(startNewNumber){
            display.value = '';
            startNewNumber = false;
        }
        display.value += e.target.id;
    })
});
funcBtns.forEach(button => {
    button.addEventListener('click', e => {
        if(result == '')
            result = display.value;
        else{
            result = operate(operator, parseInt(result), parseInt(display.value));
            display.value = result;
        } 
        startNewNumber = true;
        operator = e.target.id;
    })
});
equalBtn.onclick = (e) => {
    result = operate(operator, parseInt(result), parseInt(display.value));
    display.value = result;
    operator = '';
    result = '';
}
clearBtn.onclick = (e) => {
    display.value = '';
    operator = '';
    result = '';
}
function add(a, b){ return a+b; }
function multiply(a,b){ return a*b; }
function divide(a,b){ return a/b; }
function subtract(a,b){ return a-b; }
function operate(id, firstNum, secondNum){
    switch (id){
        case 'x':
            return multiply(firstNum,secondNum);
        case '/':
            return divide(firstNum,secondNum);
        case '+':
            return add(firstNum,secondNum);
        case '-':
            return subtract(firstNum,secondNum);
    }
}