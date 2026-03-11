const display = document.getElementById('display');

function appendToDisplay(input) {
    // Prevent starting with an operator
    if (display.value === "" && isNaN(input) && input !== '.') return;
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Evaluate the string expression
        const result = eval(display.value);
        
        // Handle division by zero or empty results
        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error";
    }
}
