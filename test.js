const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number");
const funcBtns = document.querySelectorAll(".function");
const equalBtn = document.querySelector("#equals");
const clearBtn = document.querySelector("#clear");
const decimalBtn = document.querySelector("#decimal");
let mathExp = [];

numberBtns.forEach(button => {
    button.addEventListener('click', e => {
        if (mathExp.length == 0 || isOperator(mathExp[mathExp.length-1])){
            mathExp.push(e.target.id);
            display.textContent += e.target.id;
        }
        else{
            mathExp[mathExp.length-1] += e.target.id;
            display.textContent += e.target.id;
        }
        console.log(e.target.id);
        console.log(mathExp);
    })
});
funcBtns.forEach(button => {
    button.addEventListener('click', e => {
        mathExp.push(e.target.id);
        display.textContent += e.target.id;
    })
});
equalBtn.onclick = (e) => operate(mathExp);

function add(a, b){ return a+b; }
function multiply(a,b){ return a*b; }
function divide(a,b){ return a/b; }
function subtract(a,b){ return a-b; }
function operate(expression){
    let index = (mathExp.indexOf('/') < mathExp.indexOf('x')) ? mathExp.indexOf('/'):mathExp.indexOf('x');
    while(index != -1){
        mathExp[index-1] = (mathExp[index] == '/') ? divide(mathExp[index-1], mathExp[index+1]) : 
            multiply(mathExp[index-1], mathExp[index+1]);
        mathExp.splice(index,2);
        index = (mathExp.indexOf('/') < mathExp.indexOf('x')) ? mathExp.indexOf('/'):mathExp.indexOf('x');
    }
    console.log(mathExp);
    index = (mathExp.indexOf('+') < mathExp.indexOf('-')) ? mathExp.indexOf('+'):mathExp.indexOf('-');
    while(index != -1){
        mathExp[index-1] = (mathExp[index] == '+') ? add(mathExp[index-1], mathExp[index+1]):
            subtract(mathExp[index-1], mathExp[index+1]);
        mathExp.splice(index,2);
        index = (mathExp.indexOf('+') < mathExp.indexOf('-')) ? mathExp.indexOf('+'):mathExp.indexOf('-');
    }
    display.textContent = mathExp[0];
    console.log(mathExp[0]);
    mathExp = [];
}
function isOperator(line){
    if(line === '/' || line === 'x' || line === '-' || line === '+')
        return true;
}