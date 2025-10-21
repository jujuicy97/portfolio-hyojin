import { useRef } from "react";
import { gsap } from "gsap/gsap-core";

const Skill = () => {
  const skillRef = useRef(null);



    //마우스를 올렸을 때 호출 함수
    const handleMouseHover = ()=>{
      //대상, {비틀기, 지속시간}
      gsap.to(skillRef.current, { 
        rotateX: 0,  // X축으로 살짝 회전
        rotateY: 5,   // Y축으로 살짝 회전
        scale: 1.05,   // 살짝 확대해서 튀어나온 느낌
        duration: 0.5,
        transformPerspective: 500, // 3D 효과 깊이
        transformOrigin: "center center",
      });
    }
    //마우스 나갈 때 호출 함수
    const handleMouseLeave = ()=>{
      //원래 상태로 되돌리기
      gsap.to(skillRef.current, { 
        
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        transformPerspective: 500,
        transformOrigin: "center center",
      
      });
    }

  
  return (
    <div className="skills-wrap">
      <div 
        className="skills"
        ref={skillRef}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}  
      >
        <div className="skills-top">
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills1.png"} alt="skill1" />
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills2.png"} alt="skill2" />
        </div>
        <div className="skills-bottom">
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills3.png"} alt="skill3" />
        </div>
        
      </div>
      <img src={process.env.PUBLIC_URL + "/image/Skills/skills-tools.png"} alt="skills-tools" />
    </div>
  );
};

export default Skill;
