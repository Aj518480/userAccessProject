

// Global Variables
let game = {
  counter: 30,
  randomCodes:[],
  chosenCode:"",
}
 
//Button clicked start timer
//Once the onclick listener has go off I want the timer to start counting down from 30 this will require a function to make a countdown clock
$(document).ready(function(){
  $("button").click(function(){
    alert("I ran"); 
  });
  countdown();
  alert("i made here")
});
//Timer
//decrement counter for timer to go down from 30
//display timer to page using Jquery
//When the timer is reaches 0
//Resets timer 
const countdown = () =>
  let timer = setInterval(game.counter, 30000);
  game.counter--;
  $(".timer").append(game.counter);
  if (game.counter === 0) {
      
      clearInterval(game.counter)
      alert("everyone died")
      }

  else{
    elem.innerHTML = .timer+ ' seconds remaining'; }
  }

//this will need a function to make an array of 9 randomize numbers 
//and the 9 randomize number to appear on the page.
const randomCodeGenerator = () =>

 Math.floor(Math.random())


//put these array of randomize number in a global var so it can be compared for later use.


//then grab this array into a different function and it can pick random from the array
// putting this number in a global variable so the conditional can see if it is the match number.
//I need to set a few conditionals
//1. to see if the enter code matches one of the randomize codes 
//-stop clock
//put title to change to "you have stopped the bomb you are everyones hero"
//(celebrating gif) for 5 seconds restart game to start button
//2. if the clock got to zero
//-stop clock
//-change title to "you lost everyone"
//change bomb img to an exploding one
//5 seconds change button to start again
