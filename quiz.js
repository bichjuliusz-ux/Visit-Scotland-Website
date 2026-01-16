const quiz = [
    {
        question: "Where does Edinburgh Castle stand?",
        answers: ["Castle Rock", "Arthur's Seat", "Royal Mile"],
        correct: 0
    },
    {
        question: "What is Scottish music associated with?",
        answers: ["Guitar", "Bagpipes", "Piano"],
        correct: 1
    },
    {
        question: "How many festivals are hosted in Scotland?",
        answers: ["50", "100", "200"],
        correct: 2
    },
    {
        question: "What type of drink comes from Scotland?",
        answers: ["Beer", "Vodka", "Whisky"],
        correct: 2
    },
    {
        question: "When is the best time to travel around Scotland?",
        answers: ["Winter", "Spring and Fall", "Summer only"],
        correct: 1
    }
];

let currentQuestion = 0;
let correctAnswers = 0;
let attempts = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function showQuestion() {
    resultEl.textContent = "";
    answersEl.innerHTML = "";

    if (currentQuestion >= quiz.length) {
        questionEl.textContent = "Quiz ferdig!";
        scoreEl.textContent = `Riktige svar: ${correctAnswers} av ${attempts}`;
        return;
    }

    const q = quiz[currentQuestion];
    questionEl.textContent = q.question;

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => checkAnswer(index);
        answersEl.appendChild(btn);
    });

    scoreEl.textContent = `Forsøk: ${attempts} | Riktige: ${correctAnswers}`;
}

function checkAnswer(index) {
    attempts++;

    if (index === quiz[currentQuestion].correct) {
        resultEl.textContent = "Riktig svar ✅";
        correctAnswers++;
    } else {
        resultEl.textContent = "Feil svar ❌";
    }

    currentQuestion++;
    setTimeout(showQuestion, 1000);
}

showQuestion();