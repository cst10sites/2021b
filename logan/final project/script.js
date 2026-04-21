
function submitQuiz() {
	var q1 = document.getElementById('q1').value; 
	var q2 = document.getElementById('q2').value;
	var q3 = document.getElementById('q3').value; 
	var q4 = document.getElementById('q4').value; 
	var q5 = document.getElementById('q5').value;
	var score = (parseFloat(q1)) + (parseFloat(q2)) + (parseFloat(q3)) + (parseFloat(q4)) + (parseFloat(q5));
	document.getElementById('score').innerHTML = 'Score: '+ score + '/5';
}