// TODO stop user from inputting an operator in the wrong order ie first or consecutively

// #region variable declarations
let displayString = '';
let operationString = '';
let result = 0;

//#endregion

// #region Basic arithmetic functions + operate
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(input1, operator, input2) {
    switch(operator) {
        case '+':
            return add(input1, input2);
        case '-':
            return subtract(input1, input2);
        case '*':
            return multiply(input1, input2);
        case '/':
            return divide(input1, input2);
        default:
            return 'Error';        
    }
}
//#endregion

// #region Event listeners for digit buttons

const bZero = document.querySelector('#bZero'); 
bZero.addEventListener('click', function() {
    
    // Address case of zero being pressed first
    if (displayString !== '') {
        displayString += '0';
        display.innerHTML = displayString;
    }
});
const bOne = document.querySelector('#bOne');
bOne.addEventListener('click', function() {
    
    displayString += '1';
    display.innerHTML = displayString;

});
const bTwo = document.querySelector('#bTwo');
bTwo.addEventListener('click', function() {
    
    displayString += '2';
    display.innerHTML = displayString;

});
const bThree = document.querySelector('#bThree');
bThree.addEventListener('click', function() {
    
    displayString += '3';
    display.innerHTML = displayString;

});
const bFour = document.querySelector('#bFour');
bFour.addEventListener('click', function() {
    
    displayString += '4';
    display.innerHTML = displayString;

});
const bFive = document.querySelector('#bFive');
bFive.addEventListener('click', function() {
    
    displayString += '5';
    display.innerHTML = displayString;

});
const bSix = document.querySelector('#bSix');
bSix.addEventListener('click', function() {
    
    displayString += '6';
    display.innerHTML = displayString;

});
const bSeven = document.querySelector('#bSeven');
bSeven.addEventListener('click', function() {
    
    displayString += '7';
    display.innerHTML = displayString;

});
const bEight = document.querySelector('#bEight');
bEight.addEventListener('click', function() {
    
    displayString += '8';
    display.innerHTML = displayString;

});
const bNine = document.querySelector('#bNine');
bNine.addEventListener('click', function() {
    
    displayString += '9';
    display.innerHTML = displayString;

});

//#endregion

//#region event listeners for operators and special buttons
const clear = document.querySelector('#clear');
clear.addEventListener('click', function() {

    displayString = '';
    display.innerHTML = '0';
    operationString = '' ;
});

const bPlus = document.querySelector('#bPlus');
bPlus.addEventListener('click', () => {
    operationString += displayString;
    operationString += ' + '
    displayString = '';
});

const bMinus = document.querySelector('#bMinus');
bMinus.addEventListener('click', () => {
    operationString += displayString;
    operationString += ' - '
    displayString = '';
});

const bDivide = document.querySelector('#bDivide');
bDivide.addEventListener('click', () => {
    operationString += displayString;
    operationString += ' / '
    displayString = '';
});

const bMultiply = document.querySelector('#bMultiply');
bMultiply.addEventListener('click', () => {
    operationString += displayString;
    operationString += ' * '
    displayString = '';
});

//#endregion

// #region equals function - main logic of program is here
const bEquals = document.querySelector('#bEquals');
bEquals.addEventListener('click', () => {
    operationString += displayString;
    operationString = operationString.split(' ');
    for (let i = 1; i <= operationString.length - 1; i += 2) {
        if (operationString[i] === '*' || operationString[i] === '/') {
            result = operate(parseInt(operationString[i - 1]), operationString[i], parseInt(operationString[i + 1]));
            console.log(operationString)
            operationString.splice(i - 1, 3, result)
            console.log(operationString)
            i = 1;
        }
       
    } 
    while (operationString.length >= 3) {
        result = operate(parseInt(operationString[0]), operationString[1], parseInt(operationString[2]));
        operationString.splice(0, 3, result)
    }
    displayString = result
    display.innerHTML = displayString;
    operationString = '';
    displayString = '';
});

//#endregion