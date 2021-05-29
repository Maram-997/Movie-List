'use strict'


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
"Little-Women.jpg", 
"Mystic-River.jpg",
"Nocturnal-Animals.jpg", 
"Pancreas.jpg", 
"Shawshank-Redemption.jpg", 
"Shutter-Island.jpg", 
"Your-Name.jpg"];
for( let i =0; i < movie.length; i++){
    new Movies(movie[i]);
}
console.log(moviesArr);

function randomMovie(){
return Math.floor(Math.random() * moviesArr.length)
}
let Container = document.getElementById('imgContainer');
let imgElement = document.getElementById('movieImg')
function renderMovie(){
    let movieIndex = randomMovie();
    imgElement.setAttribute('src', moviesArr[movieIndex].path);
    console.log( moviesArr[movieIndex].path);
}

renderMovie();








let films = [];


function MoviesLocally (filmName, genre, recommendation){
    this.filmName = filmName;
    this.genre = genre;
    this.recommendation = recommendation;
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
console.log(films);
}
