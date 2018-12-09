const urlParams = new URLSearchParams(window.location.search);
const p = urlParams.get('paragraph');

alert('Afficher paragraph numéro : ' + p);
