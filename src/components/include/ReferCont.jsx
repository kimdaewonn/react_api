import React from 'react';



const referInfo = [
    {
        num : 1,
        name : "background",
        desc : "background는 배경ㅇㅇ",
        star : "★★★☆☆",
    },
    {
        num : 2,
        name : "a",
        desc : "a는 다른 페이지 이동을 설정합니다.",
        star : "★★★☆☆",
    },
    {
        num : 3,
        name : "abbr",
        desc : "abbr는 준말 또는 머리글자를 나타냅니다.",
        star : "★★★☆☆",
    },
    {
        num : 4,
        name : "body",
        desc : "body는 문서의 내용을 나타냅니다.",
        star : "★★★☆☆",
    },
    {
        num : 5,
        name : "br",
        desc : "br은 줄바꿈을 합니다.",
        star : "★★★☆☆",
    },
    {
        num : 6,
        name : "button",
        desc : "button은 클릭 가능한 버튼을 나타냅니다.",
        star : "★★★☆☆",
    },
    {
        num : 7,
        name : "caption",
        desc : "caption은 표의 설명 또는 제목을 나타냅니다",
        star : "★★★☆☆",
    },
    {
        num : 8,
        name : "colgroup",
        desc : "colgroup은 표의 열을 묶는 그룹을 정의합니다. ",
        star : "★★★☆☆",
    },
    {
        num : 9,
        name : "data",
        desc : "data는 주어진 콘텐츠를 기계가 읽을 수 있는 해석본과 연결합니다.",
        star : "★★★☆☆",
    },
    {
        num : 10,
        name : "dfn",
        desc : "dfn은 현재 맥락이나 문장에서 정의하고 있는 용어를 나타냅니다.",
        star : "★★★☆☆",
    },
];

const ReferText = ({num, name, desc, star}) =>{
    return (
        <li>
        <a href="/">
            <span className='num'>{num}</span>
            <span className='name'>{name}</span>
            <span className='desc'>{desc}</span>
            <span className='star'>{star}</span>
        </a>
    </li>
    )
}

const ReferCont = () => {
  return (
    <section className='cont__refer'>
        <div className="container">
            <div className="refer__inner">
                <h2>CSS</h2>
                <ul className='refer__list'>
                    {referInfo.map((info) => (
                        <ReferText
                            num  = {info.num}
                            name = {info.name}
                            desc = {info.desc}
                            star = {info.star}
                            />
                    ))}
                    {/* <li>
                        <a href="/">
                            <span className="num">01</span>
                            <span className="name">background</span>
                            <span className="desc">백그라운드 속성을 일괄적으로 설정합니다.</span>
                            <span className="star">★★★★★</span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ReferCont;