/* Disable/Enable Select */
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

/* Next iphone page */
let mockupPage1 = document.getElementById('mockupPage1');
let mockupPage2 = document.getElementById('mockupPage2');
let nextButton1 = document.getElementById('nextButton1');

nextButton1.addEventListener('click', (e) => {
  mockupPage1.classList.add('d-none');
  mockupPage2.classList.remove('d-none');
  console.log("erfolg");
});
