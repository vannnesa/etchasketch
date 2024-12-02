window.addEventListener("load", initialize);
let display, redrawButton;

function initialize(event) {
    display = document.querySelector("ul.display");
    redrawButton = document.getElementById("redraw");
    display.addEventListener("mouseover", squareOn);
    redrawButton.addEventListener("click", redrawDisplay)
    initializeDisplay(16, 16);
}

function initializeDisplay(width, height) {
    squareDimension = String(Math.floor(960/height)) + "px";
    display.textContent = '';
    for (let y=0; y < height; y++) {
        let row = document.createElement("li");
        row.className = "row";
        row.style.maxHeight = squareDimension;
        for (let x=0; x < width; x++) {
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = squareDimension;
            square.style.height = squareDimension;
            row.appendChild(square);
        }
        display.appendChild(row);
    }
}

function redrawDisplay(event) {
    let size = parseInt(prompt("How many squares to a side?"));
    if (Number.isInteger(size) && size > 0 && size <= 100) {
        initializeDisplay(size, size);
    }
    else {
        alert("Please choose a round number between 1 and 100.");
    }
}

function squareOn(event) {
    target = event.target;
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    if (!(target.style.opacity)) {
        target.style.opacity = "0.1"
    }
    if (parseFloat(target.style.opacity) < 1) {
        target.style.opacity = String(parseFloat(target.style.opacity) + 0.1);
    }
}