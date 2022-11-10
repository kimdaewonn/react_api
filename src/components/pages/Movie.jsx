import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contact from "../layout/Contact";
import MovieSearch from "../include/MovieSearch";
import MovieList from "../include/MovieList";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=89c1b2839fbe77981253c85111ff2d87&query=${query}`
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=89c1b2839fbe77981253c85111ff2d87&language=en-US&page`
    )
      .then((response) => response.json())
      .then((result) => setPopular(result.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=89c1b2839fbe77981253c85111ff2d87&language=ko-KOR&page=1&include_adult=false&query=마블"
    )
      .then((response) => response.json())
      .then((result) => setMovies(result.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["movie", "reference api"]} />
        <MovieList onPopular={popular} />
        <MovieSearch onSearch={search} />
        <MovieCont movies={movies} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Movie;
