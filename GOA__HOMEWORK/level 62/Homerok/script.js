document.addEventListener("DOMContentLoaded", function() {
  const countDisplay = document.getElementById('count');
  let count = 0;

  function updateCountDisplay() {
    countDisplay.textContent = count;
  }

  document.getElementById('decrement').addEventListener('click', () => {
    count--;
    updateCountDisplay();
  });

  document.getElementById('increment').addEventListener('click', () => {
    count++;
    updateCountDisplay();
  });

  document.getElementById('reset').addEventListener('click', () => {
    count = 0;
    updateCountDisplay();
  });

  updateCountDisplay(); // Initial display
});
