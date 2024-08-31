'use strict';

const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('main-btn-style'));

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'btn-c') {
      display.value = '';
    } else if (button.id === 'btn-equals') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += button.textContent;
    }
  });
});
