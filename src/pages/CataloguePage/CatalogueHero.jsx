import BlogImg from "../../img/icons/blog.svg";
import VictoryHand from "../../img/icons/victory-hand.svg";
import OvalShape from "../../img/icons/oval-blog.svg";
import CircleShape from "../../img/icons/circle-blog.svg";
import { CiCirclePlus } from "react-icons/ci";

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

export default function CatalogueHero() {
  

  
  return (
    <>
      <div className="blog-container-hero pb-5">
        <div className="d-flex px-5 flex-wrap align-items-center justify-content-center ">
          <div>
            <span className="d-flex position-relative align-items-center align-items-sm-baseline">
              <h1 className="fw-bold text-break" style={{ color: "#545454" }}>
                Welcome to Move & Muse
              </h1>
              <img src={BlogImg} alt="blog-img" className="" width={100} />
            </span>
            <p
              className="fs-4 text-justify text-sm-start"
              style={{ maxWidth: "700px", color: "#545454", fontWeight: 500 }}
            >
              - Every topic in this catalogue is waiting for submissions from our
              valuable readers, writers, and dancers. <br />
              - Can‘t find something that speaks to you, feel free to create your
              own! <br />
              - Submit your article. This will make the topic unavailable for
              others to pick. <br />
              - Our dedicated M&M team will go over every piece of writing to
              ensure that it aligns with M&M community values and reach out back
              to you. <br />
            </p>
          </div>
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <img src={VictoryHand} />
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
    </>
  );
}
