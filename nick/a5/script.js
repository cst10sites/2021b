setInterval(showstuff, 100)

var att = 0;
var	atiptotal = 0;
var ast = 0;
function clickedSubmit() {
	
	var tax = 1.05;



	valuetbt = document.getElementById("tbt").value;
	valuetip = document.getElementById("tips").value;
	valuesplit = document.getElementById("split").value;
		
	att = valuetbt * 1.05;
	atiptotal = valuetip * att;
	ast = atiptotal / valuesplit;
	
	
	document.getElementById('tat').innerHTML = "Total After Tax:" + att;
	document.getElementById('totalaftertip').innerHTML = "Total After Tip:" + atiptotal;
	document.getElementById('aftersplit').innerHTML = "After Split:" + ast;

}

function totalReset() {
	

		
	att = 0;
	atiptotal = 0;
	ast = 0;
	
	
	
	document.getElementById('tat').innerHTML = "Total After Tax:" + att;
	document.getElementById('totalaftertip').innerHTML = "Total After Tip:" + atiptotal;
	document.getElementById('aftersplit').innerHTML = "After Split:" + ast;
}

function showstuff() {
		document.getElementById('tat').innerHTML = "Total After Tax:" + att;
	document.getElementById('totalaftertip').innerHTML = "Total After Tip:" + atiptotal;
	document.getElementById('aftersplit').innerHTML = "After Split:" + ast;
	
}