import {
    checkboxes,
    updateLocalStorage
} from './index';

export function chechekInput(todo){
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', function(){
      if(this.checked){
        todo[this.id].completed = true
        updateLocalStorage()
      }else
        todo[this.id].completed = false
        updateLocalStorage()
    }))
  }