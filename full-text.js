document.addEventListener('DOMContentLoaded', function() {
  handleCitation();

  const regex = /\b(art roman|architecture|contenu|espace|forme|linguistique|lumière|masse|matière|métaphore|objet|oeuvre|ornement|peinture|plein|relief|signe|statue|structure|touche|vide)[s]?\b/gi;
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(regex, (f, g1, g2) => {
      console.log(f, g1, g2);
      return `<a href="./lexique.html?mot=${g1}">${f}</a>`;
    });
  });
  const scroll = document.querySelector('.scrolling');

  const up = document.getElementById('up');
  up.addEventListener('click', function() {
    if (scroll.scrollTop > 8000) {
      scroll.scrollTop = 0;
    } else {
      document.querySelector('h1').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  });

  let isShown = false;
  scroll.onscroll = function() {
    console.log(scroll.scrollTop);
    if (scroll.scrollTop > 500) {
      if (isShown) {
        return;
      }
      isShown = true;
      up.classList.add('fadeInUp');
      up.classList.remove('fadeOutDown');
    } else {
      if (!isShown) {
        return;
      }
      isShown = false;
      up.classList.add('fadeOutDown');
      up.classList.remove('fadeInUp');
    }
  };
});

function handleCitation() {
  const urlParams = new URLSearchParams(window.location.search);
  const citation = urlParams.get('citation');
  if (citation) {
    const citEl = document.getElementById('c' + citation);
    if (citEl) {
      citEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      citEl.style.fontWeight = 600;
    }
  }
}
