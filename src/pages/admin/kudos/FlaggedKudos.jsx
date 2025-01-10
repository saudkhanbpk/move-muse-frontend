import redImage from '../../../img/icons/redImage.png';
import adminFlaggedKudos from "../../../img/icons/admin-flagged-kudos-icon.png";
import adminDrop from "../../../img/icons/admin-drop.png";
import KudosCard from "./KudosCard";

const cardData = [
  {
    title: "Heleri, PKC 2023 for Benjamin",
    description: "Bad message or inappropriate content",
    imgUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Heleri, PKC 2023 for Benjamin",
    description: "Bad message or inappropriate content",
    imgUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Heleri, PKC 2023 for Benjamin",
    description: "Bad message or inappropriate content",
    imgUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Heleri, PKC 2023 for Benjamin",
    description: "Bad message or inappropriate content",
    imgUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Heleri, PKC 2023 for Benjamin",
    description: "Bad message or inappropriate content",
    imgUrl:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FlaggedKudos() {
  return (
    <div className="main-bg-color px-2">
      <div className="d--inline-flex flex-columns pt-4 main2" >
        <div className="d-flex gap-4 align-items-center">
          <img
        
            src={redImage}
            width={63}
            height={50}
            alt="red-flag"
        
            style={{ mixBlendMode: "multiply" }}
          />
          <span className="d-inline-flex align-items-center gap-2">
            <h1 className="fs-5 fw-semibold flagged-heading ">
              Flagged Kudos 
            </h1>
            <h2 className="text-danger amount fw-bold ">12</h2>
          </span>
          <img src={adminFlaggedKudos} alt="user" width={60}    className=" "/>
        </div>
        <img
          src={adminDrop}
          className="align-self-center"
          width={270}
          alt="img"
          style={{ marginLeft: 20 }}
        />
      </div>

      <div className="container d-flex flex-column gap-5 py-5 ">
        {cardData.map((item, index) => (
          <KudosCard
            key={index}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}
