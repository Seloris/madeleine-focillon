document.addEventListener('DOMContentLoaded', function() {
  const regex = /\b(art roman|architecture|contenu|espace|forme|linguistique|lumière|masse|matière|métaphore|objet|oeuvre|ornement|peinture|plein|relief|signe|statue|structure|touche|vide)[s]?\b/gi;
  const paragraphs = document.querySelectorAll('p');
  paragraphs.forEach(p => {
    p.innerHTML = p.innerHTML.replace(regex, (f, g1, g2) => {
      console.log(f, g1, g2);
      return `<a href="./lexique.html?mot=${g1}">${f}</a>`;
    });
  });
});
