const searchForm = document.querySelector('form');
const searchResult = document.querySelector('.search__result');
const recipeContainer = document.querySelector('.recipe__container');
let searchQuery = '';
const app_ID = 'c5791d75';
const app_KEY = 'c8d9601d5a776cfa5a818efd514a7cd4';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI (){
    const baseURL = `https://api.edamam.com/search?q=chicken&app_id=${app_ID}&app_key=${app_KEY}`;
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data);
}

/* Console logging the constant response = await fetch(baseURL) was returning the following error: 
"Access to fetch at 'https://api.edamam.com/search?q=chicken&app_id=c5791d75&app_key=c8d9601d5a776cfa5a818efd514a7cd4'
from origin 'https://8000-blush-skunk-4es1078f.ws-eu03.gitpod.io' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource.
If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."
    
Fixed it (temporarely) by installing the chrome extension Moesif Origin & CORS Changer
(https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related)
*/