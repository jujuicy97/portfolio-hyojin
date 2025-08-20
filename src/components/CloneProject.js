import Clone from "../json/Clone.json";

const CloneProject = () => {
  return (
    <div className="clone-project">
      <h2>
        <span className="text1">CLONE</span>
        <span className="text2">PROJECT</span>
      </h2>
      <div className="clone-project">
        <img
          src={process.env.PUBLIC_URL + "/image/Clone/CloneLine.png"}
          className="line"
        />
        <div className="circle-num">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="cloneCard-wrap">
          {Clone.map((card) => {
            return (
              <div key={card.id} className={card.className}>
                <img
                  src={process.env.PUBLIC_URL + card.image}
                  alt={card.title}
                />
                <div className="txt-wrap">
                  <div className="txt-top">
                    <h1>{card.title}</h1>

                    {card.description.map((desc, i) => {
                      return <p key={i}>{desc}</p>;
                    })}
                  </div>
                  <div className="txt-bottom">
                    {card.bottom.map((botItem, i) => {
                      return (
                        <div className="bot" key={i}>
                          {botItem.title && <h4>{botItem.title}</h4>}
                          {botItem.title && <p>{botItem.content}</p>}
                        </div>
                      );
                    })}
                  </div>
                  <div className="txt-point">
                    {card.points.map((point, i) =>
                      point.link ? (
                        <a key={i} href={point.link}>
                          {point.text}
                        </a>
                      ) : (
                        <p key={i}>{point.text}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CloneProject;
