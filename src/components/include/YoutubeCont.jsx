import React from "react";

const YoutubeItem = ({ youtube }) => {
  return (
    <li>
      <img src={youtube.snippet.thumbnails.medium.url} alt="" />
    </li>
  );
};

const YoutubeCont = ({ youtubes }) => {
  return (
    <section className="cont__unsplash">
      <div className="container">
        <div className="unsplash__inner">
          <ul>
            {youtubes.map((youtube, index) => (
              <YoutubeItem key={index} youtube={youtube} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
