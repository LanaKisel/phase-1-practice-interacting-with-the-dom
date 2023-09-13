let isRunning = true;
setInterval(counting, 1000);
let totalSeconds = 0;
let secondsLabel = document.getElementById('counter');
let timesLiked = 0;

function counting() {
    if (isRunning) {
        ++totalSeconds;
    }
    secondsLabel.textContent = totalSeconds;
    if (timesLiked > 0) {
        outputLikes()
        timesLiked = 0;
    }
}

let heart = document.querySelector('#heart').addEventListener('click', like);
function like() {
    ++timesLiked
}

function outputLikes() {
    let uL = document.querySelector('.likes')
    let li = document.createElement('li');
    let s = document.createElement('span');
    s.textContent = timesLiked
    li.textContent = `${totalSeconds} has been liked `
    li.appendChild(s)
    if (timesLiked === 1) {
        li.textContent += ' time'
    } else { li.textContent += ' times' }
    uL.appendChild(li);
}

document.querySelector('#pause').addEventListener('click', manipulate)
function manipulate() {
    if (isRunning === true) {
        document.querySelector('#heart').disabled = true;
        document.querySelector('#minus').disabled = true;
        document.querySelector('#plus').disabled = true;
        document.querySelector('#counter').disabled = true;
        isRunning = false;
    } else {
        document.querySelector('#heart').disabled = false;
        document.querySelector('#minus').disabled = false;
        document.querySelector('#plus').disabled = false;
        document.querySelector('#counter').disabled = false;
        isRunning = true;
    }
}
let m = document.querySelector('#minus').addEventListener('click', subtract);
function subtract() {
    --totalSeconds;
    secondsLabel.textContent = totalSeconds;
}
let plusButton = document.querySelector('#plus').addEventListener('click', addition)
function addition() {
    ++totalSeconds;
    secondsLabel.textContent = totalSeconds;
}
let f = document.querySelector('form')
f.addEventListener('submit', (e) => {
    e.preventDefault();
    buildSubmit(e.target.comment_input.value);
    f.reset();
})
function buildSubmit(comment) {
    let p = document.createElement('p');
    p.textContent = `${comment}`;
    document.querySelector('#list').appendChild(p)
}