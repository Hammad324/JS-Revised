const buttons = document.querySelector('.buttons')
let display = document.getElementById('display')


buttons.addEventListener('click', (e) => {

    if (e.target.className == 'number' || e.target.className == 'operator') {
        display.value += e.target.textContent
    } 
    else if (e.target.className == 'clear') {
        clear()
    } 
    else if (e.target.className == 'calculate') {
        calculate(parseInt(display.v))
    }

})


const clear = () => {
    display.value = ''
}

const calculate = () => {
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error Occured.'
    }
}