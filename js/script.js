/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


/*DATI*/

const container = document.querySelector('.container')
const limit = 100;


/*ALGORITMO*/

for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className= 'box'

  console.log(box);
  
  if(!(i % 3) && !(i % 5)){
    console.log('FIZZ-BUZZ', i);

  }else if(!(i % 3)){
    console.log('FIZZ', i);
  }else if (!(i % 5)){
    console.log('BUZZ', i);
  }else{
    console.log(i);
  }
}


