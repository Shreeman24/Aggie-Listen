// Global variables (no need type declaration)

var pattern = [1, 1, 1, 1, 1, 1, 1, 1]; // should not be this case
var progress = 0; // number of patterns guessed
var gamePlaying = false; // true till game ends
var tonePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0; // tracks where the user is in the clue sequence
var numMistakes; // tracks number of mistakes

var clueHoldTime = 1500; // how long each clue should light/sound
const cluePauseTime = 333; // how long to pause between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of clue sequence

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    numMistakes = 0;
  
    // Sets up pattern array
    setUpPattern();
  
  // swap the Start and Stop buttons
  
  // DOM is internal representation of the page
  // Search DOM for an id named 'StartBtn'
  // Searches list of CSS classes and element belongs to
  // Adds / removes CSS class name by invoking the .hidden rule in style.css
  document.getElementById("StartBtn").classList.add("hidden");
  document.getElementById("StopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("StartBtn").classList.remove("hidden");
  document.getElementById("StopBtn").classList.add("hidden");
}

function loseGame() {
  stopGame();
  
  // built in JS function
  alert("Game Over. You lost.")
}

function winGame() {
  stopGame();
  
  alert("Game Over. You won!")
}

function displayStrikes() {
  let count = 3-numMistakes;
  document.getElementById("strike").innerHTML = count;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function setUpPattern() {
  for(let i=0; i<=(pattern.length-1); i++) {
    pattern[i] = getRandomInt(1,7);
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    
    // Need to call clearButton, in a length of time specified by clueHoldTime, and pass btn as argument to the function
    // Schedules code to call sometime in the future
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0; // reset counter to zero every turn
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    clueHoldTime-=40
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    
    // Delay determines how long in the future to play the next clue
    // Delay doesn't reset to 0
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn) {
  /* Checks each guess, accepts btn as argument*/
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  // add game logic
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // Winning
        winGame();
      } else {
        // Pattern correct, next round
        progress++;
        playClueSequence();
      }
    } else {
      // Check next guess
      guessCounter++;
    }
  } else {
    // wrong
    numMistakes++;
    if (numMistakes == 3) {
        loseGame();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.63,
  2: 293.66,
  3: 349.23,
  4: 392,
  5: 440,
  6: 493
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
