window.addEventListener("load", initialize);
let display;

function initialize(event) {
    display = document.querySelector("ul.display");
    display.addEventListener("mouseover", toggleSquare);
    display.addEventListener("mouseout", toggleSquare);
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

function toggleSquare(event) {
    target = event.target;
    if (target.className === "square") {
        target.className += " on";
    }
    else {
        target.className = "square";
    }
}