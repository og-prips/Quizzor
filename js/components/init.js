window.addEventListener("load", () => {
  setUpInitialQuizzes();
});

const setUpInitialQuizzes = () => {
  const spaceQuiz = new Quiz("Rymden", [
    new QuizItem(
      "Hur långt är det från jorden till månen?",
      ["384 400 km", "400 000 km", "412 600 km", "512 400 km"],
      0
    ),
    new QuizItem(
      "Vad är Vintergatans radie?",
      ["10 050 ljusår", "32 400 ljusår", "52 850 ljusår", "73 120  ljusår"],
      2
    ),
    new QuizItem(
      "Vilken planet är solsystemets överlägset största planet?",
      ["Jupiter", "Saturnus", "Uranus", "Neptunus"],
      0
    ),
    new QuizItem(
      "Vad kallas en våldsamt exploderande stjärna?",
      ["Nebulosa", "Explonova", "Meteorit", "Supernova"],
      3
    ),
  ]);

  const historyQuiz = new Quiz("Historia", [
    new QuizItem(
      "Vilken dryck har gett namn åt händelsen i Boston den 16 december 1773 som anses ha varit den utlösande faktorn för den amerikanska revolutionen?",
      ["Kaffe", "Te", "Cider", "Öl"],
      1
    ),
    new QuizItem(
      "I vilket land dog Karl XII år 1718?",
      ["Tyskland", "Sverige", "Norge", "Polen"],
      2
    ),
    new QuizItem(
      "I Mesopotamien, mellan floderna Eufrat och Tigris, bodde ett kulturskapande folk som redan 3000 år f.Kr kom att organisera ett betydande välde. Vilket folk?",
      ["Sumerer", "Masurer", "Minoer", "Azteker"],
      0
    ),
    new QuizItem(
      "Vilken av följande framstående filosofer i antikens Grekland föddes först?",
      ["Aristoteles", "Platon", "Sokrates", "Thales"],
      3
    ),
  ]);

  const geographyQuiz = new Quiz("Geografi", [
    new QuizItem(
      "Boston är en stad i vilken av dessa stater?",
      ["Washington", "Arizona", "Massachusetts", "Texas"],
      2
    ),
    new QuizItem(
      "I vilket land är Porto-Novo huvudstad?",
      ["Benin", "Sierra Leone", "Mali", "Senegal"],
      0
    ),
    new QuizItem(
      "Vilken delstat är Australiens folktätaste?",
      ["Queensland", "Western Australia", "New South Wales", "South Australia"],
      2
    ),
    new QuizItem(
      "Vilket land är det enda landet i världen som har ett musikinstrument på sina mynt?",
      ["Litauen", "Uruguay", "Tadzjikistan", "Irland"],
      3
    ),
  ]);

  const initialQuizzez = [spaceQuiz, historyQuiz, geographyQuiz];

  initialQuizzez.forEach((quiz) => {
    localStorage.setItem(`${quiz.title}`, JSON.stringify(quiz));
  });
};
