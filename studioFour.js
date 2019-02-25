console.log('reading.js');
'use strict';

var palestine = document.querySelector('#palestine');
var israel = document.querySelector('#israel');
var myMsg = document.querySelector('#myMsg');
var msgSection = document.querySelector('#msgSection');


israel.addEventListener('click', function(){
 palestine.style.display='block';

 myMsg.innerHTML =
   'In red we see Israel, in black is the contested lands of the Palestinian people';
   msgSection.className = 'show';
})

// palestine.addEventListener('click', function(){
//   palestine.style.display='none';
//   israel.style.display='block';
// })
