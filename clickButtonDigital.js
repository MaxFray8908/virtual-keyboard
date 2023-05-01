import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
import {changeCapsLock} from "./index.js";
import {changeShift} from "./index.js";
import {writeSimbol} from "./writeSymbol.js";

let buttonClick;

function searchKey(arr, symbol) {
  let key;
  arr.forEach(elem => {  
    if (elem.code == symbol) { key = elem } 
  });
  return key;
}

export function addClickButton(event, language) {
  buttonClick = event.target;

  if (buttonClick.classList.contains("button")) {
    let symbol = searchKey(language === "English" ? keyboardEnglish : keyboardRussian, buttonClick.classList[2])
    buttonClick.classList.add("button_click");
    writeSimbol(symbol, buttonClick.innerText);
  }
}

export function deleteClickButton() {
  if (buttonClick.innerText === "CapsLock") {changeCapsLock(); }
  if (buttonClick.innerText === "Shift") {changeShift(); }
  buttonClick.classList.remove('button_click');
  document.querySelector(".input-fields").focus();
}