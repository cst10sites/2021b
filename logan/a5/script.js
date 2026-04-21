
function submitPrice() {
	var subTotal = document.getElementById('subtotal').value;
	var afterTax = (parseFloat(subTotal)) * 1.05;
	var afterTip = afterTax * document.getElementById('tip').value;
	var afterSplit = afterTip / document.getElementById('split').value;
	document.getElementById('afterTip').innerHTML = 'Total After Tip: $' + afterTip;
	document.getElementById('afterTax').innerHTML = 'Total After Tax: $' + afterTax;
	document.getElementById('afterSplit').innerHTML = 'After Split (each person pays): $' + afterSplit;
	
}

function resetForm() {
	document.getElementById('afterTip').innerHTML = 'Total After Tip: ' + '';
	document.getElementById('afterTax').innerHTML = 'Total After Tax: ' + '';
	document.getElementById('afterSplit').innerHTML = 'After Split (each person pays): ' + '';
}
