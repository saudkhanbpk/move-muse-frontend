import redImage from '../../../img/icons/redImage.png';
import adminUser from "../../../img/icons/admin-user.png";
import adminDrop from "../../../img/icons/admin-drop.png";
import ReviewCard from "./ReviewCard";
import './flaggedReviews.css'

const cardData = [
  {
    title: "Vancouver Kiz",
    stars: 5,
    venue: 5,
    ratio: 6,
    organization: 7,
    artists: 4,
    culture: 5,
    label: "Creme de la creme ",
    description:
      "Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, diversity, the arts including performances and fashion shows by African designers.",
  },
  {
    title: "Victoria International Kizomba Festival ",
    stars: 5,
    venue: 5,
    ratio: 6,
    organization: 7,
    artists: 4,
    culture: 5,
    label: "Creme de la creme ",
    description:
      "Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, diversity, the arts including performances and fashion shows by African designers.",
  },
  {
    title: "Kizolove",
    stars: 5,
    venue: 5,
    ratio: 6,
    organization: 7,
    artists: 4,
    culture: 5,
    label: "Creme de la creme ",
    description:
      "Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, diversity, the arts including performances and fashion shows by African designers.",
  },
  {
    title: "Montreal is Kizomba",
    stars: 5,
    venue: 5,
    ratio: 6,
    organization: 7,
    artists: 4,
    culture: 5,
    label: "Creme de la creme ",
    description:
      "Creme de la creme of African dances and 1 Gala night of celebration of multiculturalism, diversity, the arts including performances and fashion shows by African designers.",
  },
];

export default function FlagedReviews() {
  return (
    <>
      <div className="d--inline-flex flex-columns pt-4 primary-div-bg FlagedReviewsimg" >
        <div className="d-flex gap-4 align-items-center ">
          <img
            src={redImage}
            width={63}
            height={63}
            alt="flag"
            className=""
            style={{ mixBlendMode: "multiply",  }}
          />
          <span className="d-inline-flex align-items-center gap-2">
            <h1 className="fs-5 fw-semibold flagged-heading ">
              Flagged Reviews
            </h1>
            <h2 className="text-danger amount fw-bold">33</h2>
          </span>
          <img src={adminUser} alt="user" width={80} />
        </div>
        <img
          src={adminDrop}
          className="align-self-center "
          width={290}
          alt="drop"
          style={{ marginLeft: 20 }}
        />
      </div>

      <div className="d-flex flex-column gap-5 py-5 primary-div-bg ">
        {cardData.map((item, index) => (
          <ReviewCard
            key={index}
            title={item.title}
            label={item.label}
            artists={item.artists}
            culture={item.culture}
            stars={item.stars}
            description={item.description}
            organization={item.organization}
            ratio={item.ratio}
            venue={item.venue}
          />
        ))}
      </div>
    </>
  );
}
