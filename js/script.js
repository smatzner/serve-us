/* Bouncing Burger Button */
let burgerButton = document.querySelector(".fa-burger");

burgerButton.addEventListener("mouseover", (e) => {
  e.target.classList.add("fa-bounce");
});
burgerButton.addEventListener("mouseout", (e) => {
  e.target.classList.remove("fa-bounce");
});