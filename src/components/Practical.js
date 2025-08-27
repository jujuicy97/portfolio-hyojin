import { useEffect, useRef } from "react";
import Practice from "../json/Practical.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Practical = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    const wrap = wrapRef.current;
    const scrollWidth = wrap.scrollWidth;

    // 초기 위치
    gsap.set(wrap, { x: 0 });

    const animation = gsap.to(wrap, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".practical-section",
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        // markers: true,
        onLeave: () => gsap.set(wrapRef.current, { x: -scrollWidth }),
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="practical-section">
      <h2 className="practical-title">
        <span className="text1">PRACTICAL</span>
        <span className="text2">PUBLISHING</span>
      </h2>
      <h2 className="practical-txt">
        This is the result of consistent practice. Let’s create something together!
      </h2>
      <div className="practical">
        <div className="card-wrap" ref={wrapRef}>
          {Practice.map((card) => (
            <div
              className="card"
              key={card.id}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/image/Practical/gradient.png)`,
              }}
            >
              <img src={process.env.PUBLIC_URL + card.image} alt={card.title} />
              <div className="card-top">
                <h3>{card.title}</h3>
                <p>{card.techStack}</p>
              </div>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Practical;
