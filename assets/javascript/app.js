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
    var totQuestions = questions.length;
    var time = 30;
    var timerSec = setInterval(countdown, 1000);
    // 
    var container = $("#quizContainer");
    var resultWrapper = $("#resultWrapper");
    var zeldaQuestion = $("#question");
    var opt1 = $("#opt1");
    var opt2 = $("#opt2");
    var opt3 = $("#opt3");
    var opt4 = $("#opt4");
    var timer = $("#timer");
    var naviSound = new Audio('./assets/sounds/naviHeyListen.mp3');

    var correctWord = $("#correctWord");
    var incorrectWord = $("#incorrectWord");
    var unansweredWord = $("#unansweredWord");
    var resultCorrect = $("#correct");
    var resultIncorrect = $("#incorrect");
    var resultUnanswered = $("#unanswered");
    // 
    // INITILIZATION
    function init() {
        currentQuestion = 0;
        time = 30;
        correct = 0;
        incorrect = 0;
        unanswered = 0;
        correctWord.hide();
        incorrectWord.hide();
        unansweredWord.hide();
        setTimeout(function () {
            naviSound.play();
        }, 4000);
        $("#naviContainer").show();
        $(".container").hide();
        $("div.title").hide();
        $("p#timer").hide();
        $(".resultWrapper").show();
        $("#correct").hide();
        $("#incorrect").hide();
        $("#unanswered").hide();
        $("#correctGif").hide();
        $("#incorrectGif").hide();
        $("#unansweredGif").hide();
        $('h5').hide();
        $('img#deku').hide();
    };
    init();
    // Navi Button
    $("img#navi").on("click", function () {
        time = 30;
        $("#naviContainer").hide();
        $('resultWrapper').hide();
        $("#correct").hide();
        $("#incorrect").hide();
        $("#unanswered").hide();
        $(".container").show();
        $("div.title").show();
        $("p#timer").show();
        countdown();
        getQuestion(currentQuestion);
        getBackground();
    });
    // 
    // Deku Button
    $('img#deku').on("click", function () {
        init();
        $('img#deku').hide();
        $('.reultWrapper').hide();
        $('#correct').hide();
        $('#incorrect').hide();
        $('#unanswered').hide();
    });
    // 
    // Timer  
    function timeReset() {
        time = 30;
        countdown();
    };
    function timeStop() {
        clearTimeout(timerSec);
        timerSec = null;
    };
    function countdown() {
        if (time == 0) {
            timer.text(time);
            unanswered++;
            timer.hide();
            $('.container').hide();
            unansweredWord.show();
            unansweredWord.text("You fell asleep! The correct answer was : " + questions[currentQuestion].answer);
            $('img#unansweredGif').fadeIn().delay(3000).fadeOut('slow');
            setTimeout(function () {
                currentQuestion++;
                getBackground()
                unansweredWord.hide();
                timeReset();
                timer.show();
                $('.container').show();
            }, 4200);
        }
        if (currentQuestion == totQuestions) {
            $(".container").hide();
            $("div.title").hide();
            $("p#timer").hide();
            $("#correct").show();
            $("#incorrect").show();
            $("#unanswered").show();
            $('h5').show();
            $('img#deku').show();
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
            correctWord.show();
            timer.hide();
            $('.container').hide();
            correctWord.text("Correct!!");
            $('img#correctGif').fadeIn().delay(3000).fadeOut('slow');
            setTimeout(function () {
                timeReset();
                correctWord.hide();
                timer.show();
                $('.container').show();
            }, 4200);
        }
        if (questions[currentQuestion].answer !== answer) {
            incorrect++;
            incorrectWord.show();
            $('.container').hide();
            timer.hide();
            incorrectWord.text("Thats wrong! The correct answer was : " + questions[currentQuestion].answer);
            $('img#incorrectGif').fadeIn().delay(3000).fadeOut('slow');
            setTimeout(function () {
                timeReset();
                incorrectWord.hide();
                timer.show();
                $('.container').show();
            }, 4200);
        }
        setTimeout(function () {
            currentQuestion++;
            getBackground()
            timer.show();
        }, 4200);
        if (time == 0 && currentQuestion == totQuestions) {
            $(".container").hide();
            $("div.title").hide();
            $("p#timer").hide();
            $("#correct").show();
            $("#incorrect").show();
            $("#unanswered").show();
            $('h5').show();
            $('img#deku').show();
            resultCorrect.text("Correct: " + correct);
            resultIncorrect.text("Incorrect: " + incorrect);
            resultUnanswered.text("Unanswered: " + unanswered);
            timer.hide();
            return;
        }
        getQuestion(currentQuestion);
    });
    // Scene switching
    function getBackground() {
        if (currentQuestion == 0)
            $('body').fadeTo('slow', 0.3, function () {
                $('body').css('background-image', 'url(' + "./assets/images/majMaskBG.jpg" + ')');
            }).delay(1000).fadeTo('slow', 1);

        if (currentQuestion == 1)
            $('body').fadeTo('slow', 0.3, function () {
                $('body').css('background-image', 'url(' + "./assets/images/ocarinaOfTimeBG.jpg" + ')');
            }).delay(1000).fadeTo('slow', 1);

        if (currentQuestion == 2)
            $('body').fadeTo('slow', 0.3, function () {
                $('body').css('background-image', 'url(' + "./assets/images/twilightPrincessBG.jpg" + ')');
            }).delay(1000).fadeTo('slow', 1);

        if (currentQuestion == 3)
            $('body').fadeTo('slow', 0.3, function () {
                $('body').css('background-image', 'url(' + "./assets/images/windWalkerBG.jpg" + ')');
            }).delay(1000).fadeTo('slow', 1);
        if (currentQuestion === totQuestions) {
            $('body').fadeTo('slow', 0.3, function () {
                $('body').css('background-image', 'url(' + "./assets/images/blueBG.jpg" + ')');
            }).delay(1000).fadeTo('slow', 1);
        }
    };
    // 
    // Document Ready Closing Function
});