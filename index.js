const fonts = ['Helvetica', 'Georgia', 'Lucida', 'Zapf'];
const words = [
  'Espace',
  'Baroque',
  'Objet',
  'Relief',
  'Intrinsèque',
  'Oeuvre',
  'Antinomique',
  'Arabesque',
  'Support',
  'Forme',
  'Ornement',
  'Peinture',
  'Masse',
  'Abstraction',
  'Fond',
  'Signe',
  'Style'
];
document.addEventListener(
  'DOMContentLoaded',
  function() {
    const leftDiv = document.querySelector('.left');

    addElements(leftDiv);
  },
  false
);

function addElements(leftDiv) {
  const length = words.length;
  for (let i = 0; i < length; i++) {
    const el = getElement(i, words[i], length);
    leftDiv.appendChild(el);
  }
}

function getElement(i, word, total) {
  let element = document.createElement('span');
  element.textContent = word;
  element.className = 'word';
  element.style.fontFamily = getRandomTypo();
  element.style.fontWeight = getRandomFontWeight(word);
  element.style.fontSize = getFontSize(word) + 'em';
  element.style.left = getLeft(word) + '%';
  element.style.top = getTop(i, total) + '%';
  return element;
}

function getFontSize(word) {
  if (word.length <= 7) {
    return 1 + Math.random() * 3;
  }

  return 1 + Math.random() * 2;
}

function getLeft(word) {
  if (word.length <= 7) {
    return 10 + Math.random() * 50;
  }
  return 10 + Math.random() * 30;
}

function getTop(i, total) {
  const float = -2 + Math.random() * 4;
  let top = (i * 100) / total + float;
  if (top <= 0) {
    top = Math.random();
  }

  return top;
}

function getRandomTypo() {
  return fonts[Math.floor(Math.random() * 4)];
}

function getRandomFontWeight() {
  const rdm = Math.random();

  if (rdm <= 0.2) {
    return 300;
  } else if (rdm <= 0.4) {
    return 400;
  } else if (rdm <= 0.6) {
    return 600;
  } else if (rdm <= 0.8) {
    return 600;
  } else {
    return 700;
  }
}
