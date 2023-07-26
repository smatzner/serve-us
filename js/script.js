/* Bouncing Burger Button */
let burgerButton = document.querySelector(".fa-burger");

burgerButton.addEventListener("mouseover", (e) => {
  e.target.classList.add("fa-bounce");
});
burgerButton.addEventListener("mouseout", (e) => {
  e.target.classList.remove("fa-bounce");
});

/* Disable Select */
let panInput = document.getElementById("panInput");
let panSelect = document.getElementById("panSelect");
let clickable = document.getElementById("clickable");

panInput.addEventListener("focus", (e) => {
  panSelect.disabled = true;
});

panInput.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    panSelect.disabled = false;
  }
});
