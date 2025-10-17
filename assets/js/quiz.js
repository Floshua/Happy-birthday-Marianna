const quizData = [
  {
    question: "What's my dog's name?",
    options: ["Buddy and Pepper", "Buddy and Peppa", "Denis and Antonio"],
    answer: 1
  },
  {
    question: "What's my favourite song?",
    options: ["Slow Dancing in the Dark", "Bimbo Doll", "Friday Night"],
    answer: 0
  },
  // Add more questions here...
];

let currentQuestion = 0;

const questionEl = document.getElementById("quiz-question");
const optionsEl = document.getElementById("quiz-options");
const feedbackEl = document.getElementById("quiz-feedback");

const correctSound = new Audio("assets/audio/correct.mp3");
const errorSound = new Audio("assets/audio/error.mp3");

function showQuestion(index) {
  const q = quizData[index];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => handleAnswer(i === q.answer);
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(isCorrect) {
  feedbackEl.innerHTML = "";

  if (isCorrect) {
    correctSound.play();
    launchConfetti();
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      setTimeout(() => showQuestion(currentQuestion), 1000);
    } else {
      // Quiz complete → unlock next stage
      document.getElementById("quiz-section").classList.add("hidden");
      document.getElementById("game-section").classList.remove("hidden");
      revealParagraphPart(1);
    }
  } else {
    errorSound.play();
    const img = document.createElement("img");
    img.src = "assets/images/oops.png";
    feedbackEl.appendChild(img);
  }
}

function launchConfetti() {
  // Use canvas-confetti or similar library here
  // Example: confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

function revealParagraphPart(part) {
  const para = document.getElementById(`paragraph-part-${part}`);
  if (para) para.classList.remove("hidden");
}

// Start quiz when unlocked
document.getElementById("quiz-section").classList.remove("hidden");
showQuestion(currentQuestion);

