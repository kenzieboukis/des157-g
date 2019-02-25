console.log('reading.js');
'use strict';

var story;


function preload() {
  // load the sound
  story = loadSound("sonia.mp3");
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
