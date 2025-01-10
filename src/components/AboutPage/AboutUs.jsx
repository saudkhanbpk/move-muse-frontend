import BulbIconOne from "../../img/icons/bulb-icon-one.svg";
import BulbIconTwo from "../../img/icons/bulb-icon-two.svg";

export default function AboutUs() {
  return (
    <div
      className="d-flex px-3 px-md-5 flex-column-reverse flex-md-row pb-5 about-us-main-container"
    >
      <div className="aboutUs-img-container pt-5 d-flex align-items-center  flex-md-column ">
        <img src={BulbIconTwo} alt="bulb-icon" />
        <h2 className="fw-semibold text-uppercase fs-5">our vision</h2>
      </div>
      <div className="flex-grow-1 d-flex flex-column align-items-center aboutUs-container gap-5">
        <img src={BulbIconOne} alt="bulb-icon" />
        <h1 className="fw-semibold">AboutUs</h1>
        <div>
          <p className="text-justify p-0">
            Move & Muse was born from a simple yet profound realization: while
            the growing number of dance festivals bring us together, our shared
            experiences and insights are what truly allows us to create that
            safe and caring space when entering a dance room. The way we see it,
            feedback, love, and kindness are what help weave the rich tapestry
            of our community. As we seek more depth and density in movement, we
            couldn’t find a platform dedicated to sharing our experiences, so we
            created one!
            <br />
            Welcome to the place where every dancer, from beginners to
            professionals, can share feedback, learn from others, and help dance
            organizers create more inclusive and engaging experiences for
            everyone!
          </p>
        </div>
      </div>
    </div>
  );
}
