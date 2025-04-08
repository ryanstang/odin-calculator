import * as displayService from '../displayService/displayService.js';
import calculation from '../calculation/calculation.js';

export function processNumClick (num) {
    displayService.addToDisplay(num);
}

export function processCClick () {
    displayService.resetDisplay();
    resetVariables();
}

export function processPlusMinusClick() {
    displayService.plusMinusDisplay();
}

export function processBackArrowClick() {
    displayService.removeFromDisplay();
}

export function processDotClick() {
    displayService.addDecimalDisplay();
}

export function processOperatorClick(opt) {
    const displayDiv = document.getElementById("display");
    let displayNumber = Number(displayDiv.textContent);

   if (['+', '-', '/', 'x'].includes(prevClick)) {
        operator = opt;
   } else if (currentTotal != null && prevClick != '=') {
        processEqualClick();
   } else {
        currentTotal = displayNumber;
        operator = opt;
        displayService.resetDisplay();
   }
}

export function processEqualClick() {
    const displayDiv = document.getElementById("display");
    let displayNumber = Number(displayDiv.textContent);

    currentNumber = displayNumber;
    currentTotal = calculation.operate(operator, currentTotal, currentNumber);
    displayService.showTotalDisplay(currentTotal);
}

function resetVariables() {
    currentTotal = null;
    currentNumber = null;
    prevClick = null;
    operator = null;
}

export function updatePrevClick (content) {
    prevClick = content;
}

let currentTotal;
let currentNumber;
let prevClick;
let operator;
