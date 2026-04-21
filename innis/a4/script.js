var cookieCount = 0;
var clicksPerSecond;
var cookie = document.getElementById("cookie");
var countElement = document.getElementById("count");
var cpsElement = document.getElementById("cps");
var timeElapsed;
var currentTime;
var startTime;


cookie.onclick = function() {
	if (cookieCount == 0) {
		startTime = new Date().getTime();
		document.getElementById('cps').innerHTML = 'Cookies Per Second = 0';
		
	}
	
	else {
	currentTime = new Date().getTime();
	timeElapsed = (currentTime - startTime) / 1000;
	clicksPerSecond = (cookieCount / timeElapsed);
	cpsElement.innerHTML = clicksPerSecond;
	
	}
	cookieCount++;
	countElement.innerHTML = cookieCount;
}
