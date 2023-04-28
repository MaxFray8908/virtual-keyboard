import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
import {changeLanguage} from "./index.js";

function searchKey(arr, keyCode) {
  let key;
  arr.forEach(elem => {  
    if (elem.keyCode == keyCode) { key = elem}; 
  });
  return key;
};

function writeSimbol(symbol) {
  let inputFields = document.querySelector(".input-fields");
  if (symbol.group === "alphanumeric") { inputFields.append(symbol.key); }
}

export function addClickButton(event, language) {
  let button;
  let symbol = searchKey(language === "English" ? keyboardEnglish : keyboardRussian, event.keyCode)
  console.log(event.code);
  if (event.code === "AltLeft" && event.ctrlKey || event.code === "ControlLeft" && event.altKey) { changeLanguage(); }

  if (event.code === "ShiftRight" || event.code === "AltRight" || event.code === "ControlRight") {
    button = document.querySelectorAll(`.button_${event.keyCode}`)[1];
  }
  else {
    button = document.querySelector(`.button_${event.keyCode}`);
  }
    
  button.classList.add('button_click');
  writeSimbol(symbol);
}

export function deleteClickButton(event) {
  let button;
  
  if (event.code === "ShiftRight" || event.code === "AltRight" || event.code === "ControlRight") {
    button = document.querySelectorAll(`.button_${event.keyCode}`)[1];
  }
  else {
    button = document.querySelector(`.button_${event.keyCode}`);
  }
  
  button.classList.remove('button_click');
}