"use strict";
const initApp = () => {
    const value = document.querySelector('#value');
    const buttons = document.querySelectorAll('.btn');
    let count = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('decrease')) {
                count--;
            }
            else if (button.classList.contains('increase')) {
                count++;
            }
            else {
                count = 0;
            }
            if (count > 0) {
                value.style.color = '#22c55e';
            }
            if (count < 0) {
                value.style.color = '#ef4444';
            }
            if (count === 0) {
                value.style.color = '#262626';
            }
            value.innerText = count.toString();
        });
    });
};
document.addEventListener('DOMContentLoaded', initApp);
