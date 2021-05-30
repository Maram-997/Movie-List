'use strict'

let formElement = document.getElementById('form');
formElement.addEventListener('submit', addingName);
let films = [];


function MoviesLocally (filmName, genre, recommendation){
    this.filmName = filmName;
    this.genre = genre;
    this.recommendation = recommendation + ' out of Five';
films.push(this);
}
// Generate the input Movies from the Form as table
let tableElement = document.getElementById('tableEl');
let filmNameIndex;
let genreIndex;
let recommendationIndex;
function addingName(event){
    event.preventDefault();
     filmNameIndex = event.target.name.value;
     genreIndex = event.target.genre.value;
     recommendationIndex = document.getElementById('recommendation').value;
    new MoviesLocally (filmNameIndex, genreIndex, recommendationIndex);
    tableFill();
    addToLocalStorage();
    console.log(films);

}
function tableFill(){
    let trEl1 = document.createElement('tr');
        tableElement.appendChild(trEl1);

        let tdEl = document.createElement('td')
        trEl1.appendChild(tdEl);
        tdEl.textContent = filmNameIndex;
        // console.log(films[i].filmName);
        
        let tdEl1 = document.createElement('td')
        trEl1.appendChild(tdEl1);
        tdEl1.textContent = genreIndex;

        let tdEl2 = document.createElement('td')
        trEl1.appendChild(tdEl2);
        tdEl2.textContent =recommendationIndex ;
    
}
console.log(typeof films);
function addToLocalStorage()
{
let data = JSON.stringify(films);
localStorage.setItem('film', data);
}




    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
// let moviesArr = [];

// function Movies(movieName, genre, recommendation){
//     this.movieName = movieName.split('.')[0];
//     this.genre = genre;
//     this.recommendation = recommendation;
//     this.path = 'img/' + movieName;
//     moviesArr.push(this);
// }
// let movie = ["atonement.jpg", 
// "Bucket-List.jpg", 
// "Devil.jpg", 
// "Little-Woman.jpg", 
// "Mystic-River.jpg",
// "Nocturnal-Animals.jpg", 
// "Pancreas.jpg", 
// "Shawshank-Redemption.jpg", 
// "Shutter-Island.jpg", 
// "Your-Name.jpg"];
// for( let i =0; i < movie.length; i++){
//     new Movies(movie[i]);
// }
// // console.log(moviesArr);

// function randomMovie(){
// return Math.floor(Math.random() * moviesArr.length)
// }
// let Container = document.getElementById('imgContainer');
// let imgElement = document.getElementById('movieImg')
// function renderMovie(){
//     let movieIndex = randomMovie();
//     imgElement.setAttribute('src', moviesArr[movieIndex].path);
// }

// renderMovie();

    
    