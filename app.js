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
activePlayer = 1;


document.querySelector('.dice').style.display = 'none';



//
function btn() {
  //Do something here

}
btn();



//Selecting button roll            two arguments,type of event & function called
document.querySelector('.btn-roll').addEventListener('click', function () {
//anomnymous function only used once
  // 1. random number
   var dice = Math.floor(Math.random()*6) +1;
  // 2. display the result
   var diceDom = document.querySelector('.dice');
   diceDom.style.display = 'block';
   diceDom.src = 'dice-' + dice + '.png';

  // 3. Update the round score IF the rolled number was not a one

});



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
