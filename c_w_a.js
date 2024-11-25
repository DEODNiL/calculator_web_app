let memory = 0;

function clearDisplay() {
  document.getElementById("display").value = '';
}

function deleteLast() {
  let currentDisplay = document.getElementById("display").value;
  document.getElementById("display").value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  let expression = document.getElementById("display").value;
  try {
    let result = mathEvaluate(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = 'Error';
  }
}

function mathEvaluate(expression) {
  expression = expression.replace(/sin/g, 'Math.sin');
  expression = expression.replace(/cos/g, 'Math.cos');
  expression = expression.replace(/tan/g, 'Math.tan');
  expression = expression.replace(/log/g, 'Math.log');
  expression = expression.replace(/exp/g, 'Math.exp');
  expression = expression.replace(/sqrt/g, 'Math.sqrt');
  return eval(expression);
}

function storeMemory() {
  let value = document.getElementById("display").value;
  memory = parseFloat(value);
  clearDisplay();
}

function recallMemory() {
  document.getElementById("display").value = memory;
}
