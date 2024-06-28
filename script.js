
import getRandomWord from "./word.js";
let musicStatus = false;

const audio = document.getElementById("myAudio");

musicButton.addEventListener('click', () => {

    if (musicStatus === false) 
    {
        audio.volume = 0.8;
        audio.play();
        audio.muted = false;
        musicStatus=true;
        audio.autoplay=true;
        audio.loop = true;
        console.log(musicStatus);
        document.getElementById("musicButton").innerHTML="🔊";
    }

    else{
        audio.pause();
        audio.muted = true;
        musicStatus=false;
        console.log(musicStatus);
        document.getElementById("musicButton").innerHTML="🔈";

    }

});



let secretWord =getRandomWord();
console.log(secretWord);
const maxAttempts = 6;
const gameContainer = document.getElementById('game-container');
const wordInput = document.getElementById('word-input');
const submitButton = document.getElementById('submit-button');
const reloadButton = document.getElementById('reload-button');
let currentRow = 0;


// Create rows dynamically
for (let i = 1; i < maxAttempts; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.id = `row-${i}`;
    for (let j = 0; j < 5; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
    }
    gameContainer.appendChild(row);
}

reloadButton.addEventListener('click',()=>{
    for(let j = 0; j<6; j++){
        const cells = document.querySelectorAll(`#row-${j} .cell`);
        for( let i = 0; i<5; i++ ){
            cells[i].textContent = "";
            cells[i].classList.remove("present");
            cells[i].classList.remove("absent");
            cells[i].classList.remove("correct");
        }
        }
        secretWord =getRandomWord();
        console.log(secretWord);
        currentRow = 0;
        wordInput.value = '';
});

submitButton.addEventListener('click', () => {
    const guess = wordInput.value.toUpperCase();
    if (guess.length !== 5) {
        alert('Please enter a 5-letter word.');
        return;
    }

    const cells = document.querySelectorAll(`#row-${currentRow} .cell`);
    for (let i = 0; i < 5; i++) {
        cells[i].textContent = guess[i];
        if (guess[i] === secretWord[i]) {
            cells[i].classList.add('correct');
        } else if (secretWord.includes(guess[i])) {
            cells[i].classList.add('present');
        } else {
            cells[i].classList.add('absent');
        }
    }

    if (guess === secretWord) {
        alert(`Congratulations! You guessed the word! which is ${secretWord}.`);
        reloadButton.click();
    } else {
        currentRow++;
        if (currentRow >= maxAttempts) {
            alert(`Game over! The word was ${secretWord}.`);
            reloadButton.click();
        }
    }

    wordInput.value = '';

});

