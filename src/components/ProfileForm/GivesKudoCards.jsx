
  import image from "../../img/icons/userimg1.png"
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
  export default function GivesKudoCards({ user, index }) {
    return (
      <div className="col align-items-center" key={index}>
        <div
          className="position-relative"
          style={{ width: "fit-content", margin: "5px auto" }}
        >
          <img
            src={image}
            alt="user image"
            width={80}  // Smaller size
            height={80}  // Smaller size
            className={`rounded-circle object-fit-cover border border-4 ${
              borderClasses[index % borderClasses.length]
            }`}
          />
          <div
            className="bg-white rounded-circle badge-image position-absolute top-0 kudos-badge"
            style={{ width: "10px", height: "10px" }}  // Badge size
          >
            <span className="border border-2 fs-6 fw-bold rounded-circle border-warning d-block text-warning text-center">
              +{user.count}
            </span>
          </div>
        </div>
        <div className="text-center" style={{ fontSize: "0.8rem" }}>{user.festival}</div>
      </div>
    );
  }
  