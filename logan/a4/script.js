
var timesClicked = 0;
var clicksPerSec = 0;
var timeElapsed;
var startTime;
var currentTime;

function updateClicks() {
	if (timesClicked == 0) {
		startTime = new Date().getTime();
		//time in ms (1000ms = 1s) since 1/1/1970
	}
	else {
		currentTime = new Date().getTime();
		timeElapsed = (currentTime - startTime) / 1000;
	}
	if (clicksPerSec >= 6) {
		document.getElementById('displayText').innerHTML = 'very good!';
	}
	if (clicksPerSec <= 3) {
		document.getElementById('displayText').innerHTML = 'you can do better!';
	}
	if (clicksPerSec <= 6 && clicksPerSec >= 3) {
		document.getElementById('displayText').innerHTML = '';
	}
	timesClicked = timesClicked + 1;
	clicksPerSec = (timesClicked / timeElapsed);
	document.getElementById('displayClicks').innerHTML = 'Clicks: ' + timesClicked;
	document.getElementById('displayCPS').innerHTML = 'Clicks per second: ' + clicksPerSec;

}

function resetClicks() {
	timesClicked = 0;
	document.getElementById('displayClicks').innerHTML = '';
	document.getElementById('displayCPS').innerHTML = '';
	document.getElementById('displayText').innerHTML = '';
}