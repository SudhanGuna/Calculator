'use strict';

const screen = document.querySelector(`.screen`);
let buttons = document.querySelectorAll(`.btn`);
const clear = document.querySelector(`.btn-clear`);
const equal = document.querySelector(`.btn-equal`);
const allClear = document.querySelector(`.btn-allclear`);


buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});


equal.addEventListener('click', function (e) {
    console.log(screen.value);
    e.preventDefault();
    if (screen.value === '') {
        screen.value = "";
    }
    else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
});


clear.addEventListener('click', function (e) {
    screen.value = screen.value.slice(0, screen.value.length - 1);
});


allClear.addEventListener('click', function (e) {
    screen.value = "";
});