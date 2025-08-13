import { useEffect, useRef } from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skill from "./components/Skill";
import MainProject from "./components/MainProject";
import CloneProject from "./components/CloneProject";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  //원래 ref는 하나의 dom만 저장, 페이지가 2개여서 2개를 담을 변수dom 배열을 생성
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);

  useEffect(()=>{
    //2번째 페이지 스크롤
      const p2 = gsap.timeline({
          scrollTrigger: {
            trigger: page2Ref.current,
            start: "top top", 
            end: "bottom 80",  
            scrub: 1,
            pin: true,
            pinSpacing: false
          }
        });
      //2번째 페이지 스크롤 시 화면 효과
        p2.fromTo(
          page2Ref.current,
          { rotation:0 , scale: 1 },
          {rotation: -15, scale: 0.85, ease: "power3.out"}
        )
      //3번재 페이지 등장
        p2.fromTo(
        page3Ref.current,
        { y: "100%", scale: 0.4, rotation: 2 },
        { y: "0%", scale: 1, rotation: 0, ease: "none"},
          0
      );
      return ()=>{
        p2.scrollTrigger?.kill();
      }
    },[]);

  return (
    <div className="component-wrap">
      <section>
        <StartPage/>
      </section>
      <section ref={page2Ref} >
        <AboutMe />
      </section>
      <section ref={page3Ref} >
        <Skill />
      </section>
      <MainProject />
      <CloneProject />
    </div>
  );
};

export default App;
