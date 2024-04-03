const TITLE = 'Quiz';

let questions = [
    "When did the Euro-Ottoman War start?",
    "When was EuroGuardian Advanced Annihilation Rsponses founded?",
    "What is the designation of the Kolos?",
    "What types of targets can the EIFV-04 take down?",
    "What type of machine is Zorya?",
    "What does TaevasHüpe Üksus translate to in English?",
    "In what does the Stille Vogler divsion specialize?",
    "What is the role of the EGPIM?",
    "How tall are the EMs?",
    "Are the Mirage and EASSF-08 stealth?",
    "Can the EMRPF be used in civilian roles?",
    "How far can the EHB-03 travel without aerial refuel?",
    "What always accompanies the Voyageurs?",
    "What is the Mastodonte in the relative page named?"
];

let answers = [
    "2035",
    "2030",
    "EHSPH-07",
    "Both light and heavy",
    "EGPIM",
    "Sky Jump Battlalion",
    "Protection and defense",
    "To be the workforce of the nation",
    "10 Meters",
    "Yes",
    "Yes",
    "Around 10000 Kms",
    "Mastodontes",
    "Brutus"
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

document.getElementById('submitAnswer').addEventListener('click', displayRandomQuestion);

document.getElementById('submitAnswer').addEventListener('click', checkAnswer);

document.getElementById('answerInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});