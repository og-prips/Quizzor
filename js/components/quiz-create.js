const quiz = new Quiz();
const questionInput = document.getElementById("title");
const answerInput1 = document.getElementById("option-1");
const answerInput2 = document.getElementById("option-2");
const answerInput3 = document.getElementById("option-3");
const answerInput4 = document.getElementById("option-4");

window.onload = () => {
  document.getElementById("add-question").addEventListener("click", () => {
    createQuizItem();
  });

  document.getElementById("save-quiz").addEventListener("click", () => {
    saveQuiz();
  });
};

const createQuizItem = () => {
  const quizItem = new QuizItem(
    questionInput.value,
    [
      answerInput1.value,
      answerInput2.value,
      answerInput3.value,
      answerInput4.value,
    ],
    document.querySelector('input[name="correct-answer"]:checked').defaultValue
  );

  quiz.quizItems.push(quizItem);

  questionInput.value = "";
  answerInput1.value = "";
  answerInput2.value = "";
  answerInput3.value = "";
  answerInput4.value = "";
};

const saveQuiz = () => {
  quiz.title = prompt("Ange en titel på ditt quiz:");
  quiz.save();

  window.open("index.html", "_self");
};
