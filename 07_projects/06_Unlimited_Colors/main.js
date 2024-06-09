const body = document.querySelector('body');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let intervalId;

// generating random color

const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//console.log(randomColor());

const start = () => {

  const startColor = () => {
    document.body.style.backgroundColor = randomColor();
  };

  if (intervalId == null) {
    intervalId = setInterval(startColor, 1000);
  }

};

const stop = () => {

  clearInterval(intervalId);
  intervalId = null;
  
};

startBtn.addEventListener('click', start);

stopBtn.addEventListener('click', stop);
