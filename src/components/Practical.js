import { useEffect, useRef } from "react";
import Practice from "../json/Practical.json";
import { gsap } from "gsap";

const Practical = () => {
//가로 스크롤
const sectionRef = useRef(null);
const wrapRef = useRef(null);

useEffect(()=>{
  if (!wrapRef.current || !sectionRef.current) return;

  const scrollWidth = wrapRef.current.scrollWidth - window.innerWidth;

  const row = gsap.to(wrapRef.current,{
    x: -scrollWidth,
    ease: "none",
    scrollTrigger:{
      trigger: wrapRef.current,
      start: "top top",
      end: `+=${scrollWidth}`,
      pin: true,
      pinSpacing: true,
      scrub: true,
      markers: true,
      // pinReparent: true
    }
  });

  return (()=>{
    row.scrollTrigger?.kill();
  })
},[])


  return (
    <div className="practical" ref={sectionRef}>
      <h2 className="practical-title">
        <span>PRACTICAL</span>
        <span>PUBLISHING</span>
      </h2>
      <h2 className="practical-txt">
        This is the result of consistent practice. Let’s create something
        together!
      </h2>
      {/* <img src={process.env.PUBLIC_URL + "/image/Practical/gradient.png"} /> */}
      <div className="card-wrap" ref={wrapRef}>
        {Practice.map((card) => {
          return (
            <div className="card" key={card.id} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/image/Practical/gradient.png)`}}>
            <img src={process.env.PUBLIC_URL + card.image} alt={card.image}/>
              <div className="card-top">
                <h3>{card.title}</h3>
                <p>{card.techStack}</p>
              </div>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Practical;
