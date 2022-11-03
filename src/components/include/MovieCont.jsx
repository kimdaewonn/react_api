import React from "react";
function MovieBox(props) {
  return <div>{props}</div>;
}
const MovieCont = (props) => {
  return (
    <section className="cont_movie">
      <div className="container">
        <div className="movie__inner">
          <div className="movie_box">
            {props.movie.map((movie, idx) => (
              <MovieBox key={idx} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MovieCont;
