import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";

function UnsplashRan({ random }) {
  return (
    <li>
      <a href={`https://unsplash.com/photos/${random.id}`}>
        <img src={random.urls.regular} alt={random.urls.alt_description} />
      </a>
    </li>
  );
}

const UnsplashSlider = ({ random }) => {
  return (
    <section className="movie__popular">
      <div className="container">
        <div className="unsplash__inner">
          <h2>Unsplash Random</h2>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <UnsplashRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UnsplashSlider;
