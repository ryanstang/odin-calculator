import * as buttonClickService from './buttonClickService.js'


// add onClick to each button
function addButtonClickRouter () {
    const colDiv = document.getElementsByClassName("col");

    Array.from(colDiv).forEach(col => {
        const buttonDiv = col.getElementsByTagName("button");
        Array.from(buttonDiv).forEach (button => {
            button.addEventListener('click', (e) => {routeButtonBasedOnContent(e)});
        })
    });
}

// route button click based on content in button
function routeButtonBasedOnContent (button) {
    const buttonContent = button.target.textContent; //string
    
    if (!isNaN(buttonContent)) {
        buttonClickService.processNumClick(buttonContent);
    } else if (buttonContent === 'C') {
        buttonClickService.processCClick();
    } else if (buttonContent === '+/-') {
        buttonClickService.processPlusMinusClick();
    } else if (buttonContent === '->') {
        buttonClickService.processBackArrowClick();
    } else if (buttonContent === '.') {
        buttonClickService.processDotClick();
    } else if (['+', '-', '/', 'x'].includes(buttonContent)) {
        buttonClickService.processOperatorClick(buttonContent);
    } else { // = sign
        buttonClickService.processEqualClick();
    }

    buttonClickService.updatePrevClick(buttonContent);
    /*
    if operator(+, -, x, /) is clicked
        if prevClick is operator
            replace operator if different
        if currentTotal is already saved and prev is not =
            calculate currentTotal, currentNumber, operator
        else
            save display to currentTotal
            save operator
            clear display
    if = is clicked
       calculate currentTotal, currentNumber, operator 
    */
}

addButtonClickRouter();