let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let expression = ''; // To keep track of the full expression

// Append value to display
function appendToDisplay(value) {
    // Prevent multiple decimal points
    if (value === '.' && currentInput.includes('.')) return;
    if (currentInput === '' && value === '0') return; // Avoid leading zeros
    currentInput += value;
    expression += value;
    updateDisplay();
}

// Clear the display and reset values
function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    expression = '';
    display.textContent = '0';
}

// Calculate the result
function calculate() {
    if (expression) {
        try {
            // Compute the result
            let result = eval(expression).toString();
            if (result.length > 10) {
                result = result.slice(0, 10) + '...'; // Truncate long results
            }
            display.textContent = result;
            currentInput = result;
            expression = result; // Update expression to show result
        } catch {
            display.textContent = 'Error';
            currentInput = '';
            expression = '';
        }
    }
}

// Update the display with proper font size adjustment
function updateDisplay() {
    display.textContent = expression || '0';
    if (display.scrollWidth > display.clientWidth) {
        display.style.fontSize = '18px'; // Reduce font size if overflow occurs
    } else {
        display.style.fontSize = '24px'; // Default font size
    }
}

// Add event listeners to all buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        let buttonValue = this.textContent;

        // Handle the button clicks
        if (buttonValue === 'C') {
            clearDisplay();
        } else if (['+', '-', '*', '/'].includes(buttonValue)) {
            // Append operator to the expression
            if (currentInput !== '' || expression !== '') {
                expression += ' ' + buttonValue + ' ';
                currentInput = '';
                updateDisplay();
            }
        } else if (buttonValue === '=') {
            calculate();
        } else {
            appendToDisplay(buttonValue);
        }
    });
});
