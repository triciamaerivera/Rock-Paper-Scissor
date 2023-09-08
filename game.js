let scores = {
    win: 0,
    lose: 0,
    ties: 0
};

function updateScores() {
    document.getElementById('winScore').textContent = scores.win;
    document.getElementById('loseScore').textContent = scores.lose;
    document.getElementById('tieScore').textContent = scores.ties;
}

function resetScores() {
    scores = {
        win: 0,
        lose: 0,
        ties: 0
    };
    updateScores();
}

// Function to save the scores in local storage
function saveScores() {
    localStorage.setItem('scores', JSON.stringify(scores));
}

// Function to load the scores from local storage
function loadScores() {
    const storedScores = localStorage.getItem('scores');
    if (storedScores) {
        scores = JSON.parse(storedScores);
    }
    updateScores();
}

// Call loadScores to load scores when the page loads
loadScores();


function pickGame(bet){
    const random = Math.random();

    let move = '';


    if ( random >= 0 && random < 1 / 3 ){
        move = 'Rock';
    }
    else if (random >= 1 / 3 && random < 2 / 3){
        move = 'Paper';
    }
    else if (random >= 2 / 3 && random < 1 ) {
        move = 'Scissors'
    }

    

    let result = '';

    if (move == bet){
        scores.ties += 1;
        result = 'Tie';
    }
    else if ( 
        (bet === 'Rock' && move === 'Scissors') ||
        (bet === 'Paper' && move === 'Rock') ||
        (bet  === 'Scissors' && move === 'Paper')){
        scores.win += 1;
        result = 'You win!'

    }
    else {
        scores.lose += 1;
        result = 'You lose!';
    }

    
    // Update scores, save in local storage, and show alert
    updateScores();
    saveScores();
    alert(`${bet} VS ${move} = ${result}`);
}