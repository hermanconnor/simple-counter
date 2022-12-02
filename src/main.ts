const initApp = () => {
  const value = document.querySelector('#value') as HTMLSpanElement;
  const buttons = document.querySelectorAll(
    '.btn',
  ) as NodeListOf<HTMLButtonElement>;

  let count = 0;

  buttons.forEach((button) => {
    button.addEventListener('click', (e: MouseEvent) => {
      const target = e.currentTarget as HTMLButtonElement;

      if (target.classList.contains('decrease')) {
        count--;
      } else if (target.classList.contains('increase')) {
        count++;
      } else {
        count = 0;
      }

      value.innerText = count.toString();
    });
  });
};

document.addEventListener('DOMContentLoaded', initApp);
