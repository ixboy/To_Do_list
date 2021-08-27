/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
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
const toDoList = [];

const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-US', options);


function listItems() {
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li>
    <input type="checkbox" class="check">
    <a class="text"> ${e.description} </a>
    <button class="del" type="submit" id="${e.id}><i class="fas fa-trash"></i></button> 
  </li>`;
  });
  console.log(toDoList)
  
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