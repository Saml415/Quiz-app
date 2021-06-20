var myQuestions = [
  {
    question: "Who won the 1992 NL Cy Young Award?",
    answers: {
      a: "Greg Maddux",
      b: "David Cone",
      c: "Dennis Eckersley",
      d: "John Smoltz",
    },
    correctAnswer: "a",
  },
  {
    question: "When did Disneyland first open?",
    answers: {
      a: "1953",
      b: "1955",
      c: "1976",
      d: "1922",
    },
    correctAnswer: "b",
  },

  {
    question: "What Country do Legos originate from?",
    answers: {
      a: "Japan",
      b: "The Netherlands",
      c: "Russia",
      d: "Denmark",
    },
    correctAnswer: "d",
  },
  {
    question: "What year did the last astronaut land on the moon?",
    answers: {
      a: "1983",
      b: "1969",
      c: "1972",
      d: "1997",
    },
    correctAnswer: "c",
  },
  {
    question: "Which US city has NOT hosted the Olympic games?",
    answers: {
      a: "Atlanta",
      b: "New York City",
      c: "Los Angeles",
      d: "St.Louis",
    },
    correctAnswer: "b",
  },
];

var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var timerEl = document.getElementById("timer");
var startButton = document.getElementById("startbutton");
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
var questionCount = 0;
function startTimer(){
  timer = setInterval(function(){ 
    timerCount--;
    timerEl.textContent = timerCount;
    if(isWin && timerCount > 0) {
      clearInterval(timer);
      winGame();
    }
    if (timerCount <= 0) {
     clearInterval(timer);
     loseCounter();
    }
   }, 1000)
}
function startQuiz(){
  isWin = false;
  timerCount = 60;
  startTimer();
}


function addNew(){
  document.getElementById("header").innerHTML = myQuestions[questionCount].question;
  var paragraph = document.getElementById('paragraph');
  var highscore = document.getElementById('highscore');
  var newUl = document.createElement('ul')
  var newLi = document.createElement('li')
  var newButton = document.createElement('button');
  var newLabel = document.createElement('label');
  var newButtonb = document.createElement('button');
  var newLabelb = document.createElement('label');
  var newButtonc = document.createElement('button');
  var newLabelc = document.createElement('label');
  var newButtond = document.createElement('button');
  var newLabeld = document.createElement('label');
  
  paragraph.remove();
  highscore.remove();
  startButton.remove();
  document.body.appendChild(newUl);

  newUl.appendChild(newLi);
  newButton.setAttribute('id', 'a');
  newButton.setAttribute('name', 'answer');
  newLabel.setAttribute('id', 'a_text');
  newLabel.setAttribute('for', 'a');
  newLi.append(newButton);
  newButton.append(newLabel);
  newLabel.textContent = myQuestions[questionCount].answers.a;
  
  newUl.appendChild(newLi);
  newButtonb.setAttribute('id', 'b');
  newButtonb.setAttribute('name', 'answer');
  newLabelb.setAttribute('id', 'b_text');
  newLabelb.setAttribute('for', 'b');
  newLi.append(newButtonb);
  newButtonb.append(newLabelb);
  newLabelb.textContent = myQuestions[questionCount].answers.b;

  newUl.appendChild(newLi);
  newButtonc.setAttribute('id', 'c');
  newButtonc.setAttribute('name', 'answer');
  newLabelb.setAttribute('id', 'c_text');
  newLabelb.setAttribute('for', 'c');
  newLi.append(newButtonc);
  newButtonb.append(newLabelc);
  newLabelc.textContent = myQuestions[questionCount].answers.c;

  newUl.appendChild(newLi);
  newButtond.setAttribute('id', 'd');
  newButtond.setAttribute('name', 'answer');
  newLabeld.setAttribute('id', 'd_text');
  newLabeld.setAttribute('for', 'd');
  newLi.append(newButtond);
  newButtond.append(newLabeld);
  newLabeld.textContent = myQuestions[questionCount].answers.d;
 
 

}
startButton.addEventListener('click', startQuiz);
startButton.addEventListener('click', addNew);

