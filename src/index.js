/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.css';

import {
chechekInput
} from './main';

const dateElement = document.getElementById('date');
const clear = document.querySelector('.fa-sync');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const list = document.querySelector('#list');
export let checkboxes = ""
let toDoList = [];

if (localStorage.toDoList !== undefined) {
  toDoList = JSON.parse(localStorage.toDoList)
}

const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);

export function updateLocalStorage() {
  localStorage.toDoList = JSON.stringify(toDoList);
}

function listItems() {
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li>
    <input type="checkbox" class="check" id="${e.id}">
    <a class="text"> ${e.description} </a>
    <button class="del" type="submit" id="${e.id}><i class="fas fa-trash"></i></button> 
  </li>`;
  });
  checkboxes = document.querySelectorAll('input[type="checkbox"]')
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
    updateLocalStorage()
    chechekInput(toDoList)
    input.value = '';
  }
}

window.addEventListener('DOMContentLoaded', listItems());
btn.addEventListener('click', addToDo);