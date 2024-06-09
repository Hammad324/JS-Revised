const form = document.querySelector('form');

// !IMP: yhan pe values is liye nhi li hain height and weight ki because jab run hoga to script to execute hojayegi jis ki wajah se NaN save hojayega ya empty values save hojayegi height and weight mien. or hum chahte hain ke humare pas values tab ayen jab hum submit karien form. is liye event ke andar hi value li hain hun ne.

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const height = parseFloat(document.getElementById('height').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Enter a valid value for height.';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Enter a valid value for weight.';
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  
  if (bmi < 18.6) {
    results.innerHTML = `<span>${bmi}, Underweight</span>`;
  } else if (bmi > 18.6 && bmi <= 24.9) {
    results.innerHTML = `<span>${bmi}, Normal</span>`;
  } else if (bmi > 24.9) {
    results.innerHTML = `<span>${bmi}, Overweight</span>`;
  }
});
