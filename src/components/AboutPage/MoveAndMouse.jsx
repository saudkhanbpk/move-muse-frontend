import MoveAndMouseLogo from "../../img/icons/move-and-mouse-logo.svg";

export default function MoveAndMouse() {
  return (
    <div className="move-and-mouse-container d-flex flex-column flex-md-row justify-content-center p-5">
      <div className="flex-grow-1">
        <h1 className="fw-semibold my-5">Move & Mouse Logo</h1>
      </div>
      <div>
        <img
          src={MoveAndMouseLogo}
          alt="move-and-mouse-logo"
          className="img-fluid"
        />
      </div>
    </div>
  );
}
