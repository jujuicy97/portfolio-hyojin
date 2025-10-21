//startPage의 스크롤 효과 컴포넌트

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapScroll = ({page2Ref, page3Ref}) => {

  useEffect(() => {
    if (!page2Ref.current || !page3Ref.current) return;
    // page2
    const st2 = gsap.to(page2Ref.current, {
      rotation: -15,
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