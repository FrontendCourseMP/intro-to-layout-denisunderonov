let firstButton = document.querySelector("#first");
let secondButton = document.querySelector("#second");
let thirdButton = document.querySelector("#third");
let fourthButton = document.querySelector("#fourth");
let fifthButton = document.querySelector("#fifth");

fourthButton.onclick = function () {
    let fourth = document.querySelector('.fourth');
    let currentMain = document.querySelector('.main');
    fourth.classList.remove('fourth');
    currentMain.classList.add('fourth');
    currentMain.classList.remove('main');
    fourth.classList.add('main');
}

thirdButton.onclick = function () {
    let third = document.querySelector('.third');
    let currentMain = document.querySelector('.main');
    third.classList.remove('third');
    currentMain.classList.add('third');
    currentMain.classList.remove('main');
    third.classList.add('main');
}

secondButton.onclick = function () {
    let second = document.querySelector('.second');
    let currentMain = document.querySelector('.main');
    second.classList.remove('second');
    currentMain.classList.add('second');
    currentMain.classList.remove('main');
    second.classList.add('main');
}

firstButton.onclick = function () {
    let first = document.querySelector('.first');
    let currentMain = document.querySelector('.main');
    first.classList.remove('first');
    currentMain.classList.add('first');
    currentMain.classList.remove('main');
    first.classList.add('main');
}

fifthButton.onclick = function () {
    let fifth = document.querySelector('.fifth');
    let currentMain = document.querySelector('.main');
    fifth.classList.remove('fifth');
    currentMain.classList.add('first');
    currentMain.classList.remove('main');
    fifth.classList.add('main');
}
