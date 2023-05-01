import {addInputFields, addKeyboard} from "./rendering-page.js";
import {addClickButton as addClickButtonPhysical, deleteClickButton as deleteClickButtonPhysical} from "./clickButtonPhysical.js";
import {addClickButton as addClickButtonDigital, deleteClickButton as deleteClickButtonDigital} from "./clickButtonDigital.js";

let language;
export let capsLock = false;
export let shift = false;

export function changeLanguage() {
  language = language === "English" ? "Russian" : "English";
  addKeyboard(language, capsLock, shift);
  document.querySelector(`.button_17`).classList.add("button_click");
  document.querySelector(`.button_18`).classList.add("button_click");
}

export function changeCapsLock() {
  capsLock = !capsLock;
  addKeyboard(language, capsLock, shift);
}

export function changeShift() {
  shift = !shift;
  addKeyboard(language, capsLock, shift);
}

// document.addEventListener('keydown', (event) => addClickButtonPhysical(event, language));
// document.addEventListener('keyup', (event) => deleteClickButtonPhysical(event));

document.addEventListener("mousedown", (event) => addClickButtonDigital(event, language));
document.addEventListener("mouseup", (event) => deleteClickButtonDigital(event, language));

function setLocalStorage() {
  localStorage.setItem("language", language);
}
window.addEventListener("beforeunload", setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem("language") === "English" || localStorage.getItem("language") === "Russian") {
    language = localStorage.getItem("language");
  }
  else {
    language = "English";
  }
  addInputFields(language);
}
window.addEventListener("load", getLocalStorage)