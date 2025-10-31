let numbers = {
    a: "",
    b: ""
};
let operator = "";
let currentNumber = "a";

function updateDisplay() {
    const display = document.querySelector("#display h2");
    display.textContent = numbers.a + operator + numbers.b;
}

function clear() {
    numbers = {
        a: "",
        b: ""
    };
    operator = "";
    currentNumber = "a";
    updateDisplay();
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

function showResult() {
    if (numbers.a && numbers.b && operator) {
        let result = operate(operator, parseInt(numbers.a), parseInt(numbers.b));
        clear();
        numbers = {
            a: result.toString(),
            b: ""
        };
        updateDisplay();
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

const operatorsPanel = document.querySelector("#operatorsPanel");
operatorsPanel.addEventListener("click", (e) => {
    if (e.target.classList.contains("operator")) {
        if (operator === "" || numbers.b === "") {
            operator = e.target.textContent;
            currentNumber = "b";
        }
        else if (operator !== "" && numbers.b !== "") {
            showResult();
            operator = e.target.textContent;
            currentNumber = "b";
        }
        updateDisplay();
    }
})

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", clear);

const resultButton = document.querySelector("#result");
resultButton.addEventListener("click", showResult);




