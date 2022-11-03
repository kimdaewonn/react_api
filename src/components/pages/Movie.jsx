import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=89c1b2839fbe77981253c85111ff2d87&page=1&query=marble"
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setMovies(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieCont moives={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
