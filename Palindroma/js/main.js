let parola = prompt('Inserire una parola')
let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    document.getElementById('result').innerHTML='la parola è palindroma';
   
  } else {
    document.getElementById('result').innerHTML='la non è parola è palindroma';
  }
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}
