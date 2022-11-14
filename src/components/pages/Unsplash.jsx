import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=MQTjZPliVmEwJE8bRXeYPG83q1gT78-3AjOvYV4HNQk&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=MQTjZPliVmEwJE8bRXeYPG83q1gT78-3AjOvYV4HNQk&query=seoul&count=30"
    )
      .then((response) => response.json())
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=MQTjZPliVmEwJE8bRXeYPG83q1gT78-3AjOvYV4HNQk&count=10"
    )
      .then((response) => response.json())
      .then((result) => setRandom(result))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "referece api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};
export default Unsplash;
