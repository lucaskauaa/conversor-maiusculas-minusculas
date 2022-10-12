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

text.focus();

text.addEventListener('input', datas);
function datas () {
    characteres.innerHTML = `Caracteres: ${text.value.length}`;
    let words = text.value.split(' ');
    if(text.value === '') {
        wordsCount.innerHTML = `Palavras: 0`;
    } else {
        wordsCount.innerHTML = `Palavras: ${words.length}`; 
    }
}

maiusc.addEventListener('click', () => {
    text.value = text.value.toUpperCase();
})

minusc.addEventListener('click', () => {
    text.value = text.value.toLowerCase();
})

firstLetterMaiusc.addEventListener('click', () => {
    let letters = text.value.toLowerCase();
    letters = letters.split('');
    letters[0] = letters[0].toUpperCase();
    text.value = letters.join('');
})

allFirstLetterMaiusc.addEventListener('click', () => {
    let letters;
    let words = text.value.toLowerCase();
    words = words.split(' ');
    for(let i in words) {
        if(words[i].length < 3) {
            continue;
        }
        letters = words[i].split('');
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join('');
    }
    text.value = words.join(' ');
})

alternade.addEventListener('click', () => {
    let letters = text.value.toLowerCase();
    letters = letters.split('');
    for(let i in letters) {
        if(i % 2 !== 0) {
            continue;
        }
        letters[i] = letters[i].toUpperCase();
    }
    text.value = letters.join('');
})

invert.addEventListener('click', () => {
    let letters = text.value.split('');
    letters = letters.reverse();
    text.value = letters.join('');
})

copy.addEventListener('click', () => {
    text.select();
    text.setSelectionRange(0, 99999)
    document.execCommand("copy");
})

clean.addEventListener('click', () => {
    text.value = '';
    datas();
})