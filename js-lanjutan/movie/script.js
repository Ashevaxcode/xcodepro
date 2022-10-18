$(".search-button").on("click", function () {
  $.ajax({
    // url:
    //   "http://www.omdbapi.com/?apikey=571aae06&s=" + $(".input-keyword").val(),

    url: "./data/movie.json",

    success: (results) => {
      const movies = results;
      const keyword = document.querySelector(".input-keyword");

      let cards = "";
      console.log(
        movies.filter(function (item) {
          return item.Title.includes(`${keyword.value}`);
        })
      );
      movies
        .filter((item) => item.Title.includes(`${keyword.value}`))
        .forEach((mv) => {
          // cards += showCards(mv);
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
          // url:
          //   "http://www.omdbapi.com/?apikey=571aae06&i=" +
          //   $(this).data("imdbid"),
          url: "./data/movie.json",
          success: (m) => {
            m.filter((el) => $(this).data("imdbid") == el.imdbID).map((e) => {
              const movieDetail = showMovieDetail(e);
              $(".modal-body").html(movieDetail);
            });

            // console.log(filterMovie);

            //const movieDetail = showMovieDetail(m);

            //masukkan ke dalam modal body
            // $(".modal-body").html(movieDetail);
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
