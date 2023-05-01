import {addInputFields, addKeyboard} from "./modules-js/rendering-page.js";
import {addClickButton as addClickButtonPhysical, deleteClickButton as deleteClickButtonPhysical} from "./modules-js/clickButtonPhysical.js";
import {addClickButton as addClickButtonDigital, deleteClickButton as deleteClickButtonDigital} from "./modules-js/clickButtonDigital.js";

let language;
export let capsLock = false;
export let shift = false;

export function changeLanguage() {
  language = language === "English" ? "Russian" : "English";
  shift = false;
  addKeyboard(language, capsLock, shift);
  document.querySelector(`.ControlLeft`).classList.add("button_click");
  document.querySelector(`.AltLeft`).classList.add("button_click");
}

export function changeCapsLock(buttonShift) {
  capsLock = !capsLock;
  addKeyboard(language, capsLock, shift, buttonShift);
}

export function changeShift(buttonShift) {
  shift = !shift;
  addKeyboard(language, capsLock, shift, buttonShift);
}

document.addEventListener('keydown', (event) => addClickButtonPhysical(event, language));
document.addEventListener('keyup', (event) => deleteClickButtonPhysical(event));

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