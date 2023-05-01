import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
import {changeCapsLock} from "../index.js";
import {changeShift} from "../index.js";
import {writeSimbol} from "./writeSymbol.js";

let buttonClick;
let shift;

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
    let symbol = searchKey(language === "English" ? keyboardEnglish : keyboardRussian, buttonClick.classList[2]);

    if (buttonClick.classList.contains("ShiftLeft")) { shift = "ShiftLeft"; changeShift("ShiftLeft");}
    else if (buttonClick.classList.contains("ShiftRight")) { shift = "ShiftRight"; changeShift("ShiftRight"); }
    if (buttonClick.innerText === "CapsLock") {changeCapsLock(shift); }
    
    buttonClick.classList.add("button_click");
    writeSimbol(symbol, buttonClick.innerText);
  }
}

export function deleteClickButton() {
  // if (buttonClick.classList.contains("ShiftLeft")) { shift = "ShiftLeft"; changeShift("ShiftLeft");}
  // else if (buttonClick.classList.contains("ShiftRight")) { shift = "ShiftRight"; changeShift("ShiftRight"); }
  // if (buttonClick.innerText === "CapsLock") {changeCapsLock(shift); }
  console.log(buttonClick.classList);
  buttonClick.classList.remove('button_click');
  document.querySelector(".input-fields").focus();
}