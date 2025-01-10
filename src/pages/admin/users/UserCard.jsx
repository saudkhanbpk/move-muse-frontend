import deleteImg from "../../../img/icons/admin-review-card-delete-button.png";
import restoreImg from "../../../img/icons/admin-review-card-restore-button.png";
import archiveImg from "../../../img/icons/admin-review-card-archive-button.png";

export default function UserCard({ username, imgUrl, message, index }) {
  const borderClasses = [
    "border-primary",
    "border-secondary",
    "border-success",
    "border-danger",
    "border-warning",
    "border-info",
    "border-light",
    "border-dark",
    "border-white",
  ];
  return (
    <div className="d-flex flex-column flex-md-row align-items-center gap-4">
      <div className="d-flex flex-column align-items-center">
        <img
          src={imgUrl}
          width={150}
          height={150}
          alt="user"
          className={`object-fit-cover border border-5  rounded-circle ${
            borderClasses[index % borderClasses.length]
          }`}
        />
        <h2 className="fs-6 fw-semibold text-capitalize">{username}</h2>
      </div>
      <div
        style={{
          maxWidth: 260,
          textAlign: "justify",
        }}
      >
        {message}
      </div>
      <div className="d-flex flex-wrap align-items-center ">
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
