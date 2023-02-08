 const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1dispaly = document.querySelector('#p1display');
const p2dispaly = document.querySelector('#p2display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if(!isGameOver){
        p1score+=1;
    
    if (p1score ===winningScore){
        isGameOver=true;
        p1dispaly.classList.add('has-text-success');
        p2dispaly.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p1dispaly.textContent = p1score;
    }
})

p2Button.addEventListener('click', function() {
    if(!isGameOver){
        p2score+=1;
    
    if (p2score ===winningScore){
        isGameOver=true;
        p2dispaly.classList.add('has-text-success');
        p1dispaly.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p2dispaly.textContent = p2score;
    }
})

winningScoreSelect.addEventListener('change',function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click',reset)

function reset() {
    isGameOver = false;
    p1score= 0;
    p2score= 0;
    p1dispaly.textContent = 0;
    p2dispaly.textContent = 0;
    p1dispaly.classList.remove('has-text-success','has-text-danger');
    p2dispaly.classList.remove('has-text-success','has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;

}

