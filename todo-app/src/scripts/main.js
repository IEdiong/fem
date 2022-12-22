'use strict';

// const todos = [
//   { id: 1, title: 'Complete Todo App on Frontend Mentor', done: false },
//   { id: 2, title: 'Pick up groceries', done: true },
// ];

let todoId = 0;

// Step 01: Grab elements
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const form = document.getElementById('todo-form');

// Step 02: Add event listeners
// window.addEventListener('DOMContentLoaded', addTodo);
form.addEventListener('submit', addTodo);

// Step 03: Create callback functions
function addTodo(e) {
  //   console.log(e);

  const item = todoInput.value;
  // if (e.keyCode === 13 && item) {
  // });
  e.preventDefault();
  if (item) {
    const html = `
        <li class="todo px-3 py-4 w-full flex items-center gap-x-2 text-dark-gray-100">
        <!-- TODO: fix the focus state -->
        <input
          type="checkbox"
          id="checkbox-${todoId}"
          class="peer appearance-none relative w-5 h-5 rounded-full focus:outline-none shrink-0 before:content-[''] before:w-[22px] before:h-[22px] before:-left-[1px] before:-top-[1px] before:bg-check-gray checked:before:bg-gradient-to-br hover:before:bg-gradient-to-br checked:before:from-check-start checked:before:to-check-end hover:from-check-start hover:to-check-end before:absolute before:rounded-full after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-white checked:after:bg-center checked:after:bg-no-repeat checked:after:bg-transparent checked:after:bg-[url('/images/icon-check.svg')] after:absolute after:rounded-full cursor-pointer ease-in transition-all"
        />
        <label for="checkbox-${todoId}" class="w-full md:cursor-pointer">${item}</label>
        <button class="bg-transparent">
          <img src="/images/icon-cross.svg" alt="" />
        </button>
      </li>
        `;

    todoList.insertAdjacentHTML('afterbegin', html);

    todoInput.value = '';
    todoId++;
  }

  // todos.map((todo) => {
  //   const html = `
  //       <li class="todo px-3 py-4 w-full flex items-center gap-x-2 text-dark-gray-100">
  //       <!-- TODO: fix the focus state -->
  //       <input
  //         type="checkbox"
  //         id="checkbox-${todo.id}"
  //         ${todo.done ? 'checked' : ''}
  //         class="peer appearance-none relative w-5 h-5 rounded-full focus:outline-none shrink-0 before:content-[''] before:w-[22px] before:h-[22px] before:-left-[1px] before:-top-[1px] before:bg-check-gray checked:before:bg-gradient-to-br hover:before:bg-gradient-to-br checked:before:from-check-start checked:before:to-check-end hover:from-check-start hover:to-check-end before:absolute before:rounded-full after:content-[''] after:w-full after:h-full after:left-0 after:top-0 after:bg-white checked:after:bg-center checked:after:bg-no-repeat checked:after:bg-transparent checked:after:bg-[url('/images/icon-check.svg')] after:absolute after:rounded-full cursor-pointer ease-in transition-all"
  //       />
  //       <label for="checkbox-${todo.id}" class="w-full md:cursor-pointer">${todo.title}</label>
  //       <button class="bg-transparent">
  //         <img src="/images/icon-cross.svg" alt="" />
  //       </button>
  //     </li>
  //       `;

  //   todoList.insertAdjacentHTML('afterbegin', html);

  //   todoInput.value = '';
  // });
}
