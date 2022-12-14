var searchInput = document.querySelector('.search');
var cardWrapper = document.querySelector('main');





function displayMatches(matches) {
  cardWrapper.innerHTML = '';


  if (!matches.length === 0) {
    noMatch();
  }


  for (var matchObj of matches) {
    cardWrapper.insertAdjacentHTML('beforeend','
      < div class= "movie-card" style = "background-image": linear - gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ matchObj.movie_image }); ">
        < h3 > ${ matchObj.title }</h3 >
  <p>${matchesOb.description}</p>
  <a href="${matchObj.imbd_link}" target="_blank">View More Info Here</a>
</div >
      ');
  }
}


function fetchMovies(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.toLowerCase().trim();

  if (keyCode === 13 && searchText) {
    var matches = [];

    for (var movieObj of movieData) {

      if (movieObj.title.toLowerCase().includes(searchText)) {
        matches.push(movieObj);

      }
    }

    searchInput.value = '';
    displayMatches(matches);
  }
}


function init() {
  searchInput.addEventListener('keydown', fetchMovies);
}

init();







/* <div class="movie-card">
  <h3>Movie Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  <a href="#">View More Info Here</a>
</div> */