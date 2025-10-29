let numberA = 0;
let numberB = 0;
let operator = "";

function operate(operator,a,b){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
            return 0;
    }
}

