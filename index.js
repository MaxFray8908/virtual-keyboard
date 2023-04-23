import {addInputFields} from "./rendering-page.js";

// const keyboardRussian = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
//                         ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\', 'Del'],
//                         ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
//                         ['Shift','я','ч','с','м','и','т','ь','б','ю','.','В','Shift'],
//                         ['Ctrl','Win','Alt','','Alt','л','н','п','ctrl']];

// function writeSimbol(event) {
//   let inputFields = document.querySelector(".input-fields");
//   let symbol = event.key;  
//   inputFields.append(symbol);
//   let button = document.querySelector(`.button_${symbol}`);
//   button.classList.add('button_click');
// }

// function deleteClickButton(event) {
//   let symbol = event.key; 
//   let button = document.querySelector(`.button_${symbol}`);
//   button.classList.remove('button_click');
// }

// document.addEventListener('keydown', writeSimbol);
// document.addEventListener('keyup', deleteClickButton);

function setLocalStorage() {
  localStorage.setItem("language", language);
}
window.addEventListener("beforeunload", setLocalStorage)

function getLocalStorage() {
  let language;
  if(localStorage.getItem("language") ) {
    language = localStorage.getItem("language");
  }
  else {
    language = "English";
  }
  addInputFields(language);
}
window.addEventListener("load", getLocalStorage)