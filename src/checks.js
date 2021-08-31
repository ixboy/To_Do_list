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
      <input type="checkbox"  id="${e.index}">
      <input type="text" value="${e.description}" class="edit-input description">
      <button class="del" type="submit" id="${e.index}><i class="fas fa-trash"></i></button> 
    </li>`;
  });

  const listAll = document.querySelectorAll('.list-all');
  listAll.forEach((li, i) => {
    const button = li.lastElementChild;
    const input = li.children[1];
    const checkbox = li.firstElementChild;
    if (toDoList[i].completed) checkbox.checked = true;

    input.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.key === 'Enter') {
        const newDescrip = e.target.value;
        toDoList[i].description = newDescrip;
        updateLocalStorage();
      }
    });

    button.addEventListener('click', (e) => {
      e.target.parentElement.remove();
      toDoList.splice(i, 1);
      updateIndex();
    });

    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        toDoList[i].completed = true;
        e.target.parentElement.classList.add('completed');
      } else {
        toDoList[i].completed = false;
        e.target.parentElement.classList.remove('completed');
      }
      updateLocalStorage();
    });
  });
}
