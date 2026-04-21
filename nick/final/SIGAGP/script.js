var four = 4;

function clickedSubmit() {



	yn1 = document.getElementById("yn1").value;
	yn2 = document.getElementById("yn2").value;
	yn3 = document.getElementById("yn3").value;
	yn4 = document.getElementById("yn4").value;	
	yn5 = document.getElementById("yn5").value;	
	totalvalue1 = yn1 + yn2;
	totalvalue2 = yn3 + yn4 + yn5;
	totalvaluemax = totalvalue1 + totalvalue2;
	
	if (totalvaluemax > 0) {
	document.getElementById('yndisplay').textContent = "No You Should Not Get A Guinea Pig";
	}
	
	else {
	document.getElementById('yndisplay').textContent = "Yes You Should Get A Guinea Pig";
	}
	

	
}
