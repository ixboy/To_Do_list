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
      <input type="text" value="${e.description}" class="edit-input description-${e.index}">
      <button class="del" type="submit" id="${e.index}><i class="fas fa-trash"></i></button> 
    </li>`;
  });

  const listAll = document.querySelectorAll('.list-all');
  listAll.forEach((li, i) => {
    const button = li.lastElementChild;
    const input = li.children[1];
    const checkbox = li.firstElementChild;

    input.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        const newDescrip = e.target.value;
        toDoList[i].description = newDescrip;
        localStorage.toDoList = JSON.stringify(toDoList);
      }
    });

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
        updateLocalStorage();

        // localStorage.toDoList = JSON.stringify(toDoList);
      } else {
        toDoList[i].completed = false;
        e.target.checked = false;
        e.target.parentElement.classList.remove('completed');
        updateLocalStorage();

        // localStorage.toDoList = JSON.stringify(toDoList);
      }
    });
  });
  localStorage.toDoList = JSON.stringify(toDoList);
}
