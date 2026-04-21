	let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
	let billAmount = document.getElementById('bill_amount').value;
	let tipPercentage = document.getElementById('tip_percentage').value;
	let split = document.getElementById('split').value;

	let tipAmount = document.getElementById('tip_amount').value = (billAmount*1.05) * (tipPercentage*0.01);
	let totalBill = document.getElementById('total_bill').value = parseInt(billAmount) + parseInt(tipAmount);
	let perPerson = document.getElementById('per_person').value = totalBill / split;
	
})