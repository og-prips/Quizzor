class Quiz {
  constructor(title, quizItems = []) {
    this.title = title;
    this.quizItems = quizItems;
  }

  save() {
    localStorage.setItem(`${this.title}`, JSON.stringify(this));
  }

  getAll() {
    let values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }

  static createCard(quiz, container) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-value", quiz.title);
    container.appendChild(card);

    const cardBorder = document.createElement("div");
    cardBorder.classList.add("card-border");
    card.appendChild(cardBorder);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");
    card.appendChild(cardContent);

    const title = document.createElement("h1");
    title.textContent = quiz.title;
    cardContent.appendChild(title);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.value = quiz.title;
    card.appendChild(deleteButton);

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.value = quiz.title;
    deleteButton.appendChild(trashIcon);
  }
}
