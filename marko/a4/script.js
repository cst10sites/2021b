var timesClicked = 0;
var startTime;
var currentTime;
var timeElapsed;
var cps = 0;

function cookieClicks() {
    if (timesClicked < 1) {
        timesClicked += 1;
        startTime = new Date().getTime();
        document.getElementById('clicks').innerHTML = ('Cookies: ') + (cps) + ('/seconds');
		document.getElementById('totalClicks').innerHTML = ('Cookies: ') + (timesClicked);
    }
    else {
        timesClicked += 1;
        currentTime = new Date().getTime();
        seconds = (currentTime - startTime) / 1000;
        document.getElementById('clicks').innerHTML = ('Cookies: ') + (cps) + ("/seconds");
		document.getElementById('totalClicks').innerHTML = ('Cookies: ') + (timesClicked);
        cps = Math.round(10 * timesClicked / seconds) / 10;
    }
}


function reset() {
    location.reload(); // reloads page
}