import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

function MoviePopular(props) {
  return (
    <li>
      <a href={`https://www.themoviedb.org/movie/${props.movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <em>
          <span className="title">{props.movie.title}</span>
          {/* <span className="star">{props.movie.vote_average}</span> */}
          <span className="star">{props.index + 1}위</span>
        </em>
      </a>
    </li>
  );
}
const MovieList = (props) => {
  return (
    <section className="cont__movie">
      <div className="container">
        <div className="movie__pop">
          <div className="movie__popname">인기 순위</div>

          <ul>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              initialSlide="5"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              {props.onPopular.map((onPopular, index) =>
                index < 10 ? (
                  <SwiperSlide key={index}>
                    <MoviePopular key={index} movie={onPopular} index={index} />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default MovieList;
