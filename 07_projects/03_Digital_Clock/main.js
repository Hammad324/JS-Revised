const clock = document.getElementById('clock');

// const date = new Date();
// console.log(date.toLocaleTimeString());

// Can do it like this.

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// OR this.

// setInterval(function () {
//   const date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);
