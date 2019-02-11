
console.log('reading.js');
'use strict';


var backpack = document.querySelector('#backpack');
var showImg = document.querySelector('#showImg');
var myMicron = document.querySelector('#myMicron');
var myAirpods = document.querySelector('#myAirpods');
var myChapstick = document.querySelector('#myChapstick');
var micron= document.querySelector('#micron');
var airpods= document.querySelector('#airpods');
var chapstick= document.querySelector('#chapstick');
var button = document.querySelector('#button');



backpack.addEventListener ('click', function(){
  console.log('inback');
  showImg.style.display='block';
});

button.addEventListener ('click', function(){
  showImg.style.display='none';
  myChapstick.style.display='none';
  myAirpods.style.display='none';
  myMicron.style.display='none';
});

micron.addEventListener('click', function(){
  myMicron.style.display='block';
  myAirpods.style.display='none';
  myChapstick.style.display='none';
});

airpods.addEventListener('click', function(){
  myAirpods.style.display='block';
  myChapstick.style.display='none';
  myMicron.style.display='none';
});

chapstick.addEventListener('click', function(){
  myChapstick.style.display='block';
  myMicron.style.display='none';
  myAirpods.style.display='none';
});
