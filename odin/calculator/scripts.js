let numbers = {
    a: "",
    b: ""
};
let operator = "";
let currentNumber = "a";

function updateDisplay() {
    const display = document.querySelector("#display h2");
    display.textContent = numbers[currentNumber];
}

function clear() {
    numbers = {
        a: "",
        b: ""
    };
    operator = "";
    currentNumber = "a";
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
}

const numbersPanel = document.querySelector("#numbersPanel");
numbersPanel.addEventListener("click", (e) => {
    if (e.target.classList.contains("number")) {
        let newNumber = e.target.textContent;
        if (numbers[currentNumber] !== "") {
            newNumber = numbers[currentNumber].concat(newNumber);
        }
        numbers = {
            ...numbers,
            [currentNumber]: newNumber
        }
        updateDisplay();
    }
});



