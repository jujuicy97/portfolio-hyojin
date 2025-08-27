import { useEffect, useRef } from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill from "./components/Skill";
import MainProject from "./components/MainProject";
import CloneProject from "./components/CloneProject";
import Practical from "./components/Practical";
import EndPage from "./components/EndPage";


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  //원래 ref는 하나의 dom만 저장, 페이지가 2개여서 2개를 담을 변수dom 배열을 생성
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);

  useEffect(() => {
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
        }
      }
    );
  
    return () => {
      st2.scrollTrigger?.kill();
      st3.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="component-wrap">
        <StartPage/>
      <section  ref={page2Ref}>
        <AboutMe />
      </section>
      <section  ref={page3Ref}>
        <Skill />
      </section>
      <MainProject />
      <CloneProject />
      <Practical />
      <EndPage />
    </div>
  );
};

export default App;
