//get search button
const searchButton = document.querySelector(".search-button");
//klik search
searchButton.addEventListener("click", function () {
  fetch("../movie/data/movie.json")
    .then((response) => response.json())
    .then((response) => {
      //get input keyword for search
      console.log(response);
      const inputKeyword = document.querySelector(".input-keyword").value;
      const movies = response;
      let cards = "";

      movies
        .filter((item) => item.Title.includes(`${inputKeyword}`))
        .forEach((mv) => {
          cards += showCards(mv);
        });
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      //when button detail on click
      const modalDetailButton = document.querySelectorAll(
        ".modal-detail-button"
      );
      //get button detail
      modalDetailButton.forEach((btn) => {
        btn.addEventListener("click", function () {
          fetch("../movie/data/movie.json")
            .then((response) => response.json())
            .then((response) => {
              const movie = response;
              movie
                .filter((el) => btn.dataset.imdbid == el.imdbID)
                .map((e) => {
                  const movieDetail = showMovieDetail(e);
                  const modalBody = document.querySelector(".modal-body");
                  modalBody.innerHTML = movieDetail;
                });
            });
        });
      });
    });
});

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
