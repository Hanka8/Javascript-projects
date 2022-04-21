const colors = ["green", "red", "blue", "yellow", "white", "black", "orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  let i = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[i];
  color.textContent = colors[i];
});
