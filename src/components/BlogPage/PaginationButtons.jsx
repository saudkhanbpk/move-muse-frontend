import React from "react";
import ForwardBtn from "../../img/icons/forward-btn.svg";
import BackwardBtn from "../../img/icons/backward-btn.svg";

export default function PaginationButtons({ page, setPage, dataLength }) {
  const next = () => {
    if (page + 3 < dataLength) {
      setPage(page + 3);
    }
  };

  const prev = () => {
    if (page - 3 >= 0) {
      setPage(page - 3);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-md-end justify-content-center gap-md-0 gap-5  me-3">
      <button className="btn" onClick={prev} disabled={page <= 0}>
        <img src={BackwardBtn} alt="Backward" width={50} />
      </button>
      <button className="btn" onClick={next} disabled={page + 3 >= dataLength}>
        <img src={ForwardBtn} alt="Forward" width={50} />
      </button>
    </div>
  );
}
