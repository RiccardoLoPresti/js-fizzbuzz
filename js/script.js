/*DATI*/
const container = document.querySelector('.container')
const limit = 100;

/*ALGORITMO*/
for(let i = 1; i <= 100; i++){

  const box = document.createElement('div');
  box.className= 'box'

  if(!(i % 3) && !(i % 5)){

    box.classList.add('fizzbuzz');
    box.innerHTML = 'FizzBuzz'

  }else if(!(i % 3)){

    box.classList.add('fizz');
    box.innerHTML = 'Fizz'

  }else if (!(i % 5)){

    box.classList.add('buzz');
    box.innerHTML = 'Buzz' 

  }else{
    box.innerHTML = i;
  }
  
  container.append(box);
}