//style="text-align:center"
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
			document.getElementById('cps').innerHTML = "";
	}
	
	else {
		currentTime = new Date().getTime();
		timeElapsed = (currentTime - startTime) / 1000;
		clicksPerSecond = (cookieCount / timeElapsed);
		cpsElement.innerHTML = clicksPerSecond;
	
	}
	cookieCount = cookieCount+1;
	countElement.innerHTML = cookieCount;
}