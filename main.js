let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number){
    currentInput+=number;
     display.innerText = currentInput;
}

function appendOperator(op){
    firstOperand = currentInput;
    operator = op;
    currentInput = '';
    display.innerText = operator;
}

function clearDisplay(){
    currentInput = '';
    firstOperand = '';
    operator = '';

    display.innerText = '0';
}

function calculateResult(){
    if(currentInput === '' || firstOperand ==='' || operator ==='') return;

    let result;

    switch(operator){
        case '+':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;

        case '-':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;

        case '*':
            result = parseFloat(firstOperand) + parseFloat(currentInput);  
            break;
            
        case '/':
            result = parseFloat(firstOperand) + parseFloat(currentInput);
            break;
         
         default:
            return;   
    }
     
    display.innerText = result;
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
}
