/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.css';

const dateElement = document.getElementById('date');
const clear = document.querySelector('.fa-sync');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const list = document.querySelector('#list');
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
  e.preventDefault()
  toDoList = toDoList.filter((todo) => (todo.completed === false));
  updateLocalStorage();
  listItems()
}

function listItems() {
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li class="list-all">
    <input type="checkbox" class="${e.completed ? 'completed' : ''}" id="${e.id}">
    <a class="text"> ${e.description} </a>
    <button class="del" type="submit" id="${e.id}><i class="fas fa-trash"></i></button> 
  </li>`;
  });
  const listAll = document.querySelectorAll('.list-all');
  listAll.forEach((li, i) => {
    const button = li.lastElementChild;
    const checkbox = li.firstElementChild;
    button.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      toDoList.splice(i, 1);
      updateLocalStorage();
    });
    checkbox.addEventListener('click', (e) => {
      if (e.target.checked) {
        toDoList[i].completed = true;
        e.target.checked = true;
        e.target.parentElement.classList.add('completed');
        updateLocalStorage();
      } else {
        toDoList[i].completed = false;
        e.target.checked = false;
        e.target.parentElement.classList.remove('completed');
        updateLocalStorage();
      }
    });
  });
  updateLocalStorage();
}

function addToDo(e) {
  e.preventDefault();
  if (input.value) {
    toDoList.push({
      description: input.value,
      completed: false,
      id: toDoList.length,
    });
    listItems();
    input.value = '';
  }
}


window.addEventListener('DOMContentLoaded', listItems());
btn.addEventListener('click', addToDo);
clearAllCompleted.addEventListener('click', clearCompleted)
