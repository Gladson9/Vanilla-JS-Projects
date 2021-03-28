const generateBtn = document.querySelector(".generate");
const colorsContainer = document.querySelectorAll(".color-wrapper");
const copyKey = document.querySelectorAll("img");

let initialColors = [];
// Event listeners
generateBtn.addEventListener("click", generateColors);

copyKey.forEach((key) => {
  key.addEventListener("click", () => {
    let hex = initialColors[key.getAttribute("data-copy")];
    copyToClipboard(hex);
  });
});

//Functions

function copyToClipboard(hex) {
  const el = document.createElement("textarea");
  el.value = hex;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

function generateColorCode() {
  const values = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += values[Math.floor(Math.random() * values.length)];
  }
  return hexCode;
}

function generateColors() {
  initialColors = [];
  colorsContainer.forEach((div) => {
    let hexCode = generateColorCode();
    let hexTextField = div.children[1].children[0].children[0];
    div.children[0].style.background = hexCode;
    hexTextField.textContent = hexCode;
    initialColors.push(hexCode);
  });
}

generateColors();
