const container = document.querySelector("#container");
const gridButton = document.querySelector("button");

function randomRGBColor() {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}


function addBlocks(amount) {
    for (let j = 0; j < amount; j++) {
        for (let i = 0; i < amount; i++) {
            const newDiv = document.createElement("div");
            newDiv.style.height = (container.offsetHeight / amount) + "px";
            newDiv.style.width = (container.offsetWidth / amount) + "px";
            newDiv.style.backgroundColor = "#000000";

            container.appendChild(newDiv);
        }
    }
}

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = randomRGBColor();
});

gridButton.addEventListener("click", () => {
    let newAmount = prompt("Type the new grid size (min: 1, max: 100): ");
    if (newAmount < 0) {
        newAmount = 1;
    }
    else if (newAmount > 100) {
        newAmount = 100;
    }
    container.innerHTML = "";
    addBlocks(newAmount);
});

addBlocks(16);