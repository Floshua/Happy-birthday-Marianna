const quizData = [
  {
    question: "On the Elizabeth Line, what's the train station after Harold Hill?",
    options: ["Gidea Park", "Punjabi Park", "Punani Park", "Tilted Towers"],
    answer: 1
  },
  {
    question: "What's 50% Turkish, 50% Polish, but 100% nicotine?",
    options: ["Leo Tekker", "Turkish Delight", "That one guy from Fish Tails", "Gregorz"],
    answer: 0
  },
  {
    question: "What's my favourite song?",
    options: [
      "Slow Dancing in the Dark",
      "Bimbo Doll",
      "Palmtree Panic 'P' Mix",
      "Friday Night",
      "SCP 3008 Friday Theme",
      "Can't Tell Me Nothing"
    ],
    answer: 0
  },
  {
    question: "What's my dog's name?",
    options: ["_____ and _____", "Buddy and Pepper", "Buddy and Peppa", "Denis and Antonio"],
    answer: 2
  },
  {
    question: "Why do I love Joji so much?",
    options: [
      "Because I'm an edgelord stuck in 2016",
      "Because I think of you whenever I listen to him",
      "Because I'm _____",
      "Because Denis is _____",
      "Because the pressures of society make me feel like I gotta be",
      "Because I just like his music bro why you gotta hyper analyse everything man"
    ],
    answer: 1
  },
  {
    question: "A pretty plant with petals is called what?",
    options: ["Flower", "Flour"],
    answer: 1
  },
  {
    question: "Where was I raised?",
    options: ["Durban", "Dirtbin", "Skunthrope", "Cape Town"],
    answer: 0
  },
  {
    question: "Excuse me, was you saying something?",
    options: [
      "Uh uh you can't tell me nothing",
      "Denis is _____",
      "Banjo Kazooie",
      "Denis is _____"
    ],
    answer: 0
  },
  {
    question: "What's my favourite game of all time?",
    options: [
      "Your Bizarre Adventure",
      "Obby but you're on a bike",
      "Super Mario Galaxy",
      "Terraria",
      "All of the above",
      "Denis is _____"
    ],
    answer: 4
  },
  {
    question: "How tall am I?",
    options: ["5'2", "6'3", "190cm", "Denis is _____"],
    answer: 2
  }
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
  feedbackEl.innerHTML = "";

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
      document.getElementById("paragraph-part-1").classList.remove("hidden");
      document.getElementById("game-section").classList.remove("hidden");
    }
  } else {
    errorSound.play();
    const img = document.createElement("img");
    img.src = "assets/images/oops.png";
    img.alt = "Oops!";
    feedbackEl.appendChild(img);
  }
}

function launchConfetti() {
  // If you're using canvas-confetti, this is a sample call:
  // confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
}

// Start quiz when unlocked
document.getElementById("quiz-section").classList.remove("hidden");
showQuestion(currentQuestion);

// Start quiz when unlocked
document.getElementById("quiz-section").classList.remove("hidden");
showQuestion(currentQuestion);
