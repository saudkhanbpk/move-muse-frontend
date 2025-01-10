import StarImage from "../../../img/icons/star-1.png";
import deleteImg from "../../../img/icons/admin-review-card-delete-button.png";
import restoreImg from "../../../img/icons/admin-review-card-restore-button.png";
import archiveImg from "../../../img/icons/admin-review-card-archive-button.png";
export default function ReviewCard({
  title,
  stars,
  venue,
  ratio,
  organization,
  artists,
  culture,
  label,
  description,
}) {
  const starArray = Array(stars).fill(null);
  return (
    <div className="d-flex flex-column flex-md-row align-items-center gap-3 container">
      <div>
        <div className="d-flex justify-content-between">
          <h1 className="fs-4 title fw-semibold">{title}</h1>
          <span className="text-nowrap">
            {starArray.map((_, index) => (
              <img src={StarImage} width={20} alt="Star" key={index} />
            ))}
          </span>
        </div>
        <div className="cardInfo p-2 rounded-3">
          <div className="d-flex flex-wrap gap-2">
            <span>Venue {venue}</span>
            <span>Ratio {ratio}</span>
            <span>Organization {organization}</span>
            <span>Artists {artists}</span>
            <span>Culture {culture}</span>
          </div>
          <h4 className="text-decoration-underline color-card-text fw-semibold">
            {label}
          </h4>
          <p className="text-justify">{description}</p>
        </div>
      </div>
      <div className="d-md-flex ">
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
  );
}
