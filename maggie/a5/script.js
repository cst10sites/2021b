function calculatingTip() {
	var subTotal = document.getElementById("subtotal").value;
    var tipPercentage = document.getElementById("tipAmount").value;
	var subtotalWithTax = (Math.round(subTotal * 1.05 * 100) / 100);
	var subtotalWithTip = (Math.round (subtotalWithTax * tipPercentage * 100) /100 );
	var grandTotalAmount = subtotalWithTip + subtotalWithTax;
	var splitAmount = document.getElementById("billSplit").value;
	
	document.getElementById("subtotalB").innerHTML = "Subtotal: $" + (Math.round(subTotal * 100) / 100);
	
	
	if (!isNaN(parseFloat(subTotal))) {


		document.getElementById("tax").innerHTML = "Tax: $" + (Math.round(subTotal * 0.05 * 100) / 100);

		document.getElementById("total").innerHTML = "Total after tax: $" + (Math.round(subTotal * 1.05 * 100) / 100);
	
	

		document.getElementById('tip').innerHTML = "Tip Amount: $" + subtotalWithTip;
	
		document.getElementById('grandtotal').innerHTML = "Total with Tip: $" + grandTotalAmount;
	
	
		document.getElementById('split').innerHTML = "Total after split: $" + (Math.round(grandTotalAmount / splitAmount * 100)/100);
		document.getElementById('finalBill').innerHTML = "Final Bill: $" + (Math.round(grandTotalAmount / splitAmount * 100) / 100);
	}

}

function resetPage(){
	
		document.getElementById("tax").innerHTML = "";

		document.getElementById("total").innerHTML = "";
	
	

		document.getElementById('tip').innerHTML = "";
	
		document.getElementById('grandtotal').innerHTML = "";
	
	
		document.getElementById('split').innerHTML = "" ;
		document.getElementById('finalBill').innerHTML = "";
}