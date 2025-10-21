import { useRef, useState } from "react";
import Modal from "./Modal";
import { type } from "@testing-library/user-event/dist/type";
import Mainjson from "../../json/MainProject.json";
import { gsap } from "gsap/gsap-core";

const MainProject = () => {
  const [selectProject, setSelectProject] = useState(null);

  const openModal = (project) => {
    //모달창 슬라이드가 없으면 클릭 무시(모달창 없는 프로젝트 카드는 클릭 자체가 안되게 하기)
    if (!project.slide || project.slide.length === 0) return;
    setSelectProject(project);
  };

  const closeModal = () => {
    setSelectProject(null);
  };

  //gsap 효과
  const gsapRef = useRef(null);

  return (
    <div className="main-project">
      <h1>
        <span className="txt1">WORK & </span>
        <span className="txt2">PROJECT</span>
      </h1>
      <div className="projects">
        {Mainjson.map((list, i) => (
          <div
            key={i}
            className={`project-card ${list.name.toLowerCase()}`}
            onClick={() => list.interactive && openModal(list)}
            //각 카드별 gsap효과
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1.03,
                duration: 0.3,
                ease: "power1.out",
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
              });
            }}
          >
            {/* 모달창 */}
            {list.interactive ? (
              <div className="list-info">
                <img
                  src={process.env.PUBLIC_URL + list.image[0]}
                  alt={list.name}
                />
              </div>
            ) : (
              <div className="list-info">
                <img
                  src={process.env.PUBLIC_URL + list.image[1]}
                  alt={list.name}
                />
                <p>{list.description}</p>
              </div>
            )}
            {/* 깃허브와 사이트 링크 버튼 */}
            <div className="btn-wrapper">
              {list.github && (
                <a
                  href={list.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  GITHUB
                </a>
              )}
              {list.site && (
                <a
                  href={list.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  SITE
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {selectProject && <Modal project={selectProject} onClose={closeModal} />}
    </div>
  );
};

export default MainProject;
