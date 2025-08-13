const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-txt-wrap">
        <h1>My Ethos</h1>
        <div className="about-txt">
          <p>유연한 시선과 흔들림 없는 중심으로 소통하며,</p>
          <p>
            <span className="point">끝까지 함께 완성해가는</span> 사람입니다.
          </p>
        </div>
        <div className="about-btn">
          <div className="row">
            <button className="borderBtn">침착함과 집중</button>
            <button className="colorBtn">몰입과 완성</button>
            <button className="borderBtn">신념과 소통</button>
          </div>
          <div className="row">
            <button className="colorBtn">책임과 협업</button>
            <button className="colorBtn">창의와 확장</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
