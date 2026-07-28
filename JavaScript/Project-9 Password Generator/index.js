const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
let rangeVal = document.getElementById("rangeVal");

const upperCase = document.getElementById("capLet");
const lowerCase = document.getElementById("smaLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copybtn = document.getElementById("copybtn");

btn.addEventListener("click", () => {
  let captialLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallLetter = "abcdefghijklmnopqrstuvwxyz";
  let numberStr = "0123456789";
  let symbolStr = ' !"]#$%&()*+,-./:;<=>?@[^_`{|}~';
  let finalStr = "";
  let latestPass = "";

  if (upperCase.checked) {
    finalStr += captialLetter;
  }
  if (lowerCase.checked) {
    finalStr += smallLetter;
  }

  if (number.checked) {
    finalStr += numberStr;
  }

  if (symbol.checked) {
    finalStr += symbolStr;
  }

  if (finalStr === "") {
    alert("Please Select at least one option");
  }

  for (let i = 0; i < slider.value; i++) {
    let random = Math.floor(Math.random() * finalStr.length);
    latestPass += finalStr[random];
  }
  if (finalStr != "") {
    newPass.innerText = `${latestPass}`;
  }
});

slider.addEventListener("input", (e) => {
  rangeVal.innerText = e.target.value;
});

copybtn.addEventListener("click", () => {
  navigator.clipboard.writeText(newPass.innerText)
});

