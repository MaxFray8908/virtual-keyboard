export function writeSimbol(symbol, writeSimbol) {
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

    if (countSymbol > inputFields.value.indexOf("\n", posNewLine + 1) - posNewLine && inputFields.value.indexOf("\n", posNewLine + 1) !== -1) {
      inputFields.selectionStart = inputFields.value.indexOf("\n", posNewLine + 1);
    }
    else {
      inputFields.selectionStart = posNewLine + countSymbol;
    }
    inputFields.selectionEnd = inputFields.selectionStart;
  }
}