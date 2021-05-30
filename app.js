'use strict'
// random img on a DIV

let moviesArr = [];

function Movies(movieName){
    this.movieName = movieName.split('.')[0];
    this.genre = 0;
    this.rate = 0;
    this.path = 'img/' + movieName;
    moviesArr.push(this);
}
let movie = ["atonement.jpg", 
"Bucket-List.jpg", 
"Devil.jpg", 
"Little-Woman.jpg", 
"Mystic-River.jpg",
"Nocturnal-Animals.jpg", 
"Pancreas.jpg", 
"Shawshank-Redemption.jpg", 
"Shutter-Island.jpg", 
"Your-Name.jpg"];
for( let i =0; i < movie.length; i++){
    new Movies(movie[i]);
}
// console.log(moviesArr);

function randomMovie(){
return Math.floor(Math.random() * moviesArr.length)
}
let Container = document.getElementById('imgContainer');
let imgElement = document.getElementById('movieImg')
function renderMovie(){
    let movieIndex = randomMovie();
    imgElement.setAttribute('src', moviesArr[movieIndex].path);
}

renderMovie();

// ends HERE




// Add the input Movies from the form to LOCAL STORAGE

let films = [];


function MoviesLocally (filmName, genre, recommendation){
    this.filmName = filmName;
    this.genre = genre;
    this.recommendation = recommendation + ' out of Five';
films.push(this);
}



let formElement = document.getElementById('form');
formElement.addEventListener('submit', addingName);

function addingName(event){
event.preventDefault();
let filmNameIndex = event.target.name.value;
let genreIndex = event.target.genre.value;
let recommendationIndex = document.getElementById('recommendation').value;

new MoviesLocally (filmNameIndex, genreIndex, recommendationIndex);
// console.log( typeof filmNameIndex);
// console.log( typeof genreIndex);
// console.log( typeof recommendationIndex);

// already as sting
function addFilm(){
    localStorage.setItem(filmNameIndex, "filmName");
    
    filmNameIndex = "";

}
addFilm();


function addGenre(){
    localStorage.setItem(genreIndex, "Genre");

    genreIndex ="";

}
addGenre();



function addRecommendation(){
    localStorage.setItem(recommendationIndex, "Recommendation");1

    recommendationIndex = "";

}
addRecommendation();




}
 
// ends HERE

// Generate the input Movies from the Form as table
let tableElement = document.getElementById('tableEl');
let trEl = document.getElementById('tr'); 
function tableFill(){
    for(let i = 0; i <films.length; i++) {

        let trEl1 = document.createElement('tr');
        trEl1.appendChild('trEl');
        let tdEl = document.createElement('td')
        tdEl.appendChild('trEl');
        tdEl.textContent =films[i];

    }
}
tableFill();
