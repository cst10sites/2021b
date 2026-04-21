// click() {
	//var subTotal = getElementById('subTotals').value;
	//var tip = getElementById('tips').value;
	//var splits = getElementById('split').value;
	//var afterTax = (subTotal * 1.05);
	//getElementById('taxTotal').innerHTML = ('After tax total:') + (afterTax);
	//getElementById('afterTip').innerHTML = ('After tip total:') + (afterTax * tip);
	//getElementById('afterSplit').innerHTML = ('After split:') + (afterTax * tip) / (splits);
	//alert(2);
//}

function submit() {
	var subTotal = document.getElementById('subTotals').value;
	var tip = document.getElementById('tips').value;
	var splits = document.getElementById('split').value;
	var afterTax = Math.round(100 * subTotal * 1.05) / 100;
	var afterTip = Math.round(100 * afterTax * tip) / 100;
	var afterSplit = Math.round(100 * afterTip / splits) / 100;


	document.getElementById('taxTotal').innerHTML = 'After tax total: $' + afterTax;
	document.getElementById('afterTip').innerHTML = 'After tip total: $' + afterTip;
	document.getElementById('afterSplit').innerHTML = 'After split: $'+ afterSplit;
}



function reset() {
	location.reload(); // reloads page
}


//Math.round(10 * timesClicked / seconds) / 10 rounding the number



