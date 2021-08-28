// /* eslint-disable func-names */
// // eslint-disable-next-line import/no-cycle
// import updateLocalStorage from './index';

// export default function chechekInput(todo) {
//   const checkboxes = document.querySelectorAll('input[type="checkbox"]');

//   checkboxes.forEach((checkbox) => checkbox.addEventListener('change', function () {
//     if (this.checked) {
//       todo[this.id].completed = true;
//       updateLocalStorage();
//     } else todo[this.id].completed = false;
//     updateLocalStorage();
//   }));
// }