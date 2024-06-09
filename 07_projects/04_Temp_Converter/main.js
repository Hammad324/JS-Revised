const form = document.querySelector('form');

form.addEventListener( 'submit', (event) => {
    event.preventDefault();

    // C to F
    const celcius = parseFloat(document.querySelector('#celcius').value);
    const resultsinF = document.querySelector('#resultsinF');

    const result = ((9/5 * celcius) + 32).toFixed(2);
    resultsinF.textContent = `The temperature is Fahrenheit is ${result}F°.`; 

    // F to C
    const fahrenheit = parseFloat(document.querySelector('#fahrenheit').value);
    const resultsinC = document.querySelector('#resultsinC');

    const result2 = ((fahrenheit - 32) * 5/9).toFixed(2);
    resultsinC.textContent = `The temperature is Celcius is ${result2}C°.`; 

} );