console.log('reading.js');
'use strict';

document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

var nir= document.querySelector('#nir');
var westBank = document.querySelector('#westBank');
var gazaStrip = document.querySelector('#gazaStrip');
var jerusalem = document.querySelector('#jerusalem');

var nirText = document.querySelector('#nirText');
var westBankText = document.querySelector('#westBankText');
var gazaStripText = document.querySelector('#gazaStripText');
var jerusalemText = document.querySelector('#jerusalemText');

var addStory =document.querySelector('#addStory');
var formSection = document.querySelector('#formSection');

var bouncing =document.querySelector('#bouncing-arrow')
var faq = document.querySelector('#faq');
var openfaq = document.querySelector('#openfaq');

//map text show

nir.addEventListener('click', function(){
  nirText.style.display='block';
  westBankText.style.display='none';
  gazaStripText.style.display='none';
  jerusalemText.style.display='none';
})

westBank.addEventListener('click', function(){
  westBankText.style.display='block';
  gazaStripText.style.display='none';
  jerusalemText.style.display='none';
  nirText.style.display='none';
})

gazaStrip.addEventListener('click', function(){
  gazaStripText.style.display='block';
  jerusalemText.style.display='none';
  nirText.style.display='none';
  westBankText.style.display='none';
})

jerusalem.addEventListener('click', function(){
  jerusalemText.style.display='block';
  nirText.style.display='none';
  westBankText.style.display='none';
  gazaStripText.style.display='none';
})

//faq click show
faq.addEventListener('click', function(){
  openfaq.style.display='block';
  bouncing.style.display='none';
})

//form section show
addStory.addEventListener('click', function(){
  formSection.style.display='block';
})

// time based interval on the faq
var tiempo = document.querySelector('#time');
var clicked = document.querySelector('#clickMe');

var timerID;

tiempo.addEventListener ('mouseover', function(){
  console.log('mouseover on eat');
  timerID = setTimeout(showclicked, 1000);
});

tiempo.addEventListener ('mouseout', function(){
  console.log('mouseout on eat');
  clearTimeout(timerID);
  clicked.style.opacity = 0;
});

function showclicked(){
  console.log('showing msg');
  clicked.style.opacity = 1;
}
//end of time based interval

//process form js beginning
function processForm(evt) {

var myMsg = document.querySelector('#myMsg');
var msgSection = document.querySelector('#msgSection');

var name = document.querySelector('#name').value;

myMsg.innerHTML =
  'Thank you, ' + name + ' your story has been recorded';

  msgSection.className = 'show';

  evt.preventDefault();

}

function resetForm(){
  msgSection.className='hide';
}
