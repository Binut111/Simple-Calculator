const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    // Prevent multiple operators in a row
    if (display.value === '' && operator !== '.') return;
    
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/', '.'].includes(lastChar) && operator !== '.') {
        return;
    }
    
    display.value += operator;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

// Allow keyboard input
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
        appendNumber(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        e.preventDefault();
        appendOperator(e.key);
    } else if (e.key === '.') {
        e.preventDefault();
        appendOperator('.');
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});