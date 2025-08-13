import React, { useEffect, useRef, useState } from "react";
import  gsap  from "gsap";

const StartPage = () => {

  //시작화면 텍스트 gsap
  const StartText = "Hello,";
  const sliceText = StartText.split("");

  //시작화면 텍스트 useRef생성
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const fourRef = useRef(null);
  const btnRef = useRef(null);
  const imgRef = useRef(null);
  const openMenuRef = useRef(null);
  const closeMenuRef = useRef(null);
  const menuBarRef = useRef(null);

//시작화면 텍스트 효과
  useEffect(() => {
    const tl = gsap.timeline();
    closeMenuRef.current.style.display = "none";
    //첫 번째 텍스트 보여주기
    tl.set(firstRef.current, { display: "block" })
      .fromTo(
        firstRef.current.querySelectorAll("span"),
        {
          opacity: 0,
          scale: 1.6,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: {
            each: 0.12,
            from: "edges",
          },
          ease: "power2.out",
          duration: 0.6,
        }
      )
      //첫 번째 텍스트 사라지기
      .to(
        firstRef.current,
        {
          opacity: 0,
          duration: 0.1,
          delay: 2,
          onComplete: () => {
            firstRef.current.style.display = "none";
          },
        },
        "+-0.5"
      )
      //second 텍스트 보여주기
      .set(secondRef.current, { display: "block", opacity: 1 })
      .set(secondRef.current.querySelector(".second-top"), {
        display: "flex",
        opacity: 1,
      })
      .fromTo(
        secondRef.current.querySelectorAll(".second-top p"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.4, duration: 0.6, ease: "power2.out" }
      )
      tl.fromTo(
        fourRef.current,
        { display: "block", opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "+=0.2" 
      )
    .fromTo(
        btnRef.current,
        { display: "flex", opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4" // 앞 애니메이션 끝나기 전 살짝 겹쳐서 시작
    )
    .fromTo(
        imgRef.current,
        { display: "block", opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
    )
    .fromTo(
        openMenuRef.current,
        { display: "block", opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
    )

      //이미지 무한루프
      .to(imgRef.current, {
        x: -500,
        // y: -10,
        // duration: 1,
        duration: 7,
        repeat: -1,
        // yoyo: true,
        // ease: "power1.inOut"
        ease: "linear",
      });
  }, []);


//메뉴 버튼
//MENU버튼
  const handleOpenBtnClick = ()=>{
    //MENU 버튼 숨기기
    gsap.to(openMenuRef.current,{
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.in",
      onComplete: ()=>{
        openMenuRef.current.style.display = "none";
        closeMenuRef.current.style.display = "block";
        gsap.fromTo(closeMenuRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)"}
        );
      }
    });
  //메뉴 바 나타나기
  menuBarRef.current.style.display = "block";
  gsap.fromTo(menuBarRef.current,
          { opacity: 0, x: "100%" },
          { opacity: 1, x: "0%", duration: 0.4, ease: "power3.out"}
        );
      };
      
//MENU 닫기      
  const handleCloseBtnClick = ()=>{
    //메뉴 바 숨기기
    gsap.to(menuBarRef.current,{
      opacity: 0, 
      x: "100%",
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: ()=>{
        menuBarRef.current.style.display ="none";

    //close버튼 숨기기
     gsap.to(closeMenuRef.current,{
      opacity: 0,
      scale: 0.8,
      duration: 0.25,
      ease: "power2.in",
      onComplete: ()=>{
        closeMenuRef.current.style.display = "none";
        openMenuRef.current.style.display = "block";
        gsap.fromTo(openMenuRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)"}
        );
      }
    });
}
});
  };

  return (
    <div className="container">
      <section className="start-page">
        <div className="first" ref={firstRef} style={{ display: "none" }}>
          <h1 className="start-title">
            {sliceText.map((text, idx) => (
              <span key={idx}>{text}</span>
            ))}
          </h1>
        </div>
        <div className="text-wrap2">
          <div
            className="second"
            ref={secondRef}
            style={{ display: "none", opacity: 0 }}
          >
            <div className="second-top" style={{ display: "none", opacity: 0 }}>
              <p className="one">Hello,</p>
              <p className="two">I'm</p>
              <p className="three">Hyojin</p>
            </div>
            <p
              className="four"
              ref={fourRef}
              style={{ display: "none", opacity: 0 }}
            >
              - Front-End Developer
            </p>
          </div>
          <div
            className="btn-wrap"
            ref={btnRef}
            style={{ display: "none", opacity: 0 }}
          >
            <button className="btn1">My Project</button>
            <button className="btn2">About Me</button>
          </div>
          <img
            src="./image/steack.png"
            ref={imgRef}
            style={{ display: "none", opacity: 0 }}
          />          
        </div>

{/* 하단 메뉴버튼 */}        
      <div className="menu-wrap">
        <div className="menuBtn-wrap">
          <button 
            className="menu" 
            ref={openMenuRef} 
            onClick={handleOpenBtnClick}
          >MENU</button>
          <button 
            className="menu" 
            ref={closeMenuRef} 
            onClick={handleCloseBtnClick}
          >CLOSE</button>
        </div>

{/* 하단 메뉴버튼 클릭 시 메뉴바 */}
        <div className="menu-bar" ref={menuBarRef}
              style={{ display: "none", opacity: 0 }}>
          <ul>
            <li>ABOUT ME</li>
            <li>TOOLS</li>
            <li>PROJECT</li>
          </ul>
        </div>
      </div>

      </section>
      
      

    </div>
  );
};

export default StartPage;
