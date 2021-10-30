var addRecipe = document.querySelector('.add-recipe-button');

var radioButtons = document.getElementsByName('selector');
console.log(radioButtons)

var side = document.querySelector('#sideChoice');

var main = document.querySelector('#mainChoice');

var dessert = document.querySelector('#dessertChoice');

var makeMeal = document.querySelector('#entireMeal');

var letsCook = document.querySelector('.meal-button');

var potImage = document.querySelector('.pot');

var pot = document.querySelector('#cookpot')

var clearButton = document.querySelector('.clear');

var makeThis = document.querySelector('.make-this');

var selected = '';

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


clearButton.addEventListener('click', goHome)

letsCook.addEventListener('click', showMeal)



function showMeal() {
  clearButton.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  pot.classList.add('hidden')
  for (var i = 0; i < radioButtons.length; i++)

  if (radioButtons.value === side) {
    potImage.innerHTML = (`<p"You should make: ${sideSelection[getRandomIndex(sidsideSelection)]}!"</p>`);
  }
}

function goHome() {
  clearButton.classList.add('hidden')
  makeThis.classList.add('hidden')
  pot.classList.remove('hidden')
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
