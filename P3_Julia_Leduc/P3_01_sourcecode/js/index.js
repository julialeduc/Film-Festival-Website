var movieArray = ["tt4154664", "tt1951266", "tt0245429", "tt4566758", "tt2527336", "tt1217209", "tt1856101", "tt1477834", "tt0092067", "tt0396171", "tt2873282", "tt6565702"];

for(let i=0; i < movieArray.length; i++) {
  getSingleMovie(i);
}

function getSingleMovie(id) {
  $.getJSON("http://www.omdbapi.com/?apikey=d8ccde40&i=" + encodeURI(movieArray[id])).then(function(response){
    $(`.movie--title-${id+1}`).html(response.Title);
    $(`.movie--length-${id+1}`).html(response.Runtime + " | 8-10pm | " + response.Rated);
    $(`.movie--genre-${id+1}`).html(response.Genre);
    $(`.movie--rating-${id+1}`).html(response.imdbRating);
    $(`.movie--info-${id+1}`).html(response.Plot);
  });
}