const mainTiltle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#Reset');
const btnIncrement = document.querySelector('#Increment');

btnIncrement.addEventListener('click',() => {
    curValue++;
    mainTiltle.textContent = curValue;

});
btnReset.addEventListener('click', () => {
    curValue = 0;
    mainTiltle.textContent  = curValue;
});

btnDecrement.addEventListener('click',() => {
    curValue--;
    mainTiltle.textContent = curValue;
});
