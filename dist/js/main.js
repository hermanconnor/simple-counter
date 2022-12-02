"use strict";
const initApp = () => {
    const value = document.querySelector('#value');
    const buttons = document.querySelectorAll('.btn');
    let count = 0;
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const target = e.currentTarget;
            if (target.classList.contains('decrease')) {
                count--;
            }
            else if (target.classList.contains('increase')) {
                count++;
            }
            else {
                count = 0;
            }
            value.innerText = count.toString();
        });
    });
};
document.addEventListener('DOMContentLoaded', initApp);
