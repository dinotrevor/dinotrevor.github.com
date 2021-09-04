// JavaScript Documentconst start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreDiv = document.getElementById("score");



		const questions =
		[
		{
		question: "What color are Dorthy's slippers in The Wizard of Oz?",
		choiceA : "Orange",
		choiceB : "Ruby",
		choiceC : "Pink",
		choiceD : "White",
		correct: 'B',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What is the name of Spongebob's work?",
		choiceA : "Oyster Outlet",
		choiceB : "Rocking Swordfish",
		choiceC : "Krusty Krab",
		choiceD : "Fin",
		correct: 'C',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "How much donuts is in a bakers dozen?",
		choiceA : "12",
		choiceB : "11",
		choiceC : "13",
		choiceD : "14",
		correct: 'C',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What planet has the moon Titan?",
		choiceA : "Neptune",
		choiceB : "Saturn",
		choiceC : "Mars",
		choiceD : "Venus",
		correct: 'B',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What year did the original Woodstock concert take place?",
		choiceA : "1949",
		choiceB : "1959",
		choiceC : "1969",
		choiceD : "1979",
		correct: 'C',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What country has the city Astana?",
		choiceA :"Dominican Republic",
		choiceB : "Russia",
		choiceC : "Khazakstan",
		choiceD : "Nepal",
		correct:'C',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What year did NATO form?",
		choiceA : "1939",
		choiceB : "1949",
		choiceC : "1929",
		choiceD : "1944",
		correct: 'B',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "What country has more people?",
		choiceA : "Japan",
		choiceB : "Indonesia",
		choiceC : "Russia",
		choiceD : "Germany",
		correct: 'B',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "Who was John Glen?",
		choiceA : "Inventor of Box-Tops",
		choiceB : "Founder of the City of Glendale",
		choiceC : "First man the Orbit the Earth",
		choiceD : "Maker of HTML",
		correct: 'C',
		incorrectA: 'A',
		incorrectD: 'D'
		},
		{
		question: "How far is the moon from earth?",
		choiceA : "330,050 miles",
		choiceB : "238,900 miles",
		choiceC : "212,200 miles",
		choiceD : "175,700 miles",
		correct: 'B',
		incorrectA: 'A',
		incorrectD: 'D'
		}
		];	
		
//This function starts the games after the user enters a username to play with, which will be displayed on the screen next to their current score *and the 30 second timer*.	
		/*function start() {
			var name = prompt("Please create a username!");
			document.getElementById("button1").style.display = "none";
			
			document.getElementById("displayName").style.display = "block";
			//document.getElementById("displayTime").style.display = "block"; 
			document.getElementById("displayScore").style.display = "block";
			
			document.getElementById("displayScore").innerHTML = "Score: " + score; 
			document.getElementById("mainDisplay").style.display = "block";
			startQuiz();
			}*/
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
var score = 0;
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
	
}


//document.getElementByID('start').addEventListener("click", startQuiz);


// start quiz
function startQuiz(){
    document.getElementByID('start').style.display = "none";
	var name = prompt("Please create a username!");
	document.getElementById("displayName").innerHTML = name;
	document.getElementById("displayName").style.display = "block";
	document.getElementById("displayWelcome").style.display = "none";
    renderQuestion();
    quiz.style.display = "block";	
}



// checkAnwer

function checkAnswer(answer){
    if( answer === questions[runningQuestion].correct){
		answerIsRight();
		
    }
	else{
		answerIsWrong() ;
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
			if (score >= 4) {
	document.getElementById("line").style.display = "block";
	
 }
		
    }else{
        // end the quiz and show the score
        scoreRender();
    }
	
}

function answerIsRight() {
	score += 1;

question.classList.add('right');
setTimeout(function() {
question.classList.remove('right'); }, 300)
}


function answerIsWrong(){
question.classList.add('wrong');
setTimeout(function() {
question.classList.remove('wrong'); }, 300)
}


///////////////////////////////////////////////////////////////////////////////
//50:50 Life line//////
///////////////////////////////////////////////////////////////////////////////
//
//The help() function will take away two wrong answers with the class of 'choice2'
function help(){
var wans = document.querySelectorAll("[class='choice2']");
	
	for (var i = 0; i < wans.length; i++)
		wans[i].style.display='none';
	document.getElementById("lifeline").style.display = "none";
 }
//The reverse function will replace the wrong answers into the quiz so they are ready for the next level
function reverse() {
var wans = document.querySelectorAll("[class='choice2']");

for(var i = 0; i < wans.length; i++) 
  wans[i].style.display='inline-block';
}
///////////////////////////////////////////////////////////////////////////////////////




// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML += "<div id='scoreBoard'>" + "<p>"+ scorePerCent +"%</p>"+ "</div>";
	document.getElementById("choices").style.display = "none";
	document.getElementById("question").innerHTML = "You have scored"	
}

			


		