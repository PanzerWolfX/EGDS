const TITLE = 'Quiz';

let questions = [
    "When did the Euro-Ottoman War start?",
    "When was EuroGuardian Advanced Annihilation Rsponses founded?",
];

let answers = [
    "2035",
    "2030"
];

let score = 0;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getRandomQuestion(questions) {
    const index = getRandomIndex(questions.length);
    return questions[index];
}

function displayRandomQuestion() {
    const randomQuestion = getRandomQuestion(questions);
    document.getElementById('question').innerText = randomQuestion;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answerInput').value.trim();
    const currentQuestionIndex = questions.indexOf(document.getElementById('question').innerText);
    
    if (currentQuestionIndex !== -1 && userAnswer.toLowerCase() === answers[currentQuestionIndex].toLowerCase()) {
        score += 1;
        document.getElementById('scoreDisplay').innerText = "Score: " + score;
        alert("Correct");
    }
    else {
        alert("Incorrect. Correct answer: " + answers[currentQuestionIndex]);
    }    
    
    document.getElementById('answerInput').value = '';
}

displayRandomQuestion();
document.getElementById('scoreDisplay').innerText = "Score: " + score; // Initial display of score

document.getElementById('generateQuestion').addEventListener('click', displayRandomQuestion);

document.getElementById('submitAnswer').addEventListener('click', checkAnswer);

document.getElementById('answerInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});