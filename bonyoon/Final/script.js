var timesClicked = 0;
var startTime;
var currentTime;
var timeElapsed;

function updateStopWatch() {

	if (timesClicked == 0) {
		startTime = new Date().getTime();
	
		document.getElementById('lap').innerHTML = 'lap';
		document.getElementById('timeElapsed').innerHTML = 'Flip your patty after 3 to 7 minutes!';
		
		
		
	}
	else {
		currentTime = new Date().getTime();
		timeElapsed = (currentTime - startTime) / 1000;
		document.getElementById('timeElapsed').innerHTML = 'Time Elapsed: ' + timeElapsed + ' - Lap ' + timesClicked
		+ '<br>' + document.getElementById('timeElapsed').innerHTML
		
	}
	timesClicked = timesClicked + 1;
	
		  
}


function displayTime () {
	if (timesClicked > 0 ) {
		currentTime =new Date () .getTime ();
		document.getElementById('timeDisplayed').innerHTML =timeElapsed;
		timeElapsed = (currentTime - startTime) / 1000;
		  
		
	}
}

setInterval (displayTime, 100);



function resetStopWatch () {

	timesClicked = 0;
document.getElementById('lap').innerHTML = 'start';
document.getElementById('timeElapsed').innerHTML = '';
document.getElementById('timeDisplayed').innerHTML = '';



	
	
}

