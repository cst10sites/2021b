function clickedSubmit() {
	document.getElementById("idea").innerHTML = "";
	var subtotal = document.getElementById("subtotal").value;
	var tips = document.getElementById("tips").value;
	var split = document.getElementById("split").value;
	var afterTax = subtotal * 1.05;
	var afterTips = afterTax * tips;
	var afterSplit = afterTips / split;
	
	document.getElementById("aftertax").innerHTML = "After Tax Total: $" + afterTax;
	document.getElementById("aftertip").innerHTML = "Total After Tip: $" + afterTips;
	document.getElementById("aftersplit").innerHTML = "After Split: $" + afterSplit;
	
	if (split == 1) {
		if (afterSplit >= 100) {
			document.getElementById("idea").innerHTML = "You should think of splitting the bill.";
		}
	}
	
	if (split >= 2) {
		if (subtotal <= 50) {
			document.getElementById("idea").innerHTML = "You could pay for more yourself.";
		}
	}
}

function clickedReset() {
	document.getElementById("aftertax").innerHTML = "After Tax Total: ";
	document.getElementById("aftertip").innerHTML = "Total After Tip: ";
	document.getElementById("aftersplit").innerHTML = "After Split: ";
	document.getElementById("subtotal").value = "";
	document.getElementById("idea").innerHTML = "";
}