import * as buttonClickService from './buttonClickService.js'


// add onClick to each button
function addButtonClickRouter () {
    const colDiv = document.getElementsByClassName("col");

    Array.from(colDiv).forEach(col => {
        const buttonDiv = col.getElementsByTagName("button");
        Array.from(buttonDiv).forEach (button => {
            button.addEventListener('click', (e) => {routeButtonBasedOnContent(e)});
            button.addEventListener('click', (e) => {highlightOperatorButton(e)});
        })
    });
}

function highlightOperatorButton() {
    const buttons = document.getElementById('buttons');
    let prevSelectedButton = null;

    buttons.addEventListener('click', (e) => {
        if (prevSelectedButton) {
            prevSelectedButton.classList.remove('selected');
        }

        if (['+', '-', '/', 'x'].includes(e.target.textContent)) {
            e.target.classList.add('selected');
            prevSelectedButton = e.target;
        }
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
}

addButtonClickRouter();