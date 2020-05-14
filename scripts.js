// Basic arithmetic functions
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

displayString = ''

// Event listeners for buttons
const clear = document.querySelector('#clear')
clear.addEventListener('click', function() {

    displayString = ''
    display.innerHTML = '0'    
});


const bZero = document.querySelector('#bZero') 
bZero.addEventListener('click', function() {
    
    // Address case of zero being pressed first
    if (displayString !== '') {
        displayString += '0';
        display.innerHTML = displayString;
    }
});
const bOne = document.querySelector('#bOne')
bOne.addEventListener('click', function() {
    
    displayString += '1';
    display.innerHTML = displayString;

});
const bTwo = document.querySelector('#bTwo')
bTwo.addEventListener('click', function() {
    
    displayString += '2';
    display.innerHTML = displayString;

});
const bThree = document.querySelector('#bThree')
bThree.addEventListener('click', function() {
    
    displayString += '3';
    display.innerHTML = displayString;

});
const bFour = document.querySelector('#bFour')
bFour.addEventListener('click', function() {
    
    displayString += '4';
    display.innerHTML = displayString;

});
const bFive = document.querySelector('#bFive')
bFive.addEventListener('click', function() {
    
    displayString += '5';
    display.innerHTML = displayString;

});
const bSix = document.querySelector('#bSix')
bSix.addEventListener('click', function() {
    
    displayString += '6';
    display.innerHTML = displayString;

});
const bSeven = document.querySelector('#bSeven')
bSeven.addEventListener('click', function() {
    
    displayString += '7';
    display.innerHTML = displayString;

});
const bEight = document.querySelector('#bEight')
bEight.addEventListener('click', function() {
    
    displayString += '8';
    display.innerHTML = displayString;

});
const bNine = document.querySelector('#bNine')
bNine.addEventListener('click', function() {
    
    displayString += '9';
    display.innerHTML = displayString;

});

