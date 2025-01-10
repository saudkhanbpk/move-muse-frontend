import redFlag from "../../../img/icons/redflage.jpg";
import adminDrop from "../../../img/icons/admin-drop.png";
import "./flaggedUser.css";
import UserCard from "./UserCard";

const cardData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "junior",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1516522973472-f009f23bba59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1627067227573-07bc616f46ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "username name",
    message:
      "lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit lorem ipsum dollar sit amit",
  },
];

export default function FlaggedUsers() {
  return (
    <div className="main-bg">
      <div className="d--inline-flex flex-columns pt-4 flageuserimdarrow" >
        <div className="d-flex gap-4 align-items-center">
          <img
            src={redFlag}
            width={63}
            height={63}
            alt="red-flag"
            style={{ mixBlendMode: "multiply" }}
          />
          <span className="d-inline-flex align-items-center gap-2">
            <h1 className="fs-5 fw-semibold flagged-heading ">
              Flagged Festivals
            </h1>
            <h2 className="text-danger amount fw-bold">7</h2>
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
      <div className="container d-flex flex-column gap-5 py-5 ">
        {cardData.map((item, index) => (
          <UserCard
            key={index}
            username={item.username}
            message={item.message}
            imgUrl={item.imageUrl}
            index={index}
           
          />
        ))}
      </div>
    </div>
  );
}
