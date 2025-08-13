
const MainProject = () => {
  return (
    <div className="main-project">
      <h1><span className="txt1">WORK & </span><span className="txt2">PROHECT</span></h1>
      <div className="projects">

{/* dreamland */}
          <div className="project-card">
            <div className="dreamland">
              <img src="./image/MainProject/dream2.jpg" className="dream2" alt="드림랜드 설명"/>
              <img src="./image/MainProject/dream3.jpg" className="dream3" alt="드림랜드 회고"/>
              <img src="./image/MainProject/dream4.jpg" className="dream4" alt="드림랜드 디자인"/>
            </div> 
            <ul className="index-wrap">
              <li><span>표지</span></li>
              <li><span>회고</span></li>
              <li><span>디자인</span></li>
            </ul>           
          </div>

{/* recycle */}
        <div className="project-card">
          <div className="recycle">
            <img src="./image/MainProject/recycle2.png" className="recycle2" alt="리사이클 설명"/>
            <img src="./image/MainProject/recycle3.jpg" className="recycle3" alt="리사이클 회고"/>
            <img src="./image/MainProject/recycle4.jpg" className="recycle4" alt="리사이클 디자인"/>
          </div>
            <ul className="index-wrap">
              <li><span>표지</span></li>
              <li><span>회고</span></li>
              <li><span>디자인</span></li>
            </ul>  
        </div>

{/* endword */}
        <div className="project-card">
          <div className="endword">
            <img src="./image/MainProject/endword1.jpg" className="endword1" alt="끝말잇기 캡쳐 사진"/>
            <img src="./image/MainProject/endword2.jpg" className="endword2" alt="끝말잇기 설명"/>
          </div>
        </div>

{/* quiz */}
        <div className="project-card">
          <div className="quiz">
            <img src="./image/MainProject/quiz1.jpg" className="quiz1" alt="심리퀴즈 캡쳐 사진"/>
            <img src="./image/MainProject/quiz2.jpg" className="quiz2" alt="심리퀴즈 설명"/>
          </div>
        </div>

{/* gallery */}
        <div className="project-card">
          <div className="gallery">
            <img src="./image/MainProject/gallery1.jpg" className="gallery1" alt="갤러리 캡쳐 사진"/>
            <img src="./image/MainProject/gallery2.jpg" className="gallery2" alt="갤러리 설명"/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default MainProject;