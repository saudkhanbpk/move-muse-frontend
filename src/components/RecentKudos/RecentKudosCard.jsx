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

export default function RecentKudosCard({ user, index }) {
  return (
    <div className="col align-items-center" key={index}>
      <div
        className="position-relative "
        style={{ width: "fit-content", margin: "5px auto" }}
      >
        <img
          src={user.imageUrl}
          alt="user image"
          width={100}
          height={100}
          className={`rounded-circle object-fit-cover border border-5 ${
            borderClasses[index % borderClasses.length]
          }`}
        />
        <div className="bg-white rounded-circle badge-image position-absolute top-0 kudos-badge">
          <span className="border border-2 rounded-circle border-warning d-block text-warning position-relative end-1 text-center">
            +{user.count}
          </span>
        </div>
      </div>
      <div className="text-center">{user.festival}</div>
    </div>
  );
}
