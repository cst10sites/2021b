var startTime;
var currentTime;
var timesClicked = 0;
var timer;
var cps=0;



function buttonClick () {
	
	
	cps = Math.round (timesClicked / (currentTime - startTime) * 100000) / 100;
	
	currentTime = new Date().getTime();
	
	if (timesClicked == 0) {
		startTime = currentTime;
	} else {
	document.getElementById('clicksPsecond').innerHTML = "Your clicks per second average: " + Math.round (timesClicked / (currentTime - startTime) * 100000) / 100;
		
	}
	timesClicked = timesClicked + 1; 
	document.getElementById('display').innerHTML = "Clicks: " + timesClicked; 


	if (cps > 4)
	{
	document.getElementById('message').innerHTML = "Keep it up!";
	}
	else {
	document.getElementById('message').innerHTML = "Try a little clicking faster";
	}
	

	}
	
	
function resetClicks () {
	timesClicked = 0;
	clicksPsecond= 0;
		document.getElementById('display').innerHTML = 'Clicks: ';
	document.getElementById('clicksPsecond').innerHTML = 'Your clicks per second:';
	document.getElementById('message').innerHTML = " ";
	
	
}

	










	


