//Declare constants and variable
const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search__result');
const recipeContainer = document.querySelector('.recipe__container');
let searchQuery = '';
const app_ID = 'c5791d75';
const app_KEY = 'c8d9601d5a776cfa5a818efd514a7cd4';

//
searchForm.addEventListener('submit', (e) => {
    //the default action that belongs to the form will not occur
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_ID}&app_key=${app_KEY}&to=20`;
    await fetch(baseURL)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    generateHTML(data.hits);
    })
    .catch(function(error) {
    searchResult.innerHTML = "<h3>Couldn't fetch API! Try again...</h3>";
    });
    }

function generateHTML(results) {
    recipeContainer.classList.remove('before');
        if(results.length == 0) {
            searchResult.innerHTML = "<h3>No results found! Try again...</h3>";
        } else {
    const generatedHTML = results.map(result => {
    return `
        <div class="search__result__item">
        <img src="${result.recipe.image}" alt="Recipe Image" />
        <div class="result__item__details">
        <h2>${result.recipe.label}</h2>
        <button class="view__btn">
        <a href="${result.recipe.url}" target="_blank">View recipe</a>
        </button>
        </div>
        <p class="result__item__data">Calories: ${result.recipe.calories.toFixed(0)}</p>
        <p class="result__item__data">Diet Labels: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : 'No Data Found'}</p>
        </div>
    `;
    }).join("");
    searchResult.innerHTML = generatedHTML;
    }
    }