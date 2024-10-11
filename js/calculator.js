var displayValue = '';
var lastValue = '';
var disableOperation = 'NO';
var firstOperation = 'YES';
var lastOperation = '';


function calculateResult(operationTypeToCalculate){
    switch (operationTypeToCalculate) {
        case 'Addition':
            return Number(lastValue) + Number(displayValue);
        case 'Subtraction':
            return Number(lastValue) - Number(displayValue);
        case 'Multiplication':
            return Number(lastValue) * Number(displayValue);
        case 'Division':
            return Number(lastValue) / Number(displayValue);
        case 'Equal':
            return Number(lastValue)
    }
}


function operation(operationType) {
    if(disableOperation=='NO') {
        if(firstOperation=='YES') {

            document.getElementById('calculatorDisplayResult').innerText = displayValue;
            document.getElementById('calculatorDisplayResult').style.color = '#595959';

            lastValue = displayValue;
            lastOperation = operationType;

            displayValue = '';
            firstOperation = 'NO';
            document.getElementById('calculatorDisplayText').innerText = 0;

        } else {            
            lastValue = calculateResult(lastOperation);
            
            
            lastOperation = operationType;
            
            displayValue = '';
            document.getElementById('calculatorDisplayResult').innerText = lastValue;           
            document.getElementById('calculatorDisplayText').innerText = 0;

        }
        if( operationType == 'Equal' ) {
            disableOperation = 'NO';
        } else {
            disableOperation = 'YES';
        }
    }
}


document.querySelector('#contentKeyboardLineButtonCE').addEventListener('click', function() {
    displayValue = '';
    lastValue = '';
    disableOperation = 'NO';
    firstOperation = 'YES';
    lastOperation = '';
    document.getElementById('calculatorDisplayText').innerText = 0;
    document.getElementById('calculatorDisplayResult').style.color = '#fff';
    document.getElementById('calculatorDisplayResult').innerText = 0;

    
});

document.querySelector('#contentKeyboardLineButtonBackspace').addEventListener('click', function() {
    displayValue = displayValue.toString().slice(0, -1);
    document.getElementById('calculatorDisplayText').innerText = displayValue;
});

document.querySelector('#contentKeyboardLineAddition').addEventListener('click', function() {
    operation('Addition');
});

document.querySelector('#contentKeyboardLineButtonSubtraction').addEventListener('click', function() {
    operation('Subtraction');
});

document.querySelector('#contentKeyboardLineButtonMultiplication').addEventListener('click', function() {
    operation('Multiplication');
});

document.querySelector('#contentKeyboardLineButtonDivision').addEventListener('click', function() {
    operation('Division');
});

document.querySelector('#contentKeyboardLineButtonEqual').addEventListener('click', function() {
    operation('Equal');
});

document.querySelector('#contentKeyboardLineButtonZero').addEventListener('click', function() {
    if( displayValue!='' ) {
        displayValue = displayValue + this.innerText;
        document.getElementById('calculatorDisplayText').innerText = displayValue;
        disableOperation='NO';
    } 
});

document.querySelector('#contentKeyboardLineButtonOne').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonTwo').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonThree').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonFour').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonFive').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonSix').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonSeven').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonEight').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});

document.querySelector('#contentKeyboardLineButtonNine').addEventListener('click', function() {
    displayValue = displayValue + this.innerText;
    document.getElementById('calculatorDisplayText').innerText = displayValue;
    disableOperation='NO';
});


/*
buttons.forEach( button => {
    button.addEventListener('click', function() {
        const buttonValue = this.innerText;
        if (buttonValue=='CE' | ( buttonValue==0 & displayValue==0 ) ) {
            displayValue = 0;
            lastValue = 0;
            lastOperation = 0;
            firtInputValue = 'YES';
            document.getElementById('calculatorDisplayText').innerText = displayValue;
        } else if (keyinputNewValue=='YES') {
            displayValue = buttonValue;
            keyinputNewValue='NO';
        } else if ( buttonValue>=0 & buttonValue<=9 | buttonValue=='.' ) { 
            displayValue = displayValue.toString() + buttonValue;
        } else if ( buttonValue=='⌫' ) {
            displayValue = displayValue.toString().slice(0, -1);
        } else {
            if( buttonValue=='+' ) {
                if ( firtInputValue == 'YES' ) {
                    lastValue = displayValue;
                    lastOperation = buttonValue;
                    firtInputValue = 'NO';
                } else {
                    displayValue = Number(lastValue) + Number(displayValue);
                    lastValue = displayValue;
                }                
                lastOperation = buttonValue;
                keyinputNewValue='YES';
                displayValue = lastValue;
            } else if (buttonValue=='-') {
                if ( firtInputValue == 'YES' ) {
                    lastValue = displayValue;
                    lastOperation = buttonValue;
                    firtInputValue = 'NO';
                } else {
                    displayValue = Number(lastValue) - Number(displayValue);
                    lastValue = displayValue;
                }                
                lastOperation = buttonValue;
                keyinputNewValue='YES';
                displayValue = lastValue;
            } else if (buttonValue=='X') {
                if ( firtInputValue == 'YES' ) {
                    lastValue = displayValue;
                    lastOperation = buttonValue;
                    firtInputValue = 'NO';
                } else {
                    displayValue = Number(lastValue) * Number(displayValue);
                    lastValue = displayValue;
                }                
                lastOperation = buttonValue;
                keyinputNewValue='YES';
                displayValue = lastValue;
            } else if (buttonValue=='/') {
                if ( firtInputValue == 'YES' ) {
                    lastValue = displayValue;
                    lastOperation = buttonValue;
                    firtInputValue = 'NO';
                } else {
                    displayValue = Number(lastValue) / Number(displayValue);
                    lastValue = displayValue;
                }                
                lastOperation = buttonValue;
                keyinputNewValue='YES';
                displayValue = lastValue;
            }
        }


        
    });
});

*/