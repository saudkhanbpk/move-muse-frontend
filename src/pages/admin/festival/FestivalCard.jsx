import deleteImg from "../../../img/icons/admin-review-card-delete-button.png";
import ignoreImg from "../../../img/icons/admin-card-ignore-button.png";
export default function FestivalCard() {
  return (
    <div className="festival-card d-flex gap-4 flex-column FestivalCard">
      <div className="w-75 d-flex flex-column flex-md-row align-items-center justify-content-center gap-2">
        <div className="w-50 div1-container rounded-2">
          <div className="div1 rounded-2"></div>
        </div>

        <div className="d-flex flex-wrap gap-1">
          <button className="btn">
            <img src={deleteImg} width={90} height={40} alt="img" />
          </button>
          <button className="btn">
            <img src={ignoreImg} width={90} height={40} alt="img" />
          </button>
        </div>
      </div>

      <div className="w-75 d-flex flex-column flex-md-row align-items-center justify-content-center gap-2 ">
        <div className="w-50 div2-container rounded-2">
          <div className="div2 rounded-2"></div>
        </div>

        <div className="d-flex flex-wrap gap-1">
          <button className="btn">
            <img src={deleteImg} width={90} height={40} alt="img" />
          </button>
          <button className="btn">
            <img src={ignoreImg} width={90} height={40} alt="img" />
          </button>
        </div>
      </div>
    </div>
  );
}
