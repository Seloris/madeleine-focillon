document.addEventListener('DOMContentLoaded', function() {
  const tables = document.querySelectorAll('table');
  tables.forEach((t, i) => {
    const tdList = t.querySelectorAll('td:last-child');
    tdList.forEach(td => {
      td.addEventListener('mouseover', () => {
        tdList.forEach(td2 => {
          td2.style.fontSize = '1.1em';
        });
      });

      td.addEventListener('mouseout', () => {
        tdList.forEach(td2 => {
          td2.style.fontSize = '1em';
        });
      });

      td.addEventListener('click', () => {
        window.location.href = './full-text.html?citation=' + (i + 1);
      });
    });
  });
});
