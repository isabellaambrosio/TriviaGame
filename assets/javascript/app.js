// Show Questions when button "Start" is pressed
// Start Timer when button is pressed
// Change time remaining as the clock runs

// if timer runs out change html


// create object with questions and answers

// Capture guessed choice

// compare guessed coice with answers
// if guessed choice equals answer correctAnswer++
// if guessed choice different then answer incorrectAnswer++
// if guessedChoice equals " " then unanswered++

// insert results on html



// Varibles
// =============================================================================

var correctedAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;


var guessedChoice;

var answers = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: ''
};

var solutions = {
    1: 'Chandler',
    2: 'Chandler',
    3: 'Phoebe',
    4: 'Chandler',
    5: 'Monica',
    6: 'Ross',
    7: 'Joey',
    8: 'Rachel',
    9: 'Joey',
    10: 'Monica'
};









// Functions
// =============================================================================
function reset() {
    correctedAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    timer = 60;

}



// When start button is pressed
$("#start").on("click", function() {
    //alert("hi");

    // Show Questions when button "Start" is pressed
    $(".container").css('display', 'inline');


    // Start Timer when button is pressed
    var interval = setInterval(sixtySeconds, 1000);

    var timer = 60;

    function sixtySeconds() {
        $("#timer").text(timer);
        timer--;

        if (timer === -1) {
            // clear interval
            clearInterval(interval);

            // remove questions
            $(".container").css('display', 'none');

            // TODO: display score
            quizDone();

        }
    }

    $("#score").empty();
    reset();

});


function answerClick(questionNumber, answer) {
    console.log('question ' + questionNumber);
    console.log('answer ' + answer);
    answers[questionNumber] = answer;
    console.log('answers', answers);
}


// called when timer ends OR user clicks done
function quizDone() {
    // answers, solutions, correctedAnswer, incorrectAnswer, unanswered
    // loop through answers

    // for (var i = 0; i < answers.length; i++) {
    //     if (answers === '') {
    //         alert("unanswered");
    //         // unanswered++;
    //         // console.log(unanswered);
    //     }
    //     else if (answers === solutions) {
    //         alert("correctedAnswer");
    //         // correctedAnswer++;
    //         // console.log(correctedAnswer);
    //     }
    //     else {
    //         alert("incorrectAnswer");
    //         // incorrectAnswer++;
    //         // console.log(incorrectAnswer);
    //     }
    // }


    for (var answer in answers) {
        if (answers[answer] === '') {
            console.log(unanswered++);

        }
        else if (answers[answer] === solutions[answer]) {
            console.log(correctedAnswer++);
        }
        else {
            console.log(incorrectAnswer++);
            // incorrect
        }


        var html =
            "<p>Correct answers: " + correctedAnswer + "</p>" +
            "<p>Incorrect answers: " + incorrectAnswer + "</p>" +
            "<p>Unanswered: " + unanswered + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#score").innerHTML = html;
    }
}

$("#done").on("click", function() {
    $(".container").css('display', 'none');
    quizDone();
});



// check if answer is correct
// if answer === '' increment unanswered
// if correct increment correctedAnswer
// else if incorrect increment incorrectAnswer







//Process
//==============================================================================
