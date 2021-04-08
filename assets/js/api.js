const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search__result');
const recipeContainer = document.querySelector('.recipe__container');
let searchQuery = '';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    console.log(searchQuery)
})