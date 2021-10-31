var addRecipe = document.querySelector('.add-recipe-button');


var side = document.querySelector('#sideChoice');

var main = document.querySelector('#mainChoice');

var dessert = document.querySelector('#dessertChoice');

var makeMeal = document.querySelector('#entireMeal');

var letsCook = document.querySelector('.meal-button');

var potImage = document.querySelector('.pot');

var pot = document.querySelector('#cookpot')

var clearButton = document.querySelector('.clear');

var makeThis = document.querySelector('.make-this');

var dishSelection = document.querySelector('#meal-here')


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

// target radio buttons to capture input
// create eventListener-click to capture input values
// get random item from selected array
// hide cookpot image
// display choice in cookpots place
// show clear button

// radioButtons.addEventListener('click', selectArray)

letsCook.addEventListener('click', showMeal)

clearButton.addEventListener('click', goHome)


// function selectArray() {
//   for (var i = 0; i < radioButtons.length; i++)
//   if (radioButtons[i].checked) {
//
//   }
// }

function showMeal() {
  clearButton.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  pot.classList.add('hidden')
  dishSelection.classList.remove('hidden')
   displayMeal()
}

function displayMeal() {
  if (side.checked) {
    dishSelection.innerText = sideSelection[getRandomIndex(sideSelection)]
} else if (main.checked) {
  dishSelection.innerText = mainSelection[getRandomIndex(mainSelection)]
} else if (dessert.checked) {
  dishSelection.innerText = dessertSelection[getRandomIndex(dessertSelection)]
} else if (makeMeal.checked) {
  dishSelection.innerText = sideSelection[getRandomIndex(sideSelection)] + mainSelection[getRandomIndex(mainSelection)] + dessertSelection[getRandomIndex(dessertSelection)]
}


}

function goHome() {
  clearButton.classList.add('hidden')
  makeThis.classList.add('hidden')
  pot.classList.remove('hidden')
  dishSelection.classList.add('hidden')
}
// radioButtons.addEventListener('checked', getValue);
//
// function getValue(event) {
//   selectedType = '';
//   for (var i = 0; i < radioButtons.length; i++)
//   if (radioButtons[i].target.event) {
//      selectedType = radioButtons[i].value
//   }
//   event.preventDefault()
// }
//
// letsCook.addEventListener('click', displayCoice)
//
//
// function displayCoice(selectedType) {
//   if (selectedType === side) {
//     potImage.innerHTML = sideSelection[RandomIndex(sideSelection)]
//   }
// }



function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
