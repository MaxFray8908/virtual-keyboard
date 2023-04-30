import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
let buttonClick;

function searchKey(arr, symbol) {
  let key;
  arr.forEach(elem => {  
    if (elem.key == symbol) { key = elem}; 
  });
  return key;
};


function writeSimbol(symbol) {
  let inputFields = document.querySelector(".input-fields");
  if (symbol.group === "alphanumeric") { inputFields.append(symbol.key); }
}

export function addClickButton(event, language) {
  buttonClick = event.target;

  if (buttonClick.classList.contains("button")) {
    buttonClick.classList.add("button_click");
    
    if (buttonClick.innerText === "Backspace" && document.querySelector(".input-fields").lastChild) {
      document.querySelector(".input-fields").lastChild.remove()
    }
    else {
      let symbol = searchKey(language === "English" ? keyboardEnglish : keyboardRussian, buttonClick.innerText)
      writeSimbol(symbol);
    }
  }
}

export function deleteClickButton() {
  buttonClick.classList.remove('button_click');
}