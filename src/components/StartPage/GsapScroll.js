//startPage의 스크롤 효과 컴포넌트

import { useContext, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollContext from "./ScrollContext";

gsap.registerPlugin(ScrollTrigger);

const GsapScroll = () => {
  //원래 ref는 하나의 dom만 저장, 페이지가 2개여서 2개를 담을 변수dom 배열을 생성
  //useContext를 활용하여 gsapscroll로 바로 넘겨줌(app.js를 거칠 필요가 없음)
  const {page2Ref, page3Ref} = useContext(ScrollContext);

  useEffect(() => {
    if (!page2Ref.current || !page3Ref.current) return;
    // page2
    const st2 = gsap.to(page2Ref.current, {
      rotation: -10,
      scale: 0.85,
      scrollTrigger: {
        trigger: page2Ref.current,
        start: "top top",
        end: () => `+=${window.innerHeight}`,
        scrub: 1,
        pin: true,
        pinSpacing: false,
        onLeave: () => gsap.set(page2Ref.current, { display: "none" }),
        // markers: true
      },
    });
  
    // page3
    const st3 = gsap.fromTo(
      page3Ref.current,
      { y: "100%", scale: 0.4, rotation: 2 },
      { y: "0%", scale: 1, rotation: 0, ease: "none",
        scrollTrigger: {
          trigger: page2Ref.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: true,
        },
      }
    );
  
    return () => {
      st2.scrollTrigger?.kill();
      st3.scrollTrigger?.kill();
    };
  }, [page2Ref, page3Ref]);

    return null;
    };

export default GsapScroll;