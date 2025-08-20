const Skill = () => {
  return (
    <div className="skills-wrap">
      <div className="skills">
        <div className="skills-top">
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills1.png"} alt="skill1" />
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills2.png"} alt="skill2" />
        </div>
        <div className="skills-bottom">
          <img src={process.env.PUBLIC_URL + "/image/Skills/skills3.png"} alt="skill3" />
        </div>
        <img src={process.env.PUBLIC_URL + "/image/Skills/skills-tools.png"} alt="skills-tools" />
      </div>
    </div>
  );
};

export default Skill;
