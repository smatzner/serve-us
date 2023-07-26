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

panSelect.addEventListener("focus", (e) => {
  panInput.disabled = true;
});

panSelect.addEventListener("blur", (e) => {
  if (e.target.selectedIndex == 0) {
    panInput.disabled = false;
  }
});

/* Navigate to 2nd iPhone page */
let mockupPage1 = document.getElementById("mockupPage1");
let mockupPage2 = document.getElementById("mockupPage2");
let nextButton1 = document.getElementById("nextButton1");
let panWeight;

nextButton1.addEventListener("click", (e) => {
  if(panInput.value > 0){
    panWeight = panInput.value;
  } else if(panSelect.value > 0){
    panWeight = panSelect.value;
  }
  mockupPage1.classList.add("d-none");
  mockupPage2.classList.remove("d-none");
  console.log(panWeight);

});

/* Add ingredient to list */
let addIngredient = document.getElementById("addIngredient");
let ingredientTable = document.getElementById("ingredientTable");
let ingredients = {};

addIngredient.addEventListener("click", (e) => {
  let ingredientName = document.getElementById("ingredientName").value;
  let ingredientWeight = document.getElementById("ingredientWeight").value;
  if(ingredientName && ingredientWeight){
    ingredientTable.innerHTML +=
      "<tr><td>" +
      ingredientName +
      "</td><td>" +
      ingredientWeight +
      'g</td><td><i class="fa-solid fa-pen-to-square fa-lg"></i></td><td><i class="fa-solid fa-trash fa-lg"></i></td></tr>';
      ingredients[ingredientName] = ingredientWeight;
  }
  console.log(panWeight);
});


/* Navigate to 3rd iPhone page */
let nextButton2 = document.getElementById('nextButton2');
let mockupPage3 = document.getElementById('mockupPage3');

nextButton2.addEventListener('click', (e) => {
  mockupPage2.classList.add('d-none');
  mockupPage3.classList.remove('d-none');
});

/* Calculate */
let calculateButton = document.getElementById('calculateButton');

// panWeight = 1000;
// ingredients['Reis'] = 100;
// ingredients['Champignons'] = 250;

// console.log(panWeight);
// console.log(ingredients);

calculateButton.addEventListener('click', (e) => {
  let mealWeight = document.getElementById('mealWeight').value;
  let servingWeight = document.getElementById('servingWeight').value;
  
  let quotient = (mealWeight - panWeight) / servingWeight;
  Object.keys(ingredients).forEach((ingredient) => {
    ingredients[ingredient] /= quotient;
    Math.floor(ingredient[ingredient]);
  });
  console.log(ingredients);
})