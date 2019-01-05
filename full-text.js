document.addEventListener('DOMContentLoaded', function() {
  const regex = /\b(art roman|architecture|contenu|espace|forme|linguistique|lumière|masse|matière|métaphore|objet|oeuvre|ornement|peinture|plein|relief|signe|statue|structure|touche|vide)[s]?\b/gi;
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(regex, (f, g1, g2) => {
      console.log(f, g1, g2);
      return `<a href="./lexique.html?mot=${g1}">${f}</a>`;
    });
  });

  const up = document.getElementById('up');
  up.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const scroll = document.querySelector('.scrolling');
  scroll.onscroll = function() {
    if (scroll.scrollTop > 500) {
      up.classList.add('fadeInUp');
      up.classList.remove('fadeOutDown');
    } else {
      up.classList.add('fadeOutDown');
      up.classList.remove('fadeInUp');
    }
  };
});
