const quizContainer = document.getElementById("cards");
const quizTemplate = document.getElementById("quiz-template");
const quizTemplateTitle = document.getElementById("title");
const optionButtons = document.getElementsByClassName("quiz-button");
const optionButtonsArr = Array.from(optionButtons);
const proceedButton = document.getElementById("proceed");

let quiz = new Quiz();
let quizItemIndex = 0;
let score = 0;
let quizComplete = false;

const drawQuizCards = () => {
  const allQuizzez = quiz.getAll();

  allQuizzez.forEach((quiz) => {
    Quiz.createCard(quiz, quizContainer);
  });
};

const startQuiz = (targetValue) => {
  quiz = JSON.parse(localStorage.getItem(targetValue));

  quizContainer.style.display = "none";
  quizTemplate.style.display = "flex";

  drawQuizItem(quiz.quizItems[quizItemIndex]);
};

const deleteQuiz = (targetValue) => {
  if (confirm(`Är du säker på att du vill ta bort ${targetValue}?`)) {
    localStorage.removeItem(targetValue);
    window.location.reload();
  }
};

const drawQuizItem = (quizItem) => {
  proceedButton.style.display = "none";
  quizTemplateTitle.textContent = quizItem.question;

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].textContent = quizItem.answers[i];
    optionButtons[i].disabled = false;
    optionButtons[i].style.backgroundColor = "var(--quizbtn-color)";
  }
};

const proceedQuiz = () => {
  quizItemIndex++;

  if (quizComplete) {
    window.location.reload();
  } else if (quizItemIndex >= quiz.quizItems.length) {
    drawEndScreen();
  } else {
    drawQuizItem(quiz.quizItems[quizItemIndex]);
  }
};

const drawEndScreen = () => {
  quizComplete = true;

  quizTemplateTitle.textContent = `Du fick ${score}/${quiz.quizItems.length} rätt!`;

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].style.display = "none";
  }

  proceedButton.textContent = "Hem";
};

const evaluateQuestion = (answer, correctAnswer) => {
  proceedButton.style.display = "inline-block";

  optionButtonsArr.forEach((button) => {
    button.disabled = true;
  });

  if (answer == correctAnswer) {
    score++;
  } else {
    optionButtonsArr.find(
      (option) => option.value == answer
    ).style.backgroundColor = "red";
  }

  optionButtonsArr.find(
    (option) => option.value == correctAnswer
  ).style.backgroundColor = "green";
};

window.addEventListener("load", () => {
  drawQuizCards();
  setUpEventListeners();
});

const setUpEventListeners = () => {
  document.querySelectorAll(".card").forEach((button) => {
    button.addEventListener("click", (event) => {
      startQuiz(event.target.getAttribute("data-value"));
    });
  });

  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      deleteQuiz(event.target.value);
    });
  });

  document.querySelectorAll(".quiz-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      evaluateQuestion(
        event.target.value,
        quiz.quizItems[quizItemIndex].correctAnswer
      );
    });
  });

  proceedButton.addEventListener("click", () => {
    proceedQuiz();
  });

  quizContainer.onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
};
