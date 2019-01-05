let handledAfterResize = false;

window.addEventListener('resize', function() {
  if (!handledAfterResize) {
    handleMot();
    handledAfterResize = true;
  }
});

document.addEventListener('DOMContentLoaded', function() {
  handleMot();
});

function handleMot() {
  const urlParams = new URLSearchParams(window.location.search);
  const mot = urlParams.get('mot');
  if (mot) {
    setTimeout(() => {
      const everyTd = document.querySelectorAll('td:first-child');
      everyTd.forEach(td => {
        if (td.textContent.toLocaleLowerCase() === mot) {
          td.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
    }, 150);
  }
}
