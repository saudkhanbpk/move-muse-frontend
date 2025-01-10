import redImage from '../../../img/icons/redImage.png';
import adminDrop from "../../../img/icons/admin-drop.png";
import "./flaggedFestival.css";
import FestivalCard from "./FestivalCard";

export default function FlaggedFestival() {
  return (
    <>
    <div className="festival-container">
      <div className="d--inline-flex flex-columns pt-4 main2">
        <div className="d-flex gap-4 align-items-center">
          <img
            src={redImage}
            width={63}
            height={63}
            alt="red-flag"
            style={{ mixBlendMode: "multiply" }}
          />
          <span className="d-inline-flex align-items-center gap-2">
            <h1 className="fs-5 fw-semibold flagged-heading">
              Flagged Festivals
            </h1>
            <h2 className="text-danger amount fw-bold">5</h2>
          </span>
        </div>
        <img
          src={adminDrop}
          className="align-self-center"
          width={290}
          alt="img"
          style={{ marginLeft: 20 }}
        />
      </div>

      <div className="d-md-flex align-items-md-center flex-column justify-content-md-center gap-md-4 py-md-5 festival_cards5">
        <FestivalCard/>
        <FestivalCard/>
        <FestivalCard/>
        <FestivalCard/>
        <FestivalCard/>
      </div>
    </div>
    </>
  );
}
