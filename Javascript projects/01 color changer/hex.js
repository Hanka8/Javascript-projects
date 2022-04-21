const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  let randomNumber = Math.floor(Math.random() * hex.length);
  let clr = "#";
  for (i = 0; i < 6; i++) {
    clr += hex[randomNumber];
  }
  document.body.style.backgroundColor = clr;
  color.textContent = clr;
});
