
console.log('reading.js');
'use strict';
//
// function myFunction() {
//
//   var showImg = document.getElementById("showImg");
//
//   if (showImg.style.display == "block") {
//     showImg.style.display = "none";
//   } else {
//     showImg.style.display = "block";
//   }
// }

var backpack = document.querySelector('#backpack');
var showImg = document.querySelector('#showImg');

backpack.addEventListener ('click', function(){
  showImg.style.display='block';
})
