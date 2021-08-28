/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import listItems from './checks';

const dateElement = document.getElementById('date');
// const clear = document.querySelector('.fa-sync');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const clearAllCompleted = document.querySelector('.clear-completed');
let toDoList = [];

if (localStorage.toDoList !== undefined) {
  toDoList = JSON.parse(localStorage.toDoList);
}

const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);

export default function updateLocalStorage() {
  localStorage.toDoList = JSON.stringify(toDoList);
}

function clearCompleted(e) {
  e.preventDefault();
  toDoList = toDoList.filter((todo) => (todo.completed === false));
  updateLocalStorage();
  listItems(toDoList);
}

function addToDo(e) {
  e.preventDefault();
  if (input.value) {
    toDoList.push({
      description: input.value,
      completed: false,
      id: toDoList.length,
    });
    listItems(toDoList);
    input.value = '';
  }
}

window.addEventListener('DOMContentLoaded', listItems(toDoList));
btn.addEventListener('click', addToDo);
clearAllCompleted.addEventListener('click', clearCompleted);
