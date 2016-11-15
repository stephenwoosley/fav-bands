var bands = ["Mutemath", "Chvrches", "Sylvian Esso", "My Morning Jacket", "Vampire Weekend", "The Beatles", "Death Cab for Cutie"];

var bandList = document.getElementById('dynamic-band-list');

var userFavorite = prompt("What is your favorite band?");



if (bands.indexOf(userFavorite) === -1) {
	alert("Nah. They're pretty lame.");
}

else if (bands.indexOf(userFavorite) > -1) {
	alert("YEAH I LOVE THEM!");
}


	bandList.innerHTML = '<p>this is stuff</p>';



	// if (userFavorite == band[]toLowercase()) {

	// 	window.alert("YEAH I LOVE THEM!");

	// }
	// else {
	// 	window.alert("Nah. They're pretty lame.");
	// }

for (var band in bands) {
	$("dynamic-band-list").append(band);
}