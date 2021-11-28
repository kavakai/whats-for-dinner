
var radioButtons = document.getElementsByName('selector');

const idTitles = ['#sideChoice', '#mainChoice', '#dessertChoice', '#entireMeal', '#cookpot', '#mealHere'];

const[side, main, dessert, makeMeal, pot, dishSelection] = idTitles.map(idName => document.querySelector(idName));

const classTitles = ['.add-recipe-button', '.meal-button', '.pot', '.clear', '.make-this'];

const[addRecipe, letsCook, potImage, clearButton, makeThis] = classTitles.map(className => document.querySelector(className));

let selected = '';

const sideSelection = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies',
];

const mainSelection = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza',
];

const dessertSelection = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs',
];






let showMeal = () => {
  clearButton.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  pot.classList.add('hidden');
  dishSelection.classList.remove('hidden');
    displayMeal();
};

let displayMeal = () => {
  if (side.checked) {
    dishSelection.innerText = sideSelection[getRandomIndex(sideSelection)] + "!";
  } else if (main.checked) {
    dishSelection.innerText = mainSelection[getRandomIndex(mainSelection)] + "!";
  } else if (dessert.checked) {
    dishSelection.innerText = dessertSelection[getRandomIndex(dessertSelection)] + "!";
  } else if (makeMeal.checked) {
    dishSelection.innerText = mainSelection[getRandomIndex(mainSelection)] + " with a side of " + sideSelection[getRandomIndex(sideSelection)] + " and " + dessertSelection[getRandomIndex(dessertSelection)] + " for dessert!";
  }
};

let goHome = () => {
  clearButton.classList.add('hidden')
  makeThis.classList.add('hidden')
  pot.classList.remove('hidden')
  dishSelection.classList.add('hidden');
}

letsCook.addEventListener('click', showMeal)

clearButton.addEventListener('click', goHome) 


let  getRandomIndex = array => {
  return Math.floor(Math.random() * array.length);
};
