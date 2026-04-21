var timesClicked = 0;
var currentTime;
var startTime;
var timeElapsed
var cps = 0;
var sign = false;

function clickerButton() {
	if (timesClicked == 0) {
		timesClicked += 1;
		cps = 1;
		startTime = new Date().getTime();
		document.getElementById("clicks").innerHTML = "Clicks: " + timesClicked;
	}
	else {
		timesClicked += 1;
		currentTime = new Date().getTime() // 1000ms = 1s
		timeElapsed = (currentTime - startTime) / 1000;
		cps = timesClicked / timeElapsed;
		document.getElementById("clicks").innerHTML = "Clicks: " + timesClicked;
		document.getElementById("clickspersecond").innerHTML = "Clicks Per Second: " + cps;
	}
	if (timeElapsed >= 10) {
		if (sign == false) {
			if (cps >= 6) {
				document.getElementById("mot").innerHTML = "Good job! Keep on clicking!";
				sign = true;
			}
			else {
				document.getElementById("mot").innerHTML = "You're clicking slow, you can do better!";
				sign = true;
			}
		}
	}
	if (timeElapsed >= 20) {
		if (sign == true) {
			document.getElementById("mot").innerHTML = "";
		}
	}
}

function resetButton() {
	timesClicked = 0;
	cps = 0;
	currentTime = 0;
	startTime = 0;
	timeElapsed = 0;
	sign = false;
	document.getElementById("clicks").innerHTML = "Clicks: " + timesClicked;
	document.getElementById("clickspersecond").innerHTML = "Clicks Per Second: " + cps;
	document.getElementById("mot").innerHTML = "";
}

function displayTime() {
	if (timesClicked > 0) {
		currentTime = new Date().getTime();
		timeElapsed = (currentTime - startTime) / 1000;
		cps = timesClicked / timeElapsed;
		document.getElementById("clickspersecond").innerHTML = "Clicks Per Second: " + cps;
	}
}

setInterval(displayTime, 100);