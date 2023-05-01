import {keyboardRussian} from "./language-Russian.js";
import {keyboardEnglish} from "./language-English.js";
import {changeCapsLock} from "./index.js";
import {changeShift} from "./index.js";

let buttonClick;

function searchKey(arr, symbol) {
  let key;
  arr.forEach(elem => {  
    if (elem.code == symbol) { key = elem }; 
  });
  return key;
};

function writeSimbol(symbol, writeSimbol) {
  let inputFields = document.querySelector(".input-fields");

  if (symbol.group === "alphanumeric") { 
    inputFields.setRangeText(writeSimbol, inputFields.selectionStart, inputFields.selectionEnd, "end");
  }
  else if (symbol.group === "space") {
    inputFields.setRangeText(" ", inputFields.selectionStart, inputFields.selectionEnd, "end");
  }
  else if (symbol.key === "Tab") {
    inputFields.setRangeText("    ", inputFields.selectionStart, inputFields.selectionEnd, "end");
  }
  else if (symbol.key === "Enter") {
    inputFields.setRangeText("\n", inputFields.selectionStart, inputFields.selectionEnd, "end");
  }
  else if (symbol.key === "Backspace") {
    inputFields.setRangeText("", inputFields.selectionStart -= 1, inputFields.selectionEnd, "end");
  }
  else if (symbol.key === "Del") {
    inputFields.setRangeText("", inputFields.selectionStart, inputFields.selectionEnd += 1, "end");
  }
  else if (symbol.key === "◀") {
    inputFields.selectionStart -= 1;
    inputFields.selectionEnd = inputFields.selectionStart;
  }
  else if (symbol.key === "▶") {
    inputFields.selectionStart += 1;
    inputFields.selectionEnd = inputFields.selectionStart;
  }
  else if (symbol.key === "▲") {
    let posNewLine = inputFields.value.lastIndexOf("\n", inputFields.selectionStart - 1);
    let countSymbol = inputFields.selectionStart - posNewLine;
    let prevPosNewLine = inputFields.value.lastIndexOf("\n", posNewLine - 1);

    if (countSymbol > posNewLine - prevPosNewLine) {
      inputFields.selectionStart = posNewLine;
    }
    else {
      inputFields.selectionStart = prevPosNewLine + countSymbol;
    }
    inputFields.selectionEnd = inputFields.selectionStart;
  }
  else if (symbol.key === "▼") {
    let prevPosNewLine = inputFields.value.lastIndexOf("\n", inputFields.selectionStart - 1);
    let countSymbol = inputFields.selectionStart - prevPosNewLine;
    let posNewLine = inputFields.value.indexOf("\n", inputFields.selectionStart);

    if (inputFields.value.indexOf("\n", posNewLine + 1) - posNewLine === 1) {
      inputFields.selectionStart = posNewLine + 1;
    }
    else {
      inputFields.selectionStart = posNewLine + countSymbol;
    }
    inputFields.selectionEnd = inputFields.selectionStart;
  }
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