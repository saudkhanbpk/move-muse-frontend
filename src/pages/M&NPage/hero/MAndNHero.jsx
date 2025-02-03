import BlogImg from "../../../img/icons/blog.svg";
import VictoryHand from "../../../img/icons/victory-hand.svg";
import OvalShape from "../../../img/icons/oval-blog.svg";
import CircleShape from "../../../img/icons/circle-blog.svg";

const heroCardsData = [
  {
    title: "Kindness",
    desc: "Towards yourself, others, your dance journey, and other dancers story.",
  },
  {
    title: "Curiosity",
    desc: "The desire to learn from others, let go on your ego, de- construct your biases.",
  },
  {
    title: "Awareness",
    desc: "It is by knowing where you stand you can start moving forward.",
  },
  {
    title: "Respect",
    desc: "We encourage honest, respectful feedback that helps us all improve.",
  },
  {
    title: "Community",
    desc: "Building a supportive and engaged dance community.",
  },
  {
    title: "Empowerment",
    desc: "Empowering dan-cers to grow  and express themselves.",
  },
];

export default function MAndNHero() {
  return (
    <div className="blog-container-hero pb-5">
      <div className="d-flex px-5 flex-wrap align-items-center justify-content-center ">
        <div>
          <span className="d-flex position-relative align-items-center align-items-sm-baseline">
            <h1 className="fw-bold text-break" style={{ color: "#545454" }}>
              Welcome to Move & Muse
            </h1>
            <img src={BlogImg} alt="blog-img"  width={100} />
          </span>
          <p
            className="fs-3 text-justify text-sm-start"
            style={{ maxWidth: "700px" }}
          >
            Enjoy dancers sharing their bits of wisdom and encouragement. All of
            the essays are aligned with our values.
          </p>
        </div>
        <div className="flex-grow-1 d-flex align-items-center justify-content-center ">
          <img src={VictoryHand} alt="img" />
        </div>
      </div>

      <div className="d-flex  px-1 flex-wrap align-items-center justify-content-center  ">
        {heroCardsData.map((item, index) => {
          if (index % 2 === 0) {
            return (
              <div
                className="d-flex flex-column align-items-center justify-content-center px-3"
                style={{
                  backgroundImage: `url(${OvalShape})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "250px",
                  height: "250px",
                }}
                key={index}
              >
                <h1 className="fs-5 fw-semibold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            );
          } else {
            return (
              <div
                className="d-flex flex-column align-items-center justify-content-center px-3"
                style={{
                  backgroundImage: `url(${CircleShape})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "250px",
                  height: "250px",
                  
                }}
                key={index}
              >
                <h1 className="fs-5 fw-semibold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
