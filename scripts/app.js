const counter = document.getElementById('counter');

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

let number = 0;

const subtract = () => {
    if(number > 0){
        number--;
        counter.textContent = number;
    }

}

const add = () => {
    number++;
    counter.textContent = number;
}

const changeOnKeyDown = (e) => {
    if(e.keyCode === 38){
        number++;
        counter.textContent = number;
    }
    else if(e.keyCode === 40)
    {
        if(number > 0){
            number--;
            counter.textContent = number;
        }
    }
}


decrease.addEventListener('click', subtract);
document.addEventListener('keydown', changeOnKeyDown);
increase.addEventListener('click', add);