const keyboardEnglish = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                        ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\', 'Del'],
                        ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'],
                        ['Shift','z','x','c','v','b','n','m',',','.','/','Shift'],
                        ['Ctrl','Win','Alt','','Alt','◀','▲','▼','▶','ctrl']];
const keyboardRussian = [['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                        ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\', 'Del'],
                        ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
                        ['Shift','я','ч','с','м','и','т','ь','б','ю','.','В','Shift'],
                        ['Ctrl','Win','Alt','','Alt','л','н','п','ctrl']];

function addInputFields() {
  document.body.insertAdjacentHTML("beforeend", `<main class="main">
                                                    <textarea class="input-fields" spellcheck="false"></textarea>
                                                    <div class="wrapper-keyboard"></div>
                                                  </main>`);
  addKeyboard(keyboardEnglish);
}
addInputFields();

function addKeyboard(language) {
  let wrapperKeyboard = document.querySelector(".wrapper-keyboard");
  wrapperKeyboard.innerHTML = "";

  for (let i = 0; i < language.length; i++) {
    wrapperKeyboard.insertAdjacentHTML("beforeend", `<div class="keyboard-row"></div>`);
    let keyboardRow = document.querySelectorAll(".keyboard-row")[i];
    for (let j = 0; j < language[i].length; j++) {
      if (language[i][j].length === 1 && language[i][j] !== '▲') {
        keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_short">${language[i][j]}</button>`);
      }
      else if (language[i][j] === '▲') {
        keyboardRow.insertAdjacentHTML("beforeend", `<div class="wrapper-button_arrows"> 
                                                        <button class="button button_arrows">${language[i][j]}</button> 
                                                        <button class="button button_arrows">${language[i][j+1]}</button> 
                                                      </div>`);
        j++;
      }
      else if (language[i][j].length === 0){
        keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_space">${language[i][j]}</button>`);
      }
      else {
        keyboardRow.insertAdjacentHTML("beforeend", `<button class="button button_long">${language[i][j]}</button>`);
      }
    }
  }
}

function writeSimbol(event) {
  let inputFields = document.querySelector(".input-fields");
  inputFields.append(event.key);
  console.log(event.key);
}
document.addEventListener('keydown', writeSimbol);