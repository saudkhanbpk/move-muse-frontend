import MusingGuideblog from "../../components/BlogPage/MusingGuideblog";
import Topics from "../../components/BlogPage/Topics";
import CatalogueFilter from "./CatalogueFilter";
import CatalogueHero from "./CatalogueHero";
import TopicTitleContainer from "./TopicTitleContainer";
import "./CataloguePage.css";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import MusingGuide from "./MusingGuide";
import CreateBlog from "./CreateBlog";
import ContactUs from "../../components/ContactUs/ContactUs"

export default function CataloguePage() {
  const { user } = useContext(UserContext);
  const [selectTopic, setSelectTopic] = useState({});
  return (
    <div>
      <CatalogueHero />
      <CatalogueFilter />
      <TopicTitleContainer setSelectTopic={setSelectTopic} selectTopic={selectTopic} />
      <MusingGuide />
      <CreateBlog user={user} topic={selectTopic}  />
      <ContactUs/>
    </div>
  );
}
