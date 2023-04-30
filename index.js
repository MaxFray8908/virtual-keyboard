import {addInputFields, addKeyboard} from "./rendering-page.js";
import {addClickButton as addClickButtonPhysical, deleteClickButton as deleteClickButtonPhysical} from "./clickButtonPhysical.js";
import {addClickButton as addClickButtonDigital, deleteClickButton as deleteClickButtonDigital} from "./clickButtonDigital.js";

let language;

export function changeLanguage() {
  language = language === "English" ? "Russian" : "English";
  addKeyboard(language);
  document.querySelector(`.button_17`).classList.add("button_click");
  document.querySelector(`.button_18`).classList.add("button_click");
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