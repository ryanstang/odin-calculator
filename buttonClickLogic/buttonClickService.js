import * as displayService from '../displayService/displayService.js';

export function processNumClick (num) {
    displayService.addToDisplay(num);
}

export function processCClick () {
    displayService.resetDisplay();
    resetVariables();
}

export function resetVariables() {
    currentTotal = null;
    currentNumber = null;
    prevClick = null;
    operator = null;
}

let currentTotal;
let currentNumber;
let prevClick;
let operator;
