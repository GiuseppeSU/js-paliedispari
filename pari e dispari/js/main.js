let scegli = prompt('scegli pari o dispari');

function numberRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);

};


let numberSomma = (numberRandom(1, 5));
console.log(numberSomma)
let numberSomma2 = numberRandom(1, 5);
console.log(numberSomma2)
function pariDispari(n1, n2) {
    const risultato = document.createElement('p');
    risultato.classList.add('result');
    let container = document.querySelector('.container');
    
    let somma = n1 + n2;
    if (somma % 2 == 0 && scegli == 'pari') {
        risultato.innerHTML='Complimenti hai vinto';
    } else if (somma % 2 == 1 && scegli == 'dispari') {
        risultato.innerHTML='Complimenti hai vinto';
    } else {
        risultato.innerHTML='Ritenta sarai più fortunato';
    }
    container.append(risultato);
};

pariDispari(numberSomma, numberSomma2);

