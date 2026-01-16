
const decreaseBtn = document.getElementById("decreaseBtn");

const reset = document.getElementById("resetBtn");

const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
 count++;
 countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    // Aqui irá ser 0 por estar resetando o contador //
    count = 0;
    countLabel.textContent = count;
}