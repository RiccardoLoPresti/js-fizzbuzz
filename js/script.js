/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) 
un elemento html con il numero o la stringa corretta da mostrare.

Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*,
 a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/


/*DATI*/

const container = document.querySelector('.container')
const limit = 100;


/*ALGORITMO*/

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className= 'box'

  if(!(i % 3) && !(i % 5)){
    const fizzBuzz = i
    box.classList.add('fizzbuzz');
    box.innerHTML = 'FizzBuzz'

    console.log('FIZZBUZZ',fizzBuzz);
  }else if(!(i % 3)){
    const fizz = i
    box.classList.add('fizz');
    box.innerHTML = 'Fizz'
  
    console.log('FIZZ', fizz);
  }else if (!(i % 5)){
    const buzz = i
    box.classList.add('buzz');
    box.innerHTML = 'Buzz'
    
    console.log('BUZZ', buzz);
  }else{
    box.innerHTML = i;
  }

  container.append(box);
}


