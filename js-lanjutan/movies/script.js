$.ajax({
  url: "http://www.omdbapi.com/?apikey=571aae06&s=harry potter",

  success: (results) => {
    const movies = results.Search;
    console.log(movies);
    // const title = document.querySelector(".card-title");
    // const year = document.querySelector(".card-subtitle");
    // const poster = document.querySelector(".card-img-top");

    let cards = "";
    movies.forEach((mv) => {
      cards += showCards(mv);

      // title.innerHTML = mv.Title;
      // year.innerHTML = mv.Year;
      // poster.setAttribute("src", mv.Poster);
    });
    //ini menggunakan cara biasa
    // const row = document.querySelectorAll(".row")[1];
    // row.innerHTML = cards;

    //menggunakan jquery untuk memasukkan data ke dalam row
    //jquery cari element yang memiliki class movie container kemudian isi dengan string cards
    $(".movie-container").html(cards);

    //ketika tombol modal button di klik
    $(".modal-detail-button").on("click", function () {
      // console.log($(this).data("imdbid"));
      $.ajax({
        url:
          "http://www.omdbapi.com/?apikey=571aae06&i=" + $(this).data("imdbid"),

        success: (m) => {
          const movieDetail = showMovieDetail(m);

          //masukkan ke dalam modal body
          $(".modal-body").html(movieDetail);
        },

        error: (e) => {
          console.log(e.responseText);
        },
      });
    });
  },

  //jika error
  error: (e) => {
    console.log(e.responseText);
  },
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

function showMovieDetail(m) {
  return `<div class="container-fluid">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <img src="${m.Poster}" class="img-fluid" />
                                    </div>
                                    <div class="col-md">
                                      <ul class="list-group">
                                        <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                        <li class="list-group-item">
                                          <strong>Director :</strong> ${m.Director}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Actors :</strong> ${m.Actors}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Writer :</strong> ${m.Writer}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Plot :</strong><br />
                                          ${m.Plot}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>`;
}
