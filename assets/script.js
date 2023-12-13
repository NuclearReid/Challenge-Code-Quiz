var startButton = document.querySelector("#start-button");

var containerStart = document.querySelector(".container-start");
var containerQuiz = document.querySelector(".container-quiz-nonVis");


// to enter name
var score = document.querySelector(".score-nonVis");
var toScoreBoardBut = document.querySelector("#to-scoreBoard");

// score board
var containerHighScores = document.querySelector(".container-highScores-nonVis");
var toStartBut = document.querySelector("#to-start");

// variables for the timer
var timerEl = document.querySelector("#timer");
var totalTime = 15;
var secondsLeft = totalTime;

// score board link
var toScoreLink = document.querySelector("#to-score-link");

//the boolean to stop the timer when someone wants to go to the scoreboard
var timerStopBoolean = false;

// text for the quiz questions
var questionTxt = document.querySelector("#question");


// text for quiz buttons
var answer1Txt = document.querySelector("#answer-1");
var answer2Txt = document.querySelector("#answer-2");
var answer3Txt = document.querySelector("#answer-3");
var answer4Txt = document.querySelector("#answer-4");

var answer1button = document.querySelector("#answer-1");
var answer2button = document.querySelector("#answer-2");
var answer3button = document.querySelector("#answer-3");
var answer4button = document.querySelector("#answer-4");





var questionNumber = 1;
var correct = 0;




// function scoreBoardLinkClick(){

//         scoreBoard();

// }
function scoreBoardLink(){
    //click on the scoreboard anchor and it sends you to the scoreboard
    toScoreLink.removeEventListener("click", scoreBoard);
    toScoreLink.addEventListener("click", scoreBoard);

}

//resets the time/countdown clock
function timeReset(){
    totalTime=50;
    secondsLeft= 0;
    secondsLeft= totalTime;
    
    timerEl.textContent= "Time: "+ secondsLeft;

}


//makes the start screen nonvisible and starts up the quiz
function startQuiz(){
    containerStart.className = "container-start-nonVis";
    quiz();
    
}


//these are the questions and answers that'll be displayed for each question
function updateQuestion(){
    containerQuiz.className = "container-quiz";
        if(questionNumber == 1){
            questionTxt.textContent = "What does HTML stand for?";
            answer1Txt.textContent = "Hyper Text Markup Language";
            answer2Txt.textContent = "Hyperlinks and Text Markup Language";
            answer3Txt.textContent = "Home Tool Markup Language";
            answer4Txt.textContent = "Hyper Tool Markup Langauge";
        }
    
        if(questionNumber == 2){
            questionTxt.textContent = "Which HTML element is used to define important text?";
            answer1Txt.textContent = "<important>";
            answer2Txt.textContent = "<b>";
            answer3Txt.textContent = "<strong>";
            answer4Txt.textContent = "<i>";
        }
        if(questionNumber == 3){
            questionTxt.textContent = "How do you comment in a CSS file?";
            answer1Txt.textContent = "// this is a comment";
            answer2Txt.textContent = "/* this is a comment */";
            answer3Txt.textContent = "<!-- this is a comment -->";
            answer4Txt.textContent = "# this is a comment";
        }
        if(questionNumber == 4){
            questionTxt.textContent = "How do you declare a JavaScript variable?";
            answer1Txt.textContent = "v carName;";
            answer2Txt.textContent = "variable carName;";
            answer3Txt.textContent = "val carName;";
            answer4Txt.textContent = "var carName;";
        }
        if(questionNumber == 5){
            questionTxt.textContent = "Which operator is used to assign a value to a variable in JavaScript?";
            answer1Txt.textContent = "*";
            answer2Txt.textContent = "-";
            answer3Txt.textContent = "=";
            answer4Txt.textContent = "+";
        }
        if(questionNumber == 6){
            questionTxt.textContent = "What does CSS stand for?";
            answer1Txt.textContent = "Creative Style Sheets";
            answer2Txt.textContent = "Colorful Style Sheets";
            answer3Txt.textContent = "Cascading Style Sheets";
            answer4Txt.textContent = "Computer Style Sheets";
        }
        if(questionNumber == 7){
            questionTxt.textContent = "Which HTML attribute is used to define inline styles?";
            answer1Txt.textContent = "style";
            answer2Txt.textContent = "font";
            answer3Txt.textContent = "class";
            answer4Txt.textContent = "styles";
        }
        if(questionNumber == 8){
            questionTxt.textContent = "Which is the correct CSS syntax?";
            answer1Txt.textContent = "{body;color:black;}";
            answer2Txt.textContent = "body {color: black;}";
            answer3Txt.textContent = "{body:color=black;}";
            answer4Txt.textContent = "body:color=black;";
        }
        if(questionNumber == 9){
            questionTxt.textContent = "How do you select an element with id “demo” in CSS?";
            answer1Txt.textContent = ".demo";
            answer2Txt.textContent = "demo";
            answer3Txt.textContent = "*demo";
            answer4Txt.textContent = "#demo";
        }
        if(questionNumber == 10){
            questionTxt.textContent = "What is the correct way to link a JavaScript file to an HTML document?";
            answer1Txt.textContent = "<script src='script.js'></script>";
            answer2Txt.textContent = "<script href='script.js'></script>";
            answer3Txt.textContent = "<link rel='script' src='script.js'>";
            answer4Txt.textContent = "<link href='script.js' type='text/javascript'>";
        }

    }


    //all each of these 4 functions work the same, the only difference is which questions they're correct for
