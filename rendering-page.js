import {keyboardEnglish} from './language-English.js';
import {keyboardRussian} from './language-Russian.js';

export function addInputFields(language) {
  document.body.insertAdjacentHTML("beforeend", `<main class="main">
                                                    <textarea class="input-fields" spellcheck="false"></textarea>
                                                    <div class="wrapper-keyboard"></div>
                                                  </main>`);
  addKeyboard(language);
}
  
export function addKeyboard(language, capsLock, shift) {
  language = language === "English" ? keyboardEnglish : keyboardRussian;
  let wrapperKeyboard = document.querySelector(".wrapper-keyboard");
  wrapperKeyboard.innerHTML = "";
  let numberKeyboardRow = 0;

  for (let item of language) {
    if (+item.row !== numberKeyboardRow) {
    wrapperKeyboard.insertAdjacentHTML("beforeend", `<div class="keyboard-row"></div>`);
    numberKeyboardRow++;
    }

    let keyboardRow = document.querySelectorAll(".keyboard-row")[numberKeyboardRow-1];
    let writeSymbol = shift && item.shiftKey ? item.shiftKey : item.key;
    
    if (item.group === "alphanumeric") {
      if ((capsLock && !shift) || (!capsLock && shift)) { 
        keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short ${item.code}">${writeSymbol.toUpperCase()}</button>`); 
      }
      else { keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short ${item.code}">${writeSymbol}</button>`); }
    }
    else if (item.group === "editing" || item.group === "control") {
      keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_long ${item.code}">${writeSymbol}</button>`);
    }
    else if (item.group === "space") {
      keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_space ${item.code}">${writeSymbol}</button>`);
    }
    else if (item.key === "▲") {
      keyboardRow.insertAdjacentHTML("beforeend", `<div class="wrapper-button_arrows"></div>`);
      document.querySelector(".wrapper-button_arrows").insertAdjacentHTML("beforeend", `<button class="button button_arrows ${item.code}">${writeSymbol}</button>`);                                     
    }
    else if (item.key === "▼") {
      document.querySelector(".wrapper-button_arrows").insertAdjacentHTML("beforeend", `<button class="button button_arrows ${item.code}">${writeSymbol}</button>`);
    }
    else if (item.group === "cursor-control") {
      keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short ${item.code}">${writeSymbol}</button>`);
    }
  }

  if (capsLock) { document.querySelector(".CapsLock").classList.add("button_active")};
  if (shift) { document.querySelector(".ShiftLeft").classList.add("button_active")};
}