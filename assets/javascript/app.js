$(document).ready(function () {

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
        "option3": "Light",
        "option1": "Water",
        "option2": "Fire",
        "option4": "Darkness",
        "answer": "1"
    }, {
        "question": "In Wind Waker where did Link find Tingle?",
        "option1": "Ice Ring Isle",
        "option2": "Forest Haven",
        "option3": "Windfall Island",
        "option4": "Great Fish Isle",
        "answer": "3"
    }];

    var currentQuestion = 0;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var time = 30;
    var totQuestions = questions.length;

    var container = document.getElementById('quizContainer');
    var resultWrapper = document.getElementsByClassName('resultWrapper');
    var zeldaQuestion = document.getElementById('question');
    var opt1 = document.getElementById('opt1');
    var opt2 = document.getElementById('opt2');
    var opt3 = document.getElementById('opt3');
    var opt4 = document.getElementById('opt4');
    var inputs = document.getElementsByTagName('input');
    var resultCorrect = document.getElementById('correct');
    var resultIncorrect = document.getElementById('incorrect');
    var resultUnanswered = document.getElementById('unanswered');
    // Gets a question by injecting the current question into the HTML
    function getQuestion(questionIndex) {
        var q = questions[questionIndex];
        zeldaQuestion.textContent = (questionIndex + 1) + ". " + q.question;
        opt1.textContent = q.option1;
        opt2.textContent = q.option2;
        opt3.textContent = q.option3;
        opt4.textContent = q.option4;
    };
    // Tests an answer to a question against the saved correct answer value and awards points accordingly
    function rightWrong() {
        var answer = inputs.value;
        if (questions[currentQuestion].answer == answer) {
            correct++;
        }
        if (questions[currentQuestion].answer !== answer) {
            incorrect++;
        }
        if (time == 0) {
            unanswered++;
        }
        currentQuestion++;
        if (currentQuestion == totQuestions) {
            container.style.display = 'none';
            resultWrapper.style.display = '';
            resultCorrect.textContent = "Correct: " + correct;
            resultIncorrect.textContent = "Incorrect: " + incorrect;
            resultUnanswered.textContent = "Correct: " + unanswered;
            return;
        }
        getQuestion(currentQuestion);
    }
    getQuestion(currentQuestion);
    // Document Ready Closing Function
});