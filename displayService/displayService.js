export function addToDisplay(newContent) {
    const displayDiv = document.getElementById("display"); //string

    if (displayDiv.textContent === "0") {
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