const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const h1 = document.getElementsByTagName("h1");
const rsbtn = document.getElementById("rsbtn");

let currentPlayer = "X";
let count = 0;

let WinningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startgame(e) {
  if (e.target.className !== "ticTac") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      count++;
      console.log(count);
      winner();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    if (count === 9) {
      console.log(count);
      h1[0].innerText = "Match Draw";
    }
  }
}

ticTac.addEventListener("click", startgame);

function winner() {
  WinningCondition.forEach((item) => {
    let index0 = item[0];
    let index1 = item[1];
    let index2 = item[2];
    let value0 = boxes[index0];
    let value1 = boxes[index1];
    let value2 = boxes[index2];

    if (
      value0.innerText !== "" &&
      value1.innerText !== "" &&
      value2.innerText !== ""
    ) {
      if (
        value0.innerText === value1.innerText &&
        value0.innerText === value2.innerText
      ) {
        boxes[index0].classList.add("winnerClass");
        boxes[index1].classList.add("winnerClass");
        boxes[index2].classList.add("winnerClass");
        count = 0;
        h1[0].innerText = `Winner is ${value0.innerText}`;
        ticTac.removeEventListener("click", startgame);
      }
    }
  });
}

rsbtn.addEventListener("dblclick", () => {
  count = 0;
  currentPlayer = "X";
  h1[0].innerText = "Tic Tac Toe";
  boxes.forEach((item) => {
    item.classList.remove("winnerClass");
    item.innerText = "";
  });

  ticTac.addEventListener("click", startgame);
});
