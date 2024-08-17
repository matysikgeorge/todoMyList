const mainWrapperNode = document.querySelector(".main__wrapper");
const formNode = document.querySelector(".main__form");
const inputForm = document.querySelector(".main__task");
const buttonAddTask = document.querySelector(".main__button");

const todoList = [];

function addTask(text) {}

formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputForm.value);
  inputForm.value = "";

  // const [input] = event.target;
  // addTask(input.value);
});

// к пн добавить таски в списки!!!
// добить стили!



