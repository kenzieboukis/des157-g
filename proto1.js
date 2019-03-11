console.log('reading.js');
'use strict';

var palestine = document.querySelector('#palestine');
var israel = document.querySelector('#israel');

israel.addEventListener('click', function(){
 palestine.style.display='block';
}
)

var story;

function preload() {
  // load the sound
  story = loadSound("http://localhost:8000/Desktop/sonia.mp3");
}

function setup() {
  story.play();
}

function mousePressed() {
  if (story.isPlaying() ) {
    story.pause();
  } else {
    story.play();
  }
}
