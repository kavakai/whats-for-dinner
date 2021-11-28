var radioButtons = document.getElementsByName('selector');

const idTitles = ['#sideChoice', '#mainChoice', '#dessertChoice', '#entireMeal', '#cookpot'];

const[side, main, dessert, makeMeal, pot] = idTitles.map(idName => document.querySelector(idName));

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

clearButton.addEventListener('click', goHome)

letsCook.addEventListener('click', showMeal)



const showMeal = () => {
  clearButton.classList.remove('hidden');
  makeThis.classList.remove('hidden');
  pot.classList.add('hidden')
  for (var i = 0; i < radioButtons.length; i++)

  if (radioButtons.value === side) {
    potImage.innerHTML = (`<p"You should make: ${sideSelection[getRandomIndex(sidsideSelection)]}!"</p>`);
  }
}

const goHome = () => {
  clearButton.classList.add('hidden')
  makeThis.classList.add('hidden')
  pot.classList.remove('hidden')
}

const getRandomIndex = array => {
  return Math.floor(Math.random() * array.length);
};
