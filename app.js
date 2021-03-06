/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
//Selecting button roll two arguments,type of event & function called
document.querySelector('.btn-roll').addEventListener('click', function () {
      if (gamePlaying) {
      //anomnymous function only used once
      // 1. random number
       var dice = Math.floor(Math.random() * 6) +1;
      // 2. display the result
       var diceDom = document.querySelector('.dice');
       diceDom.style.display = 'block';
       diceDom.src = 'dice-' + dice + '.png';
      // 3. Update the round score IF the rolled number was not a one
      if (dice !== 1){
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
        // next player, ternary operator
        nextPlayer();
       }
     }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
  if (gamePlaying) {
  // Add current score to GLOBAL score
  scores[activePlayer] += roundScore;
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if player won the game
  if (scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
    gamePlaying = false;
  } else {
    // Next Player
    nextPlayer();
    }
  }
});

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent ='0';
  document.getElementById('current-1').textContent ='0';
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none';
};
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  // This gets elements by the ID entered and changes them based on text content
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};

// math.random gives random number and floor removes decimal
// dice = Math.floor(Math.random()*6) +1;
// This is a setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// must write HTML in string so JS parser doesn't error out
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// This is a getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// This selects the dice class in css and changes display to none


    // document.querySelector('#current-0').textContent// this doesnt work because textContent cannot interpret html*  = dice; //this renders the score dom manipulation
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'<em>' //This
//this is a setter

//var x = document.querySelector('#score-0').textContent;// this is a getter
//console.log(x);
