var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h1>Hello. I am Jarvis. What is your name?</h1>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>Hello ' + input + '!</h1>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h1>Tell me about yourself.</h1>';			    	// load next question		
    setTimeout(timedQuestion, 2000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>Interesting. I always tell Mr. Stark not to be too charming, too witty or too intellectual. I see you live by those same principles.</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>What do you do for work?</h1>';					      	
    setTimeout(timedQuestion, 5000);
    }   

    else if (questionNum == 2) {
    output.innerHTML = '<h1>Interesting. There are only 2 things you need to know about life. Where theres money, theres corruption, and where theres men and women… theres hanky panky.</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Have you learned anything new today?</h1>';					      	
    setTimeout(timedQuestion, 5000);
    }   

    else if (questionNum == 3) {
    output.innerHTML = '<h1>Mr. Banner says when the mouth is open for laughter, you may be able to shove in a little food for thought. Laughter is the best medicine.</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Do you work out?</h1>';					      	
    setTimeout(timedQuestion, 5000);
    }   

    else if (questionNum == 4) {
    output.innerHTML = '<h1>I work out regularly. Ive literally lost a ton of weight. In 1950 I weighed more than two tons!</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>Goodbye!</h1>';					      	
    setTimeout(timedQuestion, 5000);
    }   
    
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});
