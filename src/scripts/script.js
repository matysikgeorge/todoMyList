const mainWrapperNode = document.querySelector(".main__wrapper");
const formNode = document.querySelector(".main__form");
const inputForm = document.querySelector(".main__task");
const buttonAddTask = document.querySelector(".main__button");
const mainList = document.querySelector(".main__list");
// const checkboxButton = mainItem.querySelector(".main__item-checkbox");
const deleteButtonsNone = document.querySelector(".footer__wrapper");
// const ButtonDeleteAll = document.querySelector(".footer__button-right");
// const deleteCompletedButton = document.querySelector(".footer__button-left");
// const deleteItemButton = mainItem.querySelector(".main__item-button");

let todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];

// - Функция добавления задач
function addTask(text) {
  todoList.push({ task: text.trim(), isDone: false, id: Date.now() });
  deleteButtonsNone.classList.remove("footer__wrapper-delete");
  console.log(todoList);
  renderTasks(todoList);
}
// - Создаем логику для form в которой у нас содержится input и кнопка "Добавить" и куда приходит запись информации.
formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputForm.value.trim().length) {
    addTask(inputForm.value);
    inputForm.value = "";
  } else if (inputForm.value.trim().length === 0) {
    inputForm.value = "";
    return;
  }
});

//- Создаем функцию создания задач
function createTask(arrayTask) {
  const mainItem = document.createElement("li");
  mainItem.className = "main__item";
  mainItem.innerHTML = `
              <input class="main__item-checkbox" type="checkbox"/>
              <p class="main__item-text">${arrayTask.task}</p>  
              <button class="main__item-button">❌</button>
  `;

  //- Функция проверки нажатия checkbox

  const checkboxButton = mainItem.querySelector(".main__item-checkbox");
  checkboxButton.checked = arrayTask.isDone;
  checkboxButton.addEventListener("change", () => {
    btnChecked(arrayTask.id);
  });

  const deleteItemButton = mainItem.querySelector(".main__item-button");
  deleteItemButton.addEventListener("click", () =>
    deleteCrossButton(arrayTask.id)
  );
  return mainItem;
}

function btnChecked(id) {
  let findChecked = todoList.find((el) => el.id === id);
  findChecked.isDone = !findChecked.isDone;
  console.log(findChecked.isDone);
  renderTasks(todoList);
}

// - Функция удаления элементов по крестику
function deleteCrossButton(id) {
  todoList = todoList.filter((el) => el.id !== id);
  renderTasks(todoList);
}

//- Функция удаления завершенных задач
function getDeletedCompletedButton() {
  todoList = todoList.filter((el) => el.isDone !== true);
  renderTasks(todoList);
}

//- Создаем функцию отрисовки
function renderTasks(newData) {
  mainList.innerHTML = ""; // очищаем всю форму, но при вводе нового таска мы увидим удаленный task. В самом массиве значение остается и плюсуется к старому массиву.
  newData.forEach((element) => {
    const words = createTask(element);
    mainList.append(words); // куда, что делаем и что добавляем
  });
  saveLocalStorage(todoList);
  deleteBtn();
}

const deleteCompletedButton = document.querySelector(".footer__button-left");
deleteCompletedButton.addEventListener("click", getDeletedCompletedButton);

const ButtonDeleteAll = document.querySelector(".footer__button-right");
ButtonDeleteAll.addEventListener("click", () => {
  mainList.innerHTML = "";
  todoList = []; // либо 0, либо "";
  renderTasks(todoList);
  deleteBtn();
});

// прописать логику для скрытия нижних кнопок, закрытие задач по крестикам и по завершенным.
// и при создании task возвращались кнопки
// класс - list, а класс remove

function deleteBtn() {
  if (todoList.length === 0) {
    deleteButtonsNone.classList.add("footer__wrapper-delete");
  }
}

function saveLocalStorage(todoData) {
  localStorage.setItem("todoList", JSON.stringify(todoData));
}

renderTasks(todoList);
