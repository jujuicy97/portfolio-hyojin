import { useEffect, useRef } from "react";
import { gsap } from "gsap";


const EndPage = () => {

//end-page item들이 차례대로 커졌다가 원상태로 복귀
const endRef = useRef(null);

useEffect(()=>{
  if (!endRef.current) return;

  const item = endRef.current.querySelectorAll(".end-text > *");

  gsap.fromTo(
    item,
    { scale: 1.3, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: endRef.current,
        start: "top 50%", 
        end: "bottom 10%",
        // pin: true,        
        toggleActions: "play reverse play reverse",
        // markers: true
      }
    }
  );
  console.log(endRef.current);
}, []);

  return (
    <div className="end-page" ref={endRef}>
      <div className="end-wrap">
        <div className="end-text">
          <h2>Thank you!</h2>
          <p>
            배우는 과정에 있지만, 맡은 일엔 늘 책임을 다하려 노력합니다.
            <br />
            주어진 역할에 최선을 다하며, 프로젝트 경험을 통해 실력을 키워가고
            있습니다.
            <br />
            함께 배우고 나누며 발전할 수 있는 환경을 소중히 생각합니다.
          </p>
          <div className="mail">
            <p>
              <a href="mailto:jujuicy97@gmail.com">→ jujuicy97@gamil.com</a>
            </p>
            <p>
              <a
                href="https://github.com/jujuicy97"
                // href="https://github.com/jujuicy97/jujuicy97.github.io"
                target="_blank"
              >
                → GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
