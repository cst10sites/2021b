function finish () {
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
		if (question1=="900lbs-1600lbs") {
			correct++;
		}
		
		if (question2=="The Arctic") {
			correct++;
		}
		
		if (question3=="carnivores") {
			correct++;
		}
		
		if (question4=="all of the above") {
			correct++;
		}
		
		if (question5=="by one third") {
			correct++;
		}
		
		var messages = ["Great job!", "That's just okay","You really need to do better"];

var range;
	if (correct < 3){
		range = 2;	
	}
	
	if (correct > 2 && correct < 4){
		range = 1;	
	}
	
	if (correct > 3){
		range = 0;	
	}

	document.getElementById('message').innerHTML = messages[range];

		document.getElementById('afterSubmit').style.visibility = 'visible';
	document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";
}