const movie = m;
            console.log($(this).data("imdbid"));
            let filterMovie = movie.filter((element) => {
              element.imdbID == $(this).data("imdbid");
              let movieDetail = `<div class="container-fluid">
                                  <div class="row">
                                    <div class="col-md-3">
                                      <img src="${element.Poster}" class="img-fluid" />
                                    </div>
                                    <div class="col-md">
                                      <ul class="list-group">
                                        <li class="list-group-item"><h4>${element.Title} (${element.Year})</h4></li>
                                        <li class="list-group-item">
                                          <strong>Director :</strong> ${element.Director}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Actors :</strong> ${element.Actors}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Writer :</strong> ${element.Writer}
                                        </li>
                                        <li class="list-group-item">
                                          <strong>Plot :</strong><br />
                                          ${element.Plot}
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>`;
              $(".modal-body").html(movieDetail);