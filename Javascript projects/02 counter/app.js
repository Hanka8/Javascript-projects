let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click", function(e) {
    // currentTarget - vždy ukazuje k elementu, ke kterému byl přidán EventListener
    // hodí se to právě v případech, kdy se EventListener používá na víc elementů
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    }
    else if (styles.contains("increase")) {
      count++;
    }
    else {
      count = 0;
      value.style.color = "black"
    }
    if (count < 0) {
      value.style.color = "red"
    }
    else if (count > 0) {
      value.style.color = "green"
    }
    value.textContent = count;
  });
});
