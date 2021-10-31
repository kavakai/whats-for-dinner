var addRecipe = document.querySelector('.add-recipe-button');

var side = document.querySelector('#sideChoice');

var main = document.querySelector('#mainChoice');

var dessert = document.querySelector('#dessertChoice');

var makeMeal = document.querySelector('#entireMeal');

var letsCook = document.querySelector('.meal-button');

var potImage = document.querySelector('.pot');

var pot = document.querySelector('#cookpot');

var clearButton = document.querySelector('.clear');

var makeThis = document.querySelector('.make-this');

var dishSelection = document.querySelector('.meal-display');


var sideSelection = [
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

var mainSelection = [
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

var dessertSelection = [
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


letsCook.addEventListener('click', showMeal);

clearButton.addEventListener('click', goHome);


function showMeal() {
  clearButton.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  pot.classList.add('hidden');
  dishSelection.classList.remove('hidden');
    displayMeal();
};

function displayMeal() {
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

function goHome() {
  clearButton.classList.add('hidden');
  makeThis.classList.add('hidden');
  pot.classList.remove('hidden');
  dishSelection.classList.add('hidden');
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
