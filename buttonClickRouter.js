
// add onClick to each button
function addButtonClickRouter () {

}

// route button click based on content in button
function routeButtonBasedOnContent () {
    /*
    if num is click 
        update calculator display
    if operator(+, -, x, /) is clicked
        if prevClick is operator
            replace operator if different
        if currentTotal is already saved and prev is not =
            calculate currentTotal, currentNumber, operator
        else
            save display to currentTotal
            save operator
            clear display
    if +/- is clicked
        change display to plus/minus (unless it is 0, dont chage)
    if C is clicked 
        clear every variable and display
    if -> is clicked 
        delete last number 
            if 1 digit, make display 0
    if = is clicked
       calculate currentTotal, currentNumber, operator 
    if . is clicked
        if not already a dot in display
            add a dot
    */
}

let currentTotal;
let currentNumber;
let prevClick;
let operator;
addButtonClickRouter();