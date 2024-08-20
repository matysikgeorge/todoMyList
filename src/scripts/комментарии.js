// const mainWrapperNode = document.querySelector(".main__wrapper");
// const formNode = document.querySelector(".main__form");
// const inputForm = document.querySelector(".main__task");
// const buttonAddTask = document.querySelector(".main__button"); // - Для создания узла - создаем переменную 'const' и задаем информативное имя 'buttonAddTask =' ('кнопкаДобавленияЗадач =') - (не обязательно использовать 'Node', имя может быть любым главное информативным). Далее через оператор присвоения '=' обращаемся к документу 'document' далее с помощью метода '.querySelector(".main__button");' - привязываемся к классу документа который передаем в параметр и с которым будем взаимодействовать.
// .querySelector() - метод позволяет находить элементы внутри DOM. принимает один аргумент — строку CSS-селектора, и возвращает первый элемент внутри документа, который соответствует этому селектору.

// const todoList = []; // - создаем пустой массив (сначала обязательно создаем переменную 'const' потом имя массива 'todoList =' и сам пустой массив [])

// - Функция добавления задач
// function addTask(text) {
//   todoList.push({ task: text });
//   console.log(todoList);
// }
// function addTask(text) { // - создаем функцию 'function' и имя 'addTask(text)' в параметр функции принимает в себя(text), открываем тело функции {}
// todoList.push({task: text}); // - в теле функции обращаемся к массиву 'todoList' и с помощью метода '.push()' - добавляем объект массива в параметр ( и передаем {ключ 'task:' с значением 'text'});
// '.push()' - добавляем один/несколько элементов в конец массива (результате вернётся новая длина массива)
//   console.log(todoList);
// }

// - Создаем логику для form в которой у нас содержится input и кнопка "Добавить" и куда приходит запись информации.
// formNode.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(inputForm.value);
//   inputForm.value = "";
// });

// formNode.addEventListener("submit", (event) => {   //- обращаемся к узлу 'formNode' с помощью метода .ddEventListener("submit", (event) => {}) - 1-й параметр свойство "submit" - которое позволяет собрать данные при нажатии на кнопку, 2-й параметр - это функция, где 'event' - это событие которое описывает событие, произошедшее на странице -
// - .addEventListener() - это функция в JS, которая принимает в параметр событие и второй аргумент.
// event.preventDefault(); // - .preventDefault()в J S используется для отмены действия по умолчанию (в данном случае для отмены автоматического обновления страницы при нажатии на кнопку)
// console.log(inputForm.value); // - отобразить в консоли значение 'inputForm.value'
// inputForm.value = ""; // -  значение переменной 'inputForm.value' равное пустому значению
// });