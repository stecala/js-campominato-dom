const startGame = document.getElementById('start-game');
const wrapper = document.querySelector('.wrapper');
const difficulty = document.getElementById('difficulty');
const reset = document.getElementById('reset');
startGame.addEventListener('click', function () {
    console.log(difficulty.value);
    wrapper.classList.remove('visibility');
    let diff;
    let length;

    const bombList = [];
    for(let i=0; i<16; i++){
        bombList[i]=randomNumber(bombList, 100, 1);
    }

    console.table(bombList);
    if (difficulty.value === 'facile') {
        diff = 'easy';
        length = 100;
    }
    else if (difficulty.value === 'medio') {
        diff = 'medium';
        length = 81;

    }
    else if (difficulty.value === 'difficile') {
        diff = 'hard';
        length = 49;
    }
    else {
        alert('NON FARE IL FURBETTO');
    }
    drawGrid(diff, length);
})
reset.addEventListener('click', function () {
    wrapper.classList.add('visibility');
})





function drawGrid(diff, length) {
    const boardContainer = document.querySelector('.board-cont');
    boardContainer.innerHTML = '';
    for (let i = 0; i < length; i++) {
        const newSquare = mySquare(diff);
        newSquare.innerHTML = i + 1;
        newSquare.addEventListener('click', function () {
            newSquare.classList.add('active');
            console.log(i + 1);
        })
        boardContainer.append(newSquare);
    }
}
function mySquare(diff) {
    const nowSquare = document.createElement('div');
    nowSquare.classList.add(diff);
    return nowSquare;
}
function randomNumber(blackList, max, min) {
    let randomNumber;
    let check=false;
    while (check === false) {
        randomNumber = Math.floor(Math.random() * ((max + 1) - min) + min);
        if (!blackList.includes(randomNumber)) {
            check = true;
        }
        return randomNumber;
    }
}























let count = 40;
let scene = document.querySelector('.scene');
let i = 0;
while (i < count) {
    let star = document.createElement('i');
    let x = Math.floor(Math.random() * window.innerWidth);
    let duration = Math.random() * 1;
    let h = Math.random() * 100;
    star.style.left = x + 'px';
    star.style.width = 1 + 'px';
    star.style.height = 50 + h + 'px';
    star.style.animationDuration = duration + 's';
    scene.appendChild(star);
    i++
}