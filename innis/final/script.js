
var myQuestions = [
  {
    question: "What is the average time a normal player stays on the ice?",
    answers: {
      a: "10 seconds    ",
      b: "about 1 minute    ",
      c: "The whole game"
    },
    correctAnswer: "b"
  },
  
  
  {
    question: "What is the standard size of a hockey net?",
    answers: {
      a: "4' by 6'    ",
      b: "3' by 5'    ",
      c: "4' by 7'"
    },
    correctAnswer: "a"
  },
  
  
  {
    question: "Who was the most famous goalie in the 1990's?",
    answers: {
      a: "Grant Fuhr    ",
      b: "Roberto Luongo    ",
      c: "Patrick Roy"
    },
    correctAnswer: "c"
  },
  {
    question: "What was the date when Jacques Plante first wore a mask?",
    answers: {
      a: "November 1, 1959",
      b: "August 16, 1955",
      c: "November 1, 1969"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the cage at the front of a combo mask?",
    answers: {
      a: "Square    ",
      b: "Cats-eye    ",
      c: "Cage"
    },
    correctAnswer: "b"
  }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

  function showQuestions(questions, quizContainer){
    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){
      
      answers = [];

      for(letter in questions[i].answers){

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer){
    
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    var userAnswer = '';
    var numCorrect = 0;
    
    for(var i=0; i<questions.length; i++){

      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      if(userAnswer===questions[i].correctAnswer){
        numCorrect++;
        
        answerContainers[i].style.color = 'lightgreen';
      }
      else{
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);
  
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}