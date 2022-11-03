import React from "react";
const ReferText = ({ num, title, desc, star }) => {
  return (
    <li>
      <a href="/">
        <span className="num">{num}</span>
        <span className="name">{title}</span>
        <span className="desc">{desc}</span>
        <span className="star">{star}</span>
      </a>
    </li>
  );
};
const ReferCont = ({ references }) => {
  return (
    <section className="cont__refer">
      <div className="container">
        <div className="refer__inner">
          <h2>HTML</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                title={refer.title}
                num={refer.num}
                desc={refer.desc}
                star={refer.descStar}
              />
            ))}
          </ul>

          <h2>CSS</h2>
          <ul className="refer__list">
            {references.map((refer, idx) => (
              <ReferText
                key={idx}
                title={refer.title}
                num={refer.num}
                desc={refer.desc}
                star={refer.descStar}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ReferCont;
