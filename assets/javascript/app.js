$(document).ready(function () {

    // Global Variables
    // 
    // Question
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
    var score = 0;
    var totQuestions = questions.length;
    
    var container = $("#quizContainer");
    var zeldaQuestion = $("#question");
    var opt1 = $("#opt1");
    var opt2 = $("#opt2");
    var opt3 = $("#opt3");
    var opt4 = $("#opt4");
    

    // Document Ready Closing Function
});