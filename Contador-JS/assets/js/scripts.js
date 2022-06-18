let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

const Subtrair = document.querySelector("#subtrair");
const Adicionar = document.querySelector("#soma");

Subtrair.addEventListener('click', () => {

    count--;
    document.getElementById("soma").disabled = false;

    if (count === -10) {
        document.getElementById("subtrair").disabled = true;
    }

    if (count < 0) {
        document.getElementById("currentNumber").style["color"] = "red";
    }

    CURRENT_NUMBER.innerHTML = count;

});

Adicionar.addEventListener('click', () => {
    
    count++;
    document.getElementById("subtrair").disabled = false;

    if (count === 10) {
        document.getElementById("soma").disabled = true;
    }

    if (count >= 0) {
        document.getElementById("currentNumber").style["color"] = "blue";
    }


    CURRENT_NUMBER.innerHTML = count;
});








/*
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
   if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        
    } else {
        currentNumber == 0;
    }
    


    
    
}*/
