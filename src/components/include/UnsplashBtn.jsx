import React from "react";

// const unsplashInfo = [
//   { text: "spring" },
//   { text: "summer" },
//   { text: "fall" },
//   { text: "winter" },
//   { text: "soccer" },
//   { text: "space" },
//   { text: "pretty" },
// ];

// const UnsplashText = ({ text }) => {
//   return { text };
// };

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("spring");
  };
  const onClick2 = () => {
    onSearch("summer");
  };
  const onClick3 = () => {
    onSearch("fall");
  };
  const onClick4 = () => {
    onSearch("winter");
  };
  const onClick5 = () => {
    onSearch("soccer");
  };
  const onClick6 = () => {
    onSearch("space");
  };
  const onClick7 = () => {
    onSearch("pretty");
  };

  // e.target.innerHTML

  return (
    <div className="unsplash__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
          spring
        </button>
        <button type="submit" onClick={onClick2}>
          summer
        </button>
        <button type="submit" onClick={onClick3}>
          fall
        </button>
        <button type="submit" onClick={onClick4}>
          winter
        </button>
        <button type="submit" onClick={onClick5}>
          soccer
        </button>
        <button type="submit" onClick={onClick6}>
          space
        </button>
        <button type="submit" onClick={onClick7}>
          pretty
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
