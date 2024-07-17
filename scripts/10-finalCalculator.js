let calculation = localStorage.getItem('calculation') || '';
displayCalculation()

function updateCalculation  (number) {
  calculation += number;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}

function displayCalculation () {
  document.querySelector('.js-calculation').innerHTML = calculation;
}