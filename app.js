/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0]; //scores read out of this array
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
                                                                // btn callback function 
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. Random number needed.
    var dice = Math.floor(Math.random() * 6) + 1; 

    //2. Display the result 
    var diceDOM = document.querySelector('.dice') 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png'


    //3. Update the round score IF the rolled number NOT a 1
    if (dice !== 1) {
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player 
       nextPlayer();
        }

    }); 

    document.querySelector('btn-hold').addEventListener('click', function () {
        //Add Current score to global score 
        scores[activePlayer] += roundScore;
        //Update the UI 
        document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game (100 or over wins!)
       if (scores[activePlayer] >= 100) {
            document.querySelector('#name-'+ activePlayer).textContent = 'Winner!'; 
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.panel-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.panel-' + activePlayer + '-panel').classList.remove('active');
       } else {
                //Next player 
                 nextPlayer();

       }

       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('player-1-panel').classList.add('')
        // if activeplayer = 0 then activeplayer 1 else active player = 0 

       nextPlayer();
    });

    fucntion nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        roundScore = 0; 
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

       // document.querySelector('.player-0-panel').classList.remove('active');
       // document.querySelector('player-1-panel').classList.add('')
        // if activeplayer = 0 then activeplayer 1 else active player = 0 

        document.querySelector('.dice').style.display = 'none';
    };










    // document.querySelector('#current-0').textContent// this doesnt work because textContent cannot interpret html*  = dice; //this renders the score dom manipulation
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice +'<em>' //This 
//this is a setter 

//var x = document.querySelector('#score-0').textContent;// this is a getter
//console.log(x);

