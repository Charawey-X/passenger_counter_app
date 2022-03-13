let countEl = document.getElementById("count-el")
let incrementCount = 0;

function increment() {
  incrementCount++;
  countEl.innerText = incrementCount;
}

let saveEl = document.getElementById("save-el")

function save() {
  let countPrevious = incrementCount + " - ";
  saveEl.textContent += countPrevious;
  countEl.innerText = 0;
  incrementCount=0;
}
