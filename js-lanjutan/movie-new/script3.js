//fetch refactoring
const searchButton = document.querySelector(".search-button");
const inputKeyword = document.querySelector(".input-keyword");
const movieContainer = document.querySelector(".movie-container");
//ketika tombol search di klik
searchButton.addEventListener("click", async function () {
  //jalankan fungsi fetch

  const keyword = stringCapitalize();

  const movies = await getMovies();
  //filter movie
  const movie = filterMovies(movies, keyword);
  updateUI(movie);
});

//fetch data
function getMovies() {
  return fetch("../movie/data/movie.json")
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.log(err));
}

//fungsi filter movies
function filterMovies(movies, keyword) {
  let cards = "";
  movies
    .filter((item) => item.Title.includes(keyword))
    .forEach((mv) => {
      cards += showCards(mv);
    });
  return cards;
}

//updateUI
function updateUI(cards) {
  //   const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

//fungsi merubah string to capitalize
function stringCapitalize() {
  let stringKey = inputKeyword.value;
  let cap = stringKey.charAt(0).toUpperCase() + stringKey.slice(1);
  return cap;
}

//menampilkan detail movie tetapi functionnya berada di luar atau independen
//harus menggunakan event binding yaitu kita bisa memberikan event kepada element yang tadinya belum ada tapi event nya masih bisa berjalan
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    console.log(`ok ${e.target.dataset.imdbid}`);
    const imdbid = e.target.dataset.imdbid;
    getMovieDetail(imdbid);
  }
});

//fungsi get movie detail menggunakan async await
async function getMovieDetail(imdbid) {
  const movie = await getMovies();
  //   return movie.filter((el) => imdbid == el.imdbID).map((e) => e);
  return movie
    .filter((el) => imdbid == el.imdbID)
    .map((e) => {
      const movieDetail = showMovieDetail(e);
      const modalBody = document.querySelector(".modal-body");
      modalBody.innerHTML = movieDetail;
    });
}

//update detail
// function updateUIDetail(m) {
//   const movieDetail = showMovieDetail(m);
//   const modalBody = document.querySelector(".modal-body");
//   modalBody.innerHTML = movieDetail;
// }

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
