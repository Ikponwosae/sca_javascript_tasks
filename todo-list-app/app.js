

let todoItems = []; //array created to hold all to do objects

function showTodo(todo) {
  const list = document.querySelector('.js-todo-list');
  //allows to create list items li using an existing element ul as a reference.
  list.insertAdjacentHTML('beforeend', `
    <li class="todo-item" data-key="${todo.id}">
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span class="original-text">${todo.text}</span>
      <button class="edit-todo js-edit-todo">
      <i class="fas fa-edit fa-lg"></i>
      </button>
      <button class="delete-todo js-delete-todo">
       <i class="fas fa-trash fa-lg"></i>
      </button>
    </li>
  `);
}

function addTodo(text) { //function to collect item from input and push as an object into the array
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  showTodo(todo);
}

//uses the t=key of the items that have been checked and those that havent 
//been checked with the array method findIndex() to check the addtdoarray for the corresponding item.

function toggleDone(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  todoItems[index].checked = !todoItems[index].checked;

  const item = document.querySelector(`[data-key='${key}']`);
  if (todoItems[index].checked) {
    item.classList.add('done');
  } else {
    item.classList.remove('done');
  }
}

function deleteTodo(key) {
  todoItems = todoItems.filter(item => item.id !== Number(key));
  const item = document.querySelector(`[data-key='${key}']`);
  item.remove();
  
  // select the list element and trim all whitespace if there are no todo items left
  const list = document.querySelector('.js-todo-list');
  if (todoItems.length === 0) list.innerHTML = '';
}


const form = document.querySelector('.js-form'); //selector for the form element/tag

form.addEventListener('submit', event => {
  event.preventDefault();        //stops the form from trying to submit to a server which refreshes the page
  const input = document.querySelector('.js-todo-input');

  const text = input.value.trim(); //removes whitespace
  if (text !== '') { //if text entered is not an empty string
    addTodo(text);
    input.value = '';
    input.focus();
  }
});

const list = document.querySelector('.js-todo-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  
  if (event.target.classList.contains('js-delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }

});
