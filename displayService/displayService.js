export function addToDisplay(newContent, prevClick) {
    const displayDiv = document.getElementById("display"); //string

    if (displayDiv.textContent === "0" || ['+', '-', '/', 'x', '='].includes(prevClick)) {
        displayDiv.textContent = newContent;
    } else {
        displayDiv.textContent += newContent;
    }
}

export function resetDisplay() {
    const displayDiv = document.getElementById("display");
    displayDiv.textContent = '0';
}

export function plusMinusDisplay() {
    const displayDiv = document.getElementById("display");
    if (displayDiv.textContent != '0') {
        let number = Number(displayDiv.textContent);
        number = -number;
        displayDiv.textContent = String(number);
    } 
}

export function removeFromDisplay() {
    const displayDiv = document.getElementById("display"); //string
    let curString = displayDiv.textContent;

    // check if current number is a sigle digit
    if (curString.replace(/^[-]+|[-]+$/g, '').length === 1) {
        displayDiv.textContent = '0';
    } else {
        displayDiv.textContent = curString.slice(0,-1);
    }
}

export function addDecimalDisplay() {
    const displayDiv = document.getElementById("display"); //string
    let curString = displayDiv.textContent;

    // check if current number is a sigle digit
    if (!curString.includes('.')) {
        displayDiv.textContent += '.';
    }
}

export function showTotalDisplay(num) {
    const displayDiv = document.getElementById("display");
    displayDiv.textContent = String(num);
}