export function addToDisplay(newContent) {
    const displayDiv = document.getElementById("display");

    if (displayDiv.textContent === 0) {
        displayDiv.textContent = newContent;
    } else {
        displayDiv.textContent += newContent;
    }
}