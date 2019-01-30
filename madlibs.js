/* Mackenzie Boukis
Madlibs JS*/
console.log('reading.js');
'use strict';

/* capture the submit element for onclick*/
document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

function processForm(evt) {

/* variable for first noun*/
var noun = document.querySelector('#noun').value;

/* variable for second noun*/
var nounTwo = document.querySelector('#nounTwo').value;

/* variable for adjective*/
var adjective = document.querySelector('#adjective').value;

/* variable for verb*/
var verb = document.querySelector('#verb').value;

/* variable for length*/
var length = document.querySelector('#length').value;

/*variable for second ajective*/
var adjectiveTwo = document.querySelector('#adjectiveTwo').value;

/* variable for state*/
var state = document.querySelector('#state').value;

/*CAPTURE myMsg*/
var myMsg = document.querySelector('#myMsg');
var msgSection = document.querySelector('#msgSection');

myMsg.innerHTML =
  'On a dark desert ' + '<em>' + noun + '</em>' + '<br>' +
  ' cool ' + '<em>' + nounTwo + '</em>' + ' in my hair' + '<br>' +
  '<em>' + adjective + '</em>'+ ' smell of calitas' + '<br>' +
  '<em>' + verb + '</em>'+ ' up through the air' + '<br>' +
  ' Up ahead in the ' + '<em>' + length + '</em>' + '<br>' +
  ' I saw a ' + '<em>' + adjectiveTwo + '</em>' + ' light ' + '<br>' +
  '<br>' +
  'Welcome to the Hotel ' + '<em>' + state + '</em>';

  msgSection.className = 'show';

  evt.preventDefault();

}

function resetForm(){
  msgSection.className='hide';
}

console.log(noun);
