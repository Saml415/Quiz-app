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
      d: "St. Louis",
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
var questionIndex;
var answerContainer = document.querySelector('#answer-container');
console.log(answerContainer);
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (isWin && timerCount > 0) {
      clearInterval(timer);
      winGame();
    }
    if (timerCount <= 0) {
      clearInterval(timer);
      loseCounter();
    }
  }, 1000);
}
function startQuiz() {
  isWin = false;
  timerCount = 60;
  questionIndex = 0
  startTimer();
}

function addNew() {
  document.getElementById("header").innerHTML =
    myQuestions[questionIndex].question;
  var paragraph = document.getElementById("paragraph");
  var highscore = document.getElementById("highscore");
  var newWrap = document.createElement("div")
  var newUl = document.createElement("ul");
  var newLi = document.createElement("li");
  var newLib = document.createElement("li");
  var newLic = document.createElement("li");
  var newLid = document.createElement("li");
  var newButton = document.createElement("button"); 
  var newButtonb = document.createElement("button");
  var newButtonc = document.createElement("button");
  var newButtond = document.createElement("button");
  console.log(answerContainer);
  
  paragraph.remove();
  highscore.remove();
  startButton.remove();
  document.body.append(answerContainer);
  answerContainer.append(newUl);


  newWrap.setAttribute("class", "wrapper")

  // var answerContainer = document.querySelector('.wrapper');

  // answerContainer.addEventListener('click', function(event){
  //   var element = event.target
  
  
  // });





  newUl.appendChild(newLi);
  newButton.setAttribute("id", "a");
  newButton.setAttribute("name", "answer");
  newLi.append(newButton);
  newButton.textContent = myQuestions[questionIndex].answers.a;

  newUl.append(newLib);
  newButtonb.setAttribute("id", "b");
  newButtonb.setAttribute("name", "answer");
  newLib.append(newButtonb);
  newButtonb.textContent = myQuestions[questionIndex].answers.b;

  newUl.appendChild(newLic);
  newButtonc.setAttribute("id", "c");
  newButtonc.setAttribute("name", "answer");
  newLic.append(newButtonc); 
  newButtonc.textContent = myQuestions[questionIndex].answers.c;

  newUl.appendChild(newLid);
  newButtond.setAttribute("id", "d");
  newButtond.setAttribute("name", "answer");
  newLid.append(newButtond);
  newButtond.textContent = myQuestions[questionIndex].answers.d;
}


// function selectAnswer(answerChoice){
//   if (answerChoice != myQuestions[questionCount].correctAnswer){  
//  timerCount - 5;    
//  questionCount+;+
//  }  else{  
//  questionCount++  }}

function nextQuestion(event){
  document.querySelector("#")
} 

startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", addNew);

answerContainer.addEventListener("click", function(event) {
  var element = event.target
  if(element.matches('button')){
  }
});





