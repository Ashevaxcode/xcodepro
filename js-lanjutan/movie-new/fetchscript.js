//fetch refactoring
const searchButton = document.querySelector(".search-button");
const inputKeyword = document.querySelector(".input-keyword");
const movieContainer = document.querySelector(".movie-container");

//ketika tombol search di klik
searchButton.addEventListener("click", async function () {
  const movies = await getMovies(inputKeyword.value);
  updateUI(movies);
});

//movie detail
//harus menggunakan event binding yaitu kita bisa memberikan event kepada element yang tadinya belum ada tapi event nya masih bisa berjalan
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    console.log(`ok ${e.target.dataset.imdbid}`);
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdb) {
  return fetch(`http://www.omdbapi.com/?apikey=571aae06&i=${imdb}`)
    .then((response) => response.json())
    .then((e) => e);
}

function updateUIDetail(e) {
  const movieDetail = showMovieDetail(e);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}
//fetch data
function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=571aae06&s=${keyword}`)
    .then((response) => response.json())
    .then((response) => response.Search);
  // .catch((err) => console.log(err));
}

function updateUI(mv) {
  let cards = "";
  mv.forEach((mv) => {
    cards += showCards(mv);
  });
  movieContainer.innerHTML = cards;
}
//fungsi tampil cards
function showCards(mv) {
  return `<div class="col-md-4 my-3">
                  <div class="card">
                    <img src="${mv.Poster}" class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">${mv.Title}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${mv.Year}</h6>
                      <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
                      data-bs-target="#movieDetailModal" data-imdbid="${mv.imdbID}">Show Details</a>
                    </div>
                  </div>
                </div>`;
}

//show movie detail
function showMovieDetail(e) {
  return `<div class="container-fluid">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <img src="${e.Poster}" class="img-fluid" />
                                    </div>
                                    <div class="col-md">
                                      <ul class="list-group">
                                        <li class="list-group-item"><h4>${e.Title} (${e.Year})</h4></li>
                                        <li class="list-group-item">
                                          <strong>Director :</strong> ${e.Director}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Actors :</strong> ${e.Actors}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Writer :</strong> ${e.Writer}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Plot :</strong><br />
                                          ${e.Plot}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>`;
}
