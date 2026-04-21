setInterval (Gramacookieadd, 100);
setInterval (addCursorcookies, 10000);
setInterval (addFarmc, 100);
setInterval (addMinec, 10);
setInterval (resetcps, 1000);



var cps1 = 0;
var AmontofCookies = 0;
function showCookies() {
	cps1 = cps1 + 1;
	AmontofCookies = AmontofCookies + CookieLevel + 1;
	document.getElementById('display').innerHTML = '<h1>Cookies:</h1> ' + AmontofCookies;
	
}

function resetcps() {
	document.getElementById('cps').innerHTML = '<h2>Cps:</h2> ' + cps1;
	cps1 = 0;
	
}

var Cookieprice = 500;
var CookieLevel = 0;
function addCookieup() {
	if (AmontofCookies > Cookieprice || AmontofCookies == Cookieprice) {
	Cookieprice = (CookieLevel * 500) + 500
	CookieLevel = CookieLevel + 1;
	AmontofCookies = AmontofCookies - Cookieprice
			}
}


function displayCookies() {

	if (AmontofCookies < 0) {
	AmontofCookies = 0;
	}
	
	else {
	document.getElementById('display').innerHTML = '<h1>Cookies:</h1> ' + AmontofCookies;
	}
}


var grandmaPrice = 250;
var Grandmas = 0;
function addGrandma() {
	if (AmontofCookies > grandmaPrice || AmontofCookies == grandmaPrice) {
	grandmaPrice = Grandmas * 25 + 250
	Grandmas = Grandmas + 1;
	AmontofCookies = AmontofCookies - grandmaPrice
	document.getElementById('Grandmas').innerHTML = '<h3>Grandmas:&nbsp;&nbsp;     </h3> ' + Grandmas;
			}
}

setInterval(displayCookies, 50);

var Gramacookieadd = 0;
function Gramacookieadd() {
	AmontofCookies = AmontofCookies + Grandmas

}

var CursorPrice = 15;
var Cursors = 0;
function addCursor() {
	if (AmontofCookies > CursorPrice || AmontofCookies == CursorPrice) {
	CursorPrice = Cursors * 3 + 15
	Cursors = Cursors + 1;
	AmontofCookies = AmontofCookies - CursorPrice
	document.getElementById('Cursors').innerHTML = '<h3>Cursors:&nbsp;&nbsp;</h3> ' + Cursors;
			}
}

var addCursorcookies = 0;
function addCursorcookies() {
	AmontofCookies = AmontofCookies + Cursors

}

var farmPrice = 1100;
var Farms = 0;
function addFarm() {
	if (AmontofCookies > farmPrice || AmontofCookies == farmPrice) {
	farmPrice = Farms * 250 + 1100
	Farms = Farms + 1;
	AmontofCookies = AmontofCookies - farmPrice
	document.getElementById('Farm').innerHTML = '<h3>Farms:&nbsp;&nbsp;</h3> ' + Farms;
			}
}

var minePrice = 12000;
var Mines = 0;
function addMine() {
	if (AmontofCookies > minePrice || AmontofCookies == minePrice) {
	minePrice = Mines * 400 + 12000
	Mines = Mines + 1;
	AmontofCookies = AmontofCookies - minePrice
	document.getElementById('Mine').innerHTML = '<h3>Mines:&nbsp;&nbsp;</h3> ' + Mines;
			}
}


function addFarmc() {
	AmontofCookies = AmontofCookies + Farms

}

function addMinec() {
	AmontofCookies = AmontofCookies + Mines

}

var blankPrice = 0;
var Blank = 0;
function blank() {
	if (AmontofCookies > blankprice) {
	blankPrice = Blanks * 25 + 250
	Blanks = Blanks + 1;
	AmontofCookies = AmontofCookies - blankPrice
	document.getElementById('Blank').innerHTML = '<h3>Blanks:</h3> ' + Blanks;
			}
}
















