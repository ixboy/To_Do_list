const list = document.querySelector('#list');

export default function listItems(toDoList) {
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
      localStorage.toDoList = JSON.stringify(toDoList);
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