//these are the functions that are used for the clicks/event listeners
function answer1Click() {
    console.log("answer 1 clicked");
    // Check if the answer is correct and ups the correct counter
    if(questionNumber == 1 || questionNumber == 7 || questionNumber == 10){
        //time is always taken away when moving to the next question, the correct answer just gives it back
        secondsLeft=secondsLeft+10;
        correct++;
    }

    // Move to the next question
    secondsLeft=secondsLeft-10;
    questionNumber++;

    //this is here to refresh the questions so we see the new one
    updateQuestion();

    //when the user has gone through all 10 questions, the last click will send them to the form to enter their name
    if(questionNumber == 11){
        enterName();
    }
  }
  
  // the function for when you click on button 2
  function answer2Click() {
    console.log("answer 2 clicked");
    // Check if the answer is correct and update the score
    if(questionNumber == 3 || questionNumber == 8){
        secondsLeft=secondsLeft+10;
        correct++;
    }
    // Move to the next question
    secondsLeft=secondsLeft-10;
    questionNumber++;
    updateQuestion();
    if(questionNumber == 11){
        enterName();
    }
  }
  
  // the function for when you click on button 3
  function answer3Click() {
    console.log("answer 3 clicked");
    // Check if the answer is correct and update the score
    if(questionNumber == 2 || questionNumber == 5 || questionNumber == 6){
      secondsLeft=secondsLeft+10;
      correct++;
    }
    // Move to the next question
    secondsLeft=secondsLeft-10;
    questionNumber++;
    updateQuestion();
    if(questionNumber == 11){
      enterName();
    }
  }
  
  // the function for when you click on button 4
  function answer4Click() {
    console.log("answer 4 clicked");
    // Check if the answer is correct and update the score
    if(questionNumber == 4 || questionNumber == 9){
        secondsLeft=secondsLeft+10;
        correct++;
    }
    // Move to the next question
    secondsLeft=secondsLeft-10;
    questionNumber++;
    updateQuestion();
    if(questionNumber == 11){
        enterName();
    }
  }
  
  //the event listeners for the buttons.
  function quiz(){
    scoreBoardLink();
    //starts up the countdown
    countdown();
    // Remove the previous event listeners (when they want to do the quiz again)
    //if the eventListener is not removed it was happening as many times as the user did attempts
    //like on the second time around, the user would lose 20 sec for a wrong answer
    //3rd time, 30 sec for a wrong answer etc etc.
    answer1button.removeEventListener("click", answer1Click);
    answer2button.removeEventListener("click", answer2Click);
    answer3button.removeEventListener("click", answer3Click);
    answer4button.removeEventListener("click", answer4Click);
  
    // Add the new event listeners 
    answer1button.addEventListener("click", answer1Click);
    answer2button.addEventListener("click", answer2Click);
    answer3button.addEventListener("click", answer3Click);
    answer4button.addEventListener("click", answer4Click);
    
    //refreshes the page to display the next question
    updateQuestion();
    console.log(correct + " correct counter");
    console.log(questionNumber + " question number");
  }
  

