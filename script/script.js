const text = document.getElementById('text');
const maiusc = document.getElementById('maiusc');
const minusc = document.getElementById('minusc');
const firstLetterMaiusc = document.getElementById('firstLetterMaiusc');
const allFirstLetterMaiusc = document.getElementById('allFirstLetterMaiusc');
const alternade = document.getElementById('alternade');
const invert = document.getElementById('invert');
const clean = document.getElementById('clean');
const copy = document.getElementById('copy');
const characteres = document.getElementById('characteres');
const wordsCount = document.getElementById('words');

function updateData() {
    characteres.innerHTML = `Caracteres: ${text.value.length}`;
    const words = text.value.trim().split(/\s+/);
    const count = text.value.trim() === '' ? 0 : words.length;
    wordsCount.innerHTML = `Palavras: ${count}`;
}

function capitalizeFirstLetter(texto) {
    if (!texto) return '';
    return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

function capitalizeAllWords(texto) {
    return texto
        .toLowerCase()
        .split(' ')
        .map(word => word.length >= 3 ? capitalizeFirstLetter(word) : word)
        .join(' ');
}

function alternateLetters(texto) {
    return texto
        .toLowerCase()
        .split('')
        .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char)
        .join('');
}

function reverseText(texto) {
    return texto.split('').reverse().join('');
}

text.addEventListener('input', updateData);

maiusc.addEventListener('click', () => {
    text.value = text.value.toUpperCase();
});

minusc.addEventListener('click', () => {
    text.value = text.value.toLowerCase();
});

firstLetterMaiusc.addEventListener('click', () => {
    text.value = capitalizeFirstLetter(text.value);
});

allFirstLetterMaiusc.addEventListener('click', () => {
    text.value = capitalizeAllWords(text.value);
});

alternade.addEventListener('click', () => {
    text.value = alternateLetters(text.value);
});

invert.addEventListener('click', () => {
    text.value = reverseText(text.value);
});

copy.addEventListener('click', () => {
    text.select();
    text.setSelectionRange(0, 99999);
    document.execCommand('copy');
});

clean.addEventListener('click', () => {
    text.value = '';
    updateData();
});
