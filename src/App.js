import { useRef } from "react";
import "./App.scss";
import AboutMe from "./components/AboutMe";
import StartPage from "./components/StartPage/StartPage";
import Skill from "./components/Skill";
import MainProject from "./components/MainProject/MainProject";
import CloneProject from "./components/CloneProject";
import Practical from "./components/Practical";
import EndPage from "./components/EndPage";
import GsapScroll from "./components/StartPage/GsapScroll";

const App = () => {
  //GsapScroll 효과
  //원래 ref는 하나의 dom만 저장, 페이지가 2개여서 2개를 담을 변수dom 배열을 생성
  const page2Ref = useRef();
  const page3Ref = useRef();

  //메뉴버튼 섹션 이동 함수(startPage에 넘겨주기)
  const aboutRef = useRef();
  const toolsRef = useRef();
  const projectRef = useRef();

  const handleMenuScroll = (i) => {
    const ref = [aboutRef, toolsRef, projectRef];
    ref[i].current.scrollIntoView({ behavior: "smooth" });
  };

  //ref는 한개만 적용시킬 수 있어서, 2개를 혼합하여 하나의 변수 생성
  const setRef1 = (el)=>{
    page2Ref.current = el; //gsap용
    aboutRef.current = el; //메뉴 이동용
  };
  const setRef2 = (el2)=>{
    page3Ref.current = el2; //gsap용
    toolsRef.current = el2; //메뉴 이동용
  }

  return (
    <>
      <div className="component-wrap">
        <StartPage onMenuClick={handleMenuScroll} />
        <section ref={setRef1}>
          <AboutMe />
        </section>
        <section ref={setRef2}>
          <Skill />
        </section>
        <section ref={projectRef}>
          <MainProject />
        </section>
        <CloneProject />
        <Practical />
        <EndPage />
      </div>
      <GsapScroll page2Ref={page2Ref} page3Ref={page3Ref} />
    </>
  );
};

export default App;