//the countdown clock
function countdown(){
    //sets the timer
    var timerInterval = setInterval(function() {
        secondsLeft--;

        //displays the clock
        timerEl.textContent= "Time: "+ secondsLeft;
        
        //when the timer hits 0 or goes below 0 (ie they get a wrong question with 3 sec left) sends the user to enter their name
        if(secondsLeft === 0 || secondsLeft < 0 ) {
            secondsLeft = 0;
            timerEl.textContent= "Time: "+ secondsLeft;
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            enterName();
        }
      }, 1000);
}



//scoreboard variables -->these are down here so i can see them more easily while working at this part

//the highscore list
// var listLink = document.querySelector("#list-link");



// saving/displaying the person's name
var initials = document.querySelector("#initials");
var word;

var ol = document.getElementById("list-link")
var li;

var getInitials;

// will later be used with JSON
var userScores = [];
var userScore = [];
// var localInitials;
var initialsArray = [];
var correctArray = [];
var highScores= [];

function enterName(){
    //where the user sees the form to enter their name
    score.className = "score";
    //makes the quiz disapear
    containerQuiz.className = "container-quiz-nonVis";

    //remove the previous listener so it doesn't repeat the action on multiple run throughs
     toScoreBoardBut.removeEventListener("click", saveScore);
     //reimplements the event listener, sends the user to the scoreboard and should save their initials in the local data
     toScoreBoardBut.addEventListener("click", saveScore);
}

function saveScore(event){
    var newInitals = initials.value.trim();
    //I still need to add the user score to their initials....asd;lfjas;ldfj;alkd
    event.preventDefault();

  
    //puts each letter entered into it's own spot in the array
    //I don't want each letter to have it's own spot in the array
    if(newInitals!==""){
          //with out this, the user would just be sent straight to the start screen
        
        //stores the initials the user entered in the local storage
        // window.localStorage.setItem("highScores", JSON.stringify(initials));
        
        //gets the initials from the local storage
        
        highScores = JSON.parse(window.localStorage.getItem("highScores")) ||[];
        console.log(highScores);
        var newScore ={ 
            score: correct,
            initials: newInitals
        };
        highScores.push(newScore);

        window.localStorage.setItem("highScores", JSON.stringify(highScores));
    }
    // window.location.reload();
    
    //goes to the scoreboard
    scoreBoard();
}





function scoreBoard(){
    //makes just the Score Board visible
    toScoreLink.className = "to-score-link-nonVis";
    containerQuiz.className = "container-quiz-nonVis";
    containerHighScores.className="container-highScores";
    score.className = "score-nonVis";
    containerStart.className = "container-start-nonVis";


    //get the scores to show up on the function
    highScores = JSON.parse(window.localStorage.getItem("highScores")) ||[];
    //
    for(var i = 0; i<highScores.length;i++){
        //makes a list element
        li = document.createElement('li');
        //sets the text of that list element to be the stored values 
        li.textContent = highScores[i].score +" "+ highScores[i].initials;
        //appends that list element to the ordered list
        ol.appendChild(li);
    }

    //resets the countdown
    timeReset();
    
    
    toStartBut.removeEventListener("click", restart);
    //sends you back to the start of the quiz
    toStartBut.addEventListener("click", restart);
}




function start(){
    //when you click the start button, the start screen swaps to the quiz

    //this makes the anchor to the score board active
    scoreBoardLink();
    //resets the time
    timeReset();
    //resets the question number
    questionNumber = 1;
    console.log("question number "+ questionNumber);
    //makes the start screen visible
    containerStart.className = "container-start";
    //makes the anchor to the score board visible
    toScoreLink.id="to-score-link";

    //clears a previous startQuiz event listener
    startButton.removeEventListener("click", startQuiz);
    //makes the startQuiz eventlistener active again
    startButton.addEventListener("click", startQuiz);
}

function restart(){
    //clears the high score screen
    containerHighScores.className = "container-highScores-nonVis";
    console.log("clicked 'start again'");
    //sends the user back to the start
    start();
}

//starts the application
start();