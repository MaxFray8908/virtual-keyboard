import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
import {changeLanguage} from "../index.js";
import {changeCapsLock} from "../index.js";
import {changeShift} from "../index.js";
import {writeSimbol} from "./writeSymbol.js";

let buttonClick;
let controlLeft;
let altLeft;
let shift;

function searchKey(arr, symbol) {
  let key;
  arr.forEach(elem => {  
    if (elem.code == symbol) { key = elem } 
  });
  return key;
}

export function addClickButton(event, language) {
  let symbol = searchKey(language === "English" ? keyboardEnglish : keyboardRussian, event.code);
  buttonClick = document.querySelector(`.${event.code}`);
  event.preventDefault();

  if (event.code === "ControlLeft") { controlLeft = true; }
  if (event.code === "AltLeft") { altLeft = true; }
  if (event.code === "AltLeft" && controlLeft || event.code === "ControlLeft" && altLeft) { changeLanguage(); }
  if (buttonClick.innerText === "Shift") {
    if (event.repeat === false) { 
      shift = event.code;
      changeShift(shift); 
    }
  }
  if (event.code === "AltRight") { document.querySelector(`.AltRight`).classList.add("button_click"); }
  if (buttonClick.innerText === "CapsLock") { if (event.repeat === false) { changeCapsLock(shift); }}

  else { buttonClick.classList.add("button_click"); }
  writeSimbol(symbol, buttonClick.innerText);
}

export function deleteClickButton(event) {
  if (event.code === "ControlLeft") { controlLeft = false; }
  if (event.code === "AltLeft") { altLeft = false; }
  
  buttonClick = document.querySelector(`.${event.code}`);

  if (buttonClick.innerText === "Shift") { 
    changeShift();
    buttonClick.classList.remove('button_active'); 
  }
  buttonClick.classList.remove('button_click');
}