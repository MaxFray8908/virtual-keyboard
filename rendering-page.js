import {keyboardEnglish} from './language-English.js';

export function addInputFields(language) {
  document.body.insertAdjacentHTML("beforeend", `<main class="main">
                                                    <textarea class="input-fields" spellcheck="false"></textarea>
                                                    <div class="wrapper-keyboard"></div>
                                                  </main>`);
  if (language === "English") {addKeyboard(keyboardEnglish);}                                                
  // else if (language === "Russian") {addKeyboard(keyboardRussian);}     
}
  
export function addKeyboard(language) {
  let wrapperKeyboard = document.querySelector(".wrapper-keyboard");
  wrapperKeyboard.innerHTML = "";
  let numberKeyboardRow = 0;

  for (let item of language) {
    if (+item.row !== numberKeyboardRow) {
    wrapperKeyboard.insertAdjacentHTML("beforeend", `<div class="keyboard-row"></div>`);
    numberKeyboardRow++;
    }

    let keyboardRow = document.querySelectorAll(".keyboard-row")[numberKeyboardRow-1];
    
    if (item.group === "alphanumeric") {
    keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short button_${item.key}">${item.key}</button>`);
    }
    else if (item.group === "editing" || item.group === "control") {
    keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_long button_${item.key}">${item.key}</button>`);
    }
    else if (item.group === "space") {
    keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_space button_${item.key}">${item.key}</button>`);
    }
    else if (item.key === "▲") {
    keyboardRow.insertAdjacentHTML("beforeend", `<div class="wrapper-button_arrows"></div>`);
    document.querySelector(".wrapper-button_arrows").insertAdjacentHTML("beforeend", `<button class="button button_arrows button_${item.key}">${item.key}</button>`);                                     
    }
    else if (item.key === "▼") {
    document.querySelector(".wrapper-button_arrows").insertAdjacentHTML("beforeend", `<button class="button button_arrows button_${item.key}">${item.key}</button>`);
    }
    else if (item.group === "cursor-control") {
    keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short button_${item.key}">${item.key}</button>`);
    }
  }
}