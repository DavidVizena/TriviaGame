$(document).ready(function () {
    // 
    // Global Variables
    // 
    // Questions
    var questions = [{
        "question": "In Majora's Mask, what are the 4 forms Link can change into via masks?",
        "option1": "Horse, Gorgon, Epona, and God",
        "option2": "Deku, Goron, Zora, and Fierce Deity Link",
        "option3": "Epona, Zora, Goron, and Future Link",
        "option4": "Zora, Goron, Sheik, and Midna",
        "answer": "2"
    }, {
        "question": "In Ocarina of Time, what is the name of the forest where the Great Deku Tree lives?",
        "option1": "Macalania",
        "option2": "Kongo",
        "option3": "Guardia",
        "option4": "Kokiri",
        "answer": "4"
    }, {
        "question": "In Twilight Princess, what is Midna weak against?",
        "option1": "Water",
        "option2": "Fire",
        "option3": "Light",
        "option4": "Darkness",
        "answer": "3"
    }, {
        "question": "In Wind Waker where did Link find Tingle?",
        "option1": "Ice Ring Isle",
        "option2": "Forest Haven",
        "option3": "Windfall Island",
        "option4": "Great Fish Isle",
        "answer": "3"
    }];
    // 
    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var time = 5;
    var timerSec = setInterval(countdown, 1000);
    var totQuestions = questions.length;
    // 
    var container = $("#quizContainer");
    var resultWrapper = $("#resultWrapper");
    var zeldaQuestion = $("#question");
    var opt1 = $("#opt1");
    var opt2 = $("#opt2");
    var opt3 = $("#opt3");
    var opt4 = $("#opt4");
    var timer = $("#timer");
    var resultCorrect = $("#correct");
    var resultIncorrect = $("#incorrect");
    var resultUnanswered = $("#unanswered");

    // INITILIZATION
    function init() {
        currentQuestion = 0;
        time = 5;
        // timeStop();
        $("#naviContainer").show();
        $(".container").hide();
        $("div.title").hide();
        $("p#timer").hide();
        $(".resultWrapper").show();
        $("#correct").hide();
        $("#incorrect").hide();
        $("#unanswered").hide();
    };
    init();

    $("img#navi").on("click", function () {
        time = 5;
        $("#naviContainer").hide();
        $(".container").show();
        $("div.title").show();
        $("p#timer").show();
        countdown();
    });
    // 
    // Timer  
    function timeReset() {
        time = 5;
        countdown();
    };
    function timeStop() {
        clearTimeout(timerSec)
    };
    function countdown() {
        if (time == 0) {
            timer.text(time);
            unanswered++;
            currentQuestion++;
            timeReset();
        }
        console.log(currentQuestion);
        console.log(totQuestions);
        if (currentQuestion == totQuestions) {
            timeStop();
            $(".container").hide();
            $("div.title").hide();
            $("p#timer").hide();
            $("#correct").show();
            $("#incorrect").show();
            $("#unanswered").show();
            resultCorrect.text("Correct: " + correct);
            resultIncorrect.text("Incorrect: " + incorrect);
            resultUnanswered.text("Unanswered: " + unanswered);
            return;
        }
        else {
            timer.text(time);
            time--;
        }
        getQuestion(currentQuestion);
    };
    countdown();
    // END Timer
    // 
    // Gets a question and populates the HTML
    function getQuestion(questionIndex) {
        var q = questions[questionIndex];
        zeldaQuestion.text((questionIndex + 1) + ". " + q.question);
        opt1.text(q.option1);
        opt2.text(q.option2);
        opt3.text(q.option3);
        opt4.text(q.option4);
    };
    // 
    // Tests an answer to a question against the saved correct answer value and awards points accordingly
    $(document).on('click', 'input', function () {
        var answer = $(this).val();
        if (questions[currentQuestion].answer == answer) {
            correct++;
            timeReset();
        }
        if (questions[currentQuestion].answer !== answer) {
            incorrect++;
            timeReset();
        }
        currentQuestion++;
        if (currentQuestion == totQuestions) {
            timeStop();
            $(".container").hide();
            $("div.title").hide();
            $("p#timer").hide();
            $("#correct").show();
            $("#incorrect").show();
            $("#unanswered").show();
            resultCorrect.text("Correct: " + correct);
            resultIncorrect.text("Incorrect: " + incorrect);
            resultUnanswered.text("Unanswered: " + unanswered);
            return;
        }
        getQuestion(currentQuestion);
    });
    getQuestion(currentQuestion);
    // Document Ready Closing Function
});