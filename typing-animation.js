
const textToType = [
  "주니어 Front End",
  "개발자 박진 입니다."
];

const typingElement = document.getElementById("typing-text");

let lineIndex = 0;
let charIndex = 0;

function type() {
  if (lineIndex < textToType.length) {
    const line = textToType[lineIndex];
    
    if (charIndex < line.length) {
      typingElement.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typingElement.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(type, 100);
    }
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  const currentText = typingElement.innerHTML;
  if (currentText.length > 0) {
    typingElement.innerHTML = currentText.slice(0, -1);
    setTimeout(erase, 100);
  } else {
    lineIndex = 0;
    charIndex = 0;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", type);