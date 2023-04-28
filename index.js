import {addInputFields, addKeyboard} from "./rendering-page.js";
import {addClickButton, deleteClickButton} from "./clickButton.js"

let language;

export function changeLanguage() {
  language = language === "English" ? "Russian" : "English";
  addKeyboard(language);
  document.querySelector(`.button_17`).classList.add("button_click");
  document.querySelector(`.button_18`).classList.add("button_click");
}

document.addEventListener('keydown', (event) => addClickButton(event, language));
document.addEventListener('keyup', (event) => deleteClickButton(event));

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