const container = document.querySelector("#container");

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

addBlocks(16);