const initApp = () => {
  const countDisplay = document.getElementById('count');
  const buttonsContainer = document.getElementById('buttons-container');

  let count = 0;

  const updateCount = (newCount) => {
    count = newCount;
    countDisplay.innerText = count.toString();
  };

  buttonsContainer.addEventListener('click', (event) => {
    const target = event.target;
    const button = target.closest('button');

    if (button) {
      const action = button.dataset.action;

      if (action) {
        switch (action) {
          case 'decrease':
            updateCount(count - 1);
            break;
          case 'increase':
            updateCount(count + 1);
            break;
          case 'reset':
            updateCount(0);
            break;
          default:
            break;
        }
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', initApp);
