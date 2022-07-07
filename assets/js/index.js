const botaoIncrementar = document.querySelector('#adicionar');
const botaoDecrementar = document.querySelector('#subtrair');

let currentNumberWrapper = document.getElementById('currentNumber');
let currentNumber = 0

botaoIncrementar.addEventListener('click', function(){
    if(currentNumber >= 10){
        document.getElementById('increment').style.display = 'none';
    }
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber >= 0){
        document.body.style.color = 'black';
    }
})

botaoDecrementar.addEventListener('click', function(){
    if(currentNumber <= -10){
        document.getElementById('decrement').style.display = 'none';
    }
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.body.style.color = 'red';
    }
})



