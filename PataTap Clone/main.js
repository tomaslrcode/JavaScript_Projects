$(document).ready(function(){
	alert("CONNECTED");

var messages = ["Press any key!", "Enjoy the sound!", "Make a beat!"],
    counter = 0,
    target = document.getElementById("fill");

setInterval(function(){ 
  
  target.innerHTML = messages[counter];
  counter++;
  
  if( counter >= messages.length ) {
    counter = 0;
  }

}, 450);

});

