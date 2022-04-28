const advice = document.querySelector(".advice");
const id = document.querySelector(".advice-id");
const randomizeBtn = document.querySelector(".random-btn");
const diceImg = document.querySelector(".dice");

const randomize = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(obj => obj.json())
        .then(data => {
            id.textContent = `advice #${data.slip.id}`;
            advice.textContent = data.slip.advice;  
        });
}

randomizeBtn.addEventListener('click', randomize);