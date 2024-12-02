window.addEventListener("load", initialize);
let display;

function initialize(event) {
    display = document.querySelector("ul.display");
    display.addEventListener("mouseover", squareOn);
    initializeDisplay(16, 16);
}

function initializeDisplay(width, height) {
    for (let y=0; y < height; y++) {
        let row = document.createElement("li");
        row.className = "row";
        for (let x=0; x < width; x++) {
            let square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
        display.appendChild(row);
    }
}

function squareOn(event) {
    target = event.target;
    target.className = "square on";
}