import VictoryHand from "../../img/icons/victory-hand.svg";
import OvalShape from "../../img/icons/oval-blog.svg";
import CircleShape from "../../img/icons/circle-blog.svg";
const heroCardsData = [
  {
    title: "Kindness",
    desc: "Towards yourself, others, your dance journey, and other dancers story.",
  },
  {
    title: "blog",
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
export default function OurMission() {
  return (
    <div className="ourMission-container py-5 d-flex flex-column gap-5">
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
                  width: "200px",
                  height: "200px",
                }}
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
                  width: "200px",
                  height: "199px",
                }}
              >
                <h1 className="fs-5 fw-semibold">{item.title}</h1>
                <p>{item.desc}</p>
              </div>
            );
          }
        })}
        <div className="d-flex align-items-center justify-content-center">
          <img src={VictoryHand} alt="our-values" width={113} />
        </div>
      </div>
      <div className="text-justify px-2 px-md-5 mx-0 mx-md-5 info-container">
        <p className="mx-0 mx-md-4">
          There is no doubt that some, if not all, of our values resonate with
          you because this is exactly what social dance teaches us. We therefore
          encourage everyone to practice those on the Move & Muse platform.{" "}
          <br />
          To ensure that everyone feels safe, respected, and included, there is
          a possibility to flag content that you might find inappropriate or
          offensive: <br />
          -Event Reviews <br />
          -User Accounts you will find under Confirmed Attendees in each event{" "}
          <br />
          -Other Magic Kudo given to you by an event participant <br />
        </p>
      </div>
    </div>
  );
}
