const startGame = document.getElementById('start-game');
const wrapper = document.querySelector('.wrapper');
const difficulty = document.getElementById('difficulty');
const reset = document.getElementById('reset');

startGame.addEventListener('click', function () {
    wrapper.classList.remove('visibility');
    wrapper.classList.add('visibility2');
    let diff;
    let length;
    const bombList = [];
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
    indexOfBomb(bombList, length);
    drawGrid(diff, length, bombList);
    console.log(bombList);
})
reset.addEventListener('click', function () {
    wrapper.classList.remove('visibility2');
    wrapper.classList.add('visibility');
})






function mySquare(diff) {
    const nowSquare = document.createElement('div');
    nowSquare.classList.add(diff);
    return nowSquare;
}
function randomNumber(blackList, max, min) {
    let randomNumber;
    let check = false;
    while (check === false) {
        randomNumber = Math.floor(Math.random() * (max + 1)  + min);
        if (!blackList.includes(randomNumber)) {
            check = true;
        }
    }
    return randomNumber;
}
function indexOfBomb(blackList, length) {
    for (let i = 0; i < 16; i++) {
        blackList[i] = randomNumber(blackList, length, 1);
    }
}
function drawGrid(diff, length, blackList) {
    const boardContainer = document.querySelector('.board-cont');
    boardContainer.innerHTML = '';
    let point=0;
    for (let i = 0; i < length; i++) {
        const newSquare = mySquare(diff);
        newSquare.addEventListener('click', function () {
            if ((blackList.includes(i+1))===true) {
                newSquare.classList.add('bomb');
                showAlert('Hai clickato una bomba', boardContainer, point);
            }
            else {
                if(!newSquare.classList.contains('active')){
                    point++
                }
                newSquare.classList.add('active');
                console.log(point);
            }
        })
        boardContainer.append(newSquare);
    }
}

function showAlert(message, parent, point){
        const alertMessage = '<div class="game-alert"><div class="game-alert-message">'+message+'<br> Ed hai totalizzato '+point+' punti.</div></div>';
        parent.innerHTML += alertMessage;
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