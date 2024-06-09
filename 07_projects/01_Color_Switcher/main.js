const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    //console.log(event);
    //console.log(event.target.id);
    // this shows ke kahan se event capture hua hai OR returns the HTML element that triggered an event.
    if (
      event.target.id === 'grey' ||
      event.target.id === 'white' ||
      event.target.id === 'blue' ||
      event.target.id === 'yellow' ||
      event.target.id === 'purple'
    ) {
      body.style.backgroundColor = event.target.id;
    }
    /* Can also be done like this.
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } */
  });
});
