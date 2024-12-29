// Simple form validation (example)
// Function to append numbers to the display
function appendNumber(number) {
  const result = document.getElementById('result');
  result.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
  const result = document.getElementById('result');
  // Avoid adding multiple operators in a row
  const lastChar = result.value[result.value.length - 1];
  if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
    result.value += operator;
  }
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('result').value = '';
}

// Function to calculate the result
function calculateResult() {
  const result = document.getElementById('result');
  try {
    // Use eval to evaluate the expression in the display
    result.value = eval(result.value);
  } catch (error) {
    result.value = 'Error';
  }
}
