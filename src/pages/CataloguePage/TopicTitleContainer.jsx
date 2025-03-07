import { useEffect, useRef, useState } from "react";
import PlusIcon from "../../img/icons/plus-icon.svg";
import NotificationService from "../../components/NotificationService/NotificationService";
import ApiService from "../../services/ApiService";
import PaginationButtons from "./PaginationButtons";

export default function TopicTitleContainer({ setSelectTopic, selectTopic }) {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState("");
  const [page, setPage] = useState(0);
  const [allBlogLength, setAllBlogLength] = useState(0);
  const topicsRef = useRef(() => {});
  topicsRef.current = async () => {
    try {
      const response = await ApiService.get("getAllTitles");
      setTopics(response.data.data.titles);
      setAllBlogLength(response?.data?.data?.titles?.length);
    } catch (error) {
      NotificationService.notifyError(
        "Failed to fetch titles. Please try again."
      );
    }
  };

  useEffect(() => {
    topicsRef.current();
  }, [topicsRef]);

  const handleAddTopic = async () => {
    if (newTopic && !topics.includes(newTopic)) {
      try {
        const name = newTopic;
        const data = await ApiService.post("addTitle", { name });
        setNewTopic("");
        NotificationService.notifyInfo("Title Added Successfully");
        topicsRef.current();
      } catch (error) {
        NotificationService.notifyError("Api failed ");
      }
    } else {
      NotificationService.notifyError(
        "Please enter a unique topic or a topic that is not already listed."
      );
    }
  };

  return (
    <div className="px-1 px-sm-5">
      <div>
        <ol>
          {topics?.slice(page, page + 3)?.map((topic, index) => (
            <li
              key={topic?._id}
              className={`font-style fs-2 ${
                selectTopic?.name === topic?.name ? "text-decoration-line-through" : ""
              }`}
              onClick={() => setSelectTopic(topic)}
              style={{ cursor: "pointer" }}
            >
              {topic?.name}
            </li>
          ))}
        </ol>
        <div
          className="d-flex align-items-center gap-2"
          style={{ maxWidth: 500 }}
        >
          <button className="add-btn" onClick={handleAddTopic}>
            <img src={PlusIcon} alt="plus icon" width={60} />
          </button>
          <input
            type="text"
            placeholder="Add your topic"
            className="font-style form-control fs-3"
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            style={{ outline: "none", border: "none" }}
          />
        </div>
      </div>
      <PaginationButtons
        dataLength={allBlogLength}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
