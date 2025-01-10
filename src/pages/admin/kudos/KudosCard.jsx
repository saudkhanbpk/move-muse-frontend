import deleteImg from "../../../img/icons/admin-review-card-delete-button.png";
import restoreImg from "../../../img/icons/admin-review-card-restore-button.png";
import archiveImg from "../../../img/icons/admin-review-card-archive-button.png";
export default function KudosCard({ title, description, imgUrl }) {
  return (
    <div className="d-flex flex-column gap-2 ">
      <div className="d-flex gap-5">
        <img
          src={imgUrl}
          alt="kudos"
          width={110}
          height={110}
          className="rounded-circle object-fit-cover"
        />
        <div className="pt-3">
          <h1 className="cardText-color fw-semibold fs-5">{title}</h1>
          <p className="cardText-color">{description}</p>
        </div>
      </div>
      <div>
        <h3 className="cardText-color fw-semibold fs-6 px-3">Other Magic</h3>
        <div className="d-flex flex-wrap">
          <button className="btn">
            <img src={deleteImg} width={90} height={40} alt="img" />
          </button>
          <button className="btn">
            <img src={restoreImg} width={90} height={40} alt="img" />
          </button>
          <button className="btn">
            <img src={archiveImg} width={90} height={40} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
}
