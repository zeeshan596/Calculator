let display = document.getElementById('display');

function Display(value) {
  display.value += value;
}
function calculate() {
  try {
    let expression = display.value
      .replace(/x/g, '*')
      .replace(/÷/g, '/');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

function clearInput() {
  display.value = '';
}