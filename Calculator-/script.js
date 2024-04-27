let currentString = "";

function appendNumber(number) {
    currentString += number;
    document.getElementById("result").value = currentString;
}

function appendOperator(operator) {
    if (currentString === "") return;
    currentString += operator;
    document.getElementById("result").value = currentString;
}

function clearScreen() {
    currentString = "";
    document.getElementById("result").value = currentString;
}

function Calculate() {
    let result = eval(currentString);
    currentString = result.toString();
    document.getElementById("result").value = currentString;
}

