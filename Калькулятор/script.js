let userInput = document.querySelector('input');
let expression = "";

function press(num) {
    expression = expression + num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = "";
}

function erase() {
    expression = "";
    userInput.value = expression;
}