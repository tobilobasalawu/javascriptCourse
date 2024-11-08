let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();

let isAutoPlaying = false;
let intervalId;

//const autoPlay = () => {}

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.auto-play-button').innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.auto-play-button')
      .innerHTML = 'Auto Play';
  }
}

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
})

  document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  })

  document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  })

  document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  })

  document.querySelector('.reset-score-button')
    .addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement()
    })

  let autoPlayButton = document.querySelector('.auto-play-button');
  autoPlayButton.addEventListener('click', () => {
    autoPlay();
  });
  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'a'){
      autoPlay();
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.key = 'Backspace') {
      document.getElementById('confirmation-message')
      .innerHTML = `
        <div style="margin-top: 10px">
          Are you sure you want to reset the Score?
           <button id="yes-button" style="
            height : 35px;
            width : 55px;
            padding: 5px;
            font-size: 15px;
            border: none;
            margin: 0px 10px 0px 10px;
           ">Yes</button>
           <button id="no-button" style="
            height : 35px;
            width : 55px;
            padding: 5px;
            font-size: 15px;
            border: none;
           ">No</button>
        </div>
      ` 
      document.querySelector('#yes-button')
        .addEventListener('click', () => {
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();

          document.getElementById('confirmation-message')
            .innerHTML = '';
        })

      document.getElementById('no-button')
        .addEventListener('click', () => {
          document.getElementById('confirmation-message')
            .innerHTML = '';
        })
    }
   
  })


 function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-moves").innerHTML = `You
  <img class="move-icon" src="/imageResources/${playerMove}-emoji.png">
  <img class="move-icon" src="/imageResources/${computerMove}-emoji.png">
  Computer `;

  document.querySelector(".js-result").innerHTML = result;

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

//The function for computerMove
function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

