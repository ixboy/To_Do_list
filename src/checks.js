/* eslint-disable import/no-cycle */
import { toDoList, updateLocalStorage } from './main';

const list = document.querySelector('#list');
function updateIndex() {
  let counter = 1;
  toDoList.forEach((todo) => {
    todo.index = counter;
    counter += 1;
  });
  updateLocalStorage();
}
export default function listItems() {
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li class="list-all">
      <input type="checkbox" class="${e.completed ? 'completed' : ''}" id="${e.index}">
      <a class="text"> ${e.description} </a>
      <button class="del" type="submit" id="${e.index}><i class="fas fa-trash"></i></button> 
    </li>`;
  });

  const listAll = document.querySelectorAll('.list-all');
  listAll.forEach((li, i) => {
    const button = li.lastElementChild;
    const checkbox = li.firstElementChild;
    button.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      toDoList.splice(i, 1);
      updateIndex();
    });
    checkbox.addEventListener('click', (e) => {
      if (e.target.checked) {
        toDoList[i].completed = true;
        e.target.checked = true;
        e.target.parentElement.classList.add('completed');
        localStorage.toDoList = JSON.stringify(toDoList);
      } else {
        toDoList[i].completed = false;
        e.target.checked = false;
        e.target.parentElement.classList.remove('completed');
        localStorage.toDoList = JSON.stringify(toDoList);
      }
    });
  });
  localStorage.toDoList = JSON.stringify(toDoList);
}
