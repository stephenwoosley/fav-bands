var bands = ["Mutemath", "Chvrches", "Sylvian Esso", "My Morning Jacket", "Vampire Weekend", "The Beatles", "Death Cab for Cutie"];

var bandList = document.getElementById('band-list');

var yourAnswer = document.getElementById('your-answer')

var userFavorite = prompt("What is your favorite band?");


if (bands.indexOf(userFavorite) === -1) {
	alert("Nah. They're pretty lame.");
}

else if (bands.indexOf(userFavorite) > -1) {
	alert("YEAH I LOVE THEM!");
}

yourAnswer.innerHTML = userFavorite;


document.getElementById("show-bands-button").addEventListener("click", function() {
    
    for (band in bands) {
		if (band == bands.length - 1) {
			bandList.innerHTML += bands[band] + "";
		}
		else if (band == bands.length - 2) {
			bandList.innerHTML += bands[band] + ", and ";
		}	
		else {
			bandList.innerHTML += bands[band] + ", ";
		}
	}
  }, false);



var showMyBands = function(){

	
}