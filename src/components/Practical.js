import Practice from "../json/Practical.json";

const Practical = () => {
  return (
    <div className="practical">
      <h2 className="practical-title">
        <span>PRACTICAL</span>
        <span>PUBLISHING</span>
      </h2>
      <h2 className="practical-txt">
        This is the result of consistent practice. Let’s create something
        together!
      </h2>
      {/* <img src={process.env.PUBLIC_URL + "/image/Practical/gradient.png"} /> */}
      <div className="card-wrap">
        {Practice.map((card) => {
          return (
            <div className="card" key={card.id} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/image/Practical/gradient.png)`}}>
            <img src={process.env.PUBLIC_URL + card.image} alt={card.image}/>
              <div className="card-top">
                <h3>{card.title}</h3>
                <p>{card.techStack}</p>
              </div>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Practical;
