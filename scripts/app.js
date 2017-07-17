console.log('hi');


var firstSentence = 'You are in a spooky cave.';
var secondSentence = 'You are in a creepy abandoned building.';
var thirdSentence = 'Duh, because they are real.';
var fourthSentence = 'Your mind will be blown.';
var fifthSentence = 'It burns up, melting before your eyes.';
var sixthSentence = 'They totally do but they warn you it is a difficult journey.';
var seventhSentence = 'The luna bar is squished but edible';
var eighthSentence = 'Well that sucks for you.';
var ninthSentence = 'You are out of salt. Better hope you do not see anymore monsters.';
var tenthSentence = 'You help free the person but leave them with the monster so they can bandage them up.';
var eleventhSentence = 'The FBI informs you that Mulder is not real.';
var twelfthSentence = 'You order pizza and watch Game of Thrones as if nothing had ever happened.';
var thirteenthSentence = 'Once the reporter leaves you take a single suitcase to a seedy motel to hide out.';
var fourteenthSentence = 'Sit back! The bidding war for your exclusive is about to take off.';
var fifteenthSentence = 'You live the rest of your days as the resident hermit in the monster colony.';
var sixteenthSentence = 'The monsters find you and rend the flesh from your bones while you screamin terror.';


window.onload = function(event) {

	var nameInput = document.getElementById('first_name');
	var nameBtn = document.getElementById('name_btn');
	var firstChoice = document.getElementById('choice-one');
	var secondChoice = document.getElementById('choice-two');
	var thirdChoice = document.getElementById('choice-three');
	var fourthChoice = document.getElementById('choice-four');
	var fifthChoice = document.getElementById('choice-five');
	var sixthChoice = document.getElementById('choice-six');
	var seventhChoice = document.getElementById('choice-seven');
	var eighthChoice = document.getElementById('choice-eight');
	var ninthChoice = document.getElementById('choice-nine');
	var tenthChoice = document.getElementById('choice-ten');
	var eleventhChoice = document.getElementById('choice-eleven');
	var twelfthChoice = document.getElementById('choice-twelve');
	var thirteenthChoice = document.getElementById('choice-thirteen');
	var fourteenthChoice = document.getElementById('choice-fourteen');
	var fifteenthChoice = document.getElementById('choice-fifteen');
	var sixteenthChoice = document.getElementById('choice-sixteen');
	document.getElementById('choice-one').style.display = 'none';
	document.getElementById('choice-two').style.display = 'none';
	document.getElementById('choice-three').style.display = 'none';
	document.getElementById('choice-four').style.display = 'none';
	document.getElementById('choice-five').style.display = 'none';
	document.getElementById('choice-six').style.display = 'none';
	document.getElementById('choice-seven').style.display = 'none';
	document.getElementById('choice-eight').style.display = 'none';
	document.getElementById('choice-nine').style.display = 'none';
	document.getElementById('choice-ten').style.display = 'none';
	document.getElementById('choice-eleven').style.display = 'none';
	document.getElementById('choice-twelve').style.display = 'none';
	document.getElementById('choice-thirteen').style.display = 'none';
	document.getElementById('choice-fourteen').style.display = 'none';
	document.getElementById('choice-fifteen').style.display = 'none';
	document.getElementById('choice-sixteen').style.display = 'none';
	document.getElementById('first-step').style.display = 'none';
	document.getElementById('second-step').style.display = 'none';
	document.getElementById('third-step').style.display = 'none';
	document.getElementById('fourth-step').style.display = 'none';
	document.getElementById('fifth-step').style.display = 'none';
	document.getElementById('sixth-step').style.display = 'none';
	document.getElementById('seventh-step').style.display = 'none';
	document.getElementById('eighth-step').style.display = 'none';


	firstChoice.onclick = function(event) {
		createRow(firstSentence);
		document.getElementById('first-step').style.display = 'none';
		document.getElementById('choice-three').style.display = 'block';
		document.getElementById('choice-four').style.display = 'block';
		document.getElementById('second-step').style.display = 'block';
	}

	secondChoice.onclick = function(event) {
		createRow(secondSentence);
		document.getElementById('first-step').style.display = 'none';
		document.getElementById('choice-three').style.display = 'block';
		document.getElementById('choice-four').style.display = 'block';
		document.getElementById('second-step').style.display = 'block';
	}

	thirdChoice.onclick	= function(event) {
		createRow(thirdSentence);
		document.getElementById('second-step').style.display = 'none';
		document.getElementById('choice-five').style.display = 'block';
		document.getElementById('choice-six').style.display = 'block';
		document.getElementById('third-step').style.display = 'block';
	}

	fourthChoice.onclick = function(event) {
		createRow(fourthSentence);
		document.getElementById('second-step').style.display = 'none';
	document.getElementById('choice-five').style.display = 'block';
		document.getElementById('choice-six').style.display = 'block';
		document.getElementById('third-step').style.display = 'block';
	}

	fifthChoice.onclick = function(event) {
		createRow(fifthSentence);
		document.getElementById('third-step').style.display = 'none';
		document.getElementById('choice-seven').style.display = 'block';
		document.getElementById('choice-eight').style.display = 'block';
		document.getElementById('fourth-step').style.display = 'block';
	}

	sixthChoice.onclick = function(event) {
		createRow(sixthSentence);
		document.getElementById('third-step').style.display = 'none';
		document.getElementById('choice-seven').style.display = 'block';
		document.getElementById('choice-eight').style.display = 'block';
		document.getElementById('fourth-step').style.display = 'block';
	}

	seventhChoice.onclick = function(event) {
		createRow(seventhSentence);
		document.getElementById('fourth-step').style.display = 'none';
				document.getElementById('choice-nine').style.display = 'block';
		document.getElementById('choice-ten').style.display = 'block';
		document.getElementById('fifth-step').style.display = 'block';
	}

	eighthChoice.onclick = function(event) {
		createRow(eighthSentence);
		document.getElementById('fourth-step').style.display = 'none';
						document.getElementById('choice-nine').style.display = 'block';
		document.getElementById('choice-ten').style.display = 'block';
		document.getElementById('fifth-step').style.display = 'block';
	}

	ninthChoice.onclick = function(event) {
		createRow(ninthSentence);
		document.getElementById('fifth-step').style.display = 'none';
		document.getElementById('choice-eleven').style.display = 'block';
		document.getElementById('choice-twelve').style.display = 'block';
		document.getElementById('sixth-step').style.display = 'block';
	}

	tenthChoice.onclick = function(event) {
		createRow(tenthSentence);
		document.getElementById('fifth-step').style.display = 'none';
		document.getElementById('choice-eleven').style.display = 'block';
		document.getElementById('choice-twelve').style.display = 'block';
		document.getElementById('sixth-step').style.display = 'block';
	}

	eleventhChoice.onclick = function(event) {
		createRow(eleventhSentence);
		document.getElementById('sixth-step').style.display = 'none';
		document.getElementById('choice-thirteen').style.display = 'block';
		document.getElementById('choice-fourteen').style.display = 'block';
		document.getElementById('seventh-step').style.display = 'block';
	}

	twelfthChoice.onclick = function(event) {
		createRow(twelfthSentence);
		document.getElementById('sixth-step').style.display = 'none';
		document.getElementById('choice-thirteen').style.display = 'block';
		document.getElementById('choice-fourteen').style.display = 'block';
		document.getElementById('seventh-step').style.display = 'block';
	}

	thirteenthChoice.onclick = function(event) {
		createRow(thirteenthSentence);
		document.getElementById('seventh-step').style.display = 'none';
		document.getElementById('choice-fifteen').style.display = 'block';
		document.getElementById('choice-sixteen').style.display = 'block';
		document.getElementById('eighth-step').style.display = 'block';
	}

	fourteenthChoice.onclick = function(event) {
		createRow(fourteenthSentence);
		document.getElementById('seventh-step').style.display = 'none';
		document.getElementById('choice-fifteen').style.display = 'block';
		document.getElementById('choice-sixteen').style.display = 'block';
		document.getElementById('eighth-step').style.display = 'block';
	}

	fifteenthChoice.onclick = function(event) {
		createRow(fifteenthSentence);
		document.getElementById('eighth-step').style.display = 'none';
	}

	sixteenthChoice.onclick = function(event) {
		createRow(sixteenthSentence);
		document.getElementById('eighth-step').style.display = 'none';
	}

	nameBtn.onclick = function(event) {
		// console.log(event);
		console.log(nameInput.value);
		createRow('Let\'s have an adventure, ' +nameInput.value);
		document.getElementById('first-step').style.display = 'block';
		document.getElementById('choice-one').style.display = 'block';
		document.getElementById('choice-two').style.display = 'block';
		document.getElementById('name').style.display = 'none';
	}

	console.log(nameInput, nameBtn);

}


//this function creates and adds rows to our app
function createRow(words) {
	console.log(words);



	//we need a new div
	var row = document.createElement('div');
	var col = document.createElement('div');
	var p = document.createElement('p');
	p.innerHTML = words;
	row.append(col);
	row.className = 'row';
	col.className = 'col s12';
	col.append(p);
	console.log(row);
	//append the whole thing to app
	var app = document.getElementById('app');
	app.append(row);
}