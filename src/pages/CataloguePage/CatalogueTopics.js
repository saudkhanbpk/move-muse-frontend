import React, { useEffect, useState } from 'react'
import ApiService from '../../services/ApiService';
import NotificationService from '../../components/NotificationService/NotificationService';
import plus from '../../img/icons/plus-icon.svg';
import endline from '../../img/icons/endline.png'
import PaginationButtons from '../M&NPage/PaginationButtons';
import MusingGuide from '../../components/MusingGuide/MusingGuide';
const CatalogueTopics = () => {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");
    const [topicValue, setTopicValue] = useState("");

    const handleAddTopic = async () => {
        if (newTopic && !topics.includes(newTopic)) {
            try {
                const name = newTopic;
                const data = await ApiService.post("addTitle", { name });
                setNewTopic("");
                NotificationService.notifyInfo("Title Added Successfully");
                fetchData();
            } catch (error) {
                NotificationService.notifyError("Api failed ");
            }
        } else {
            NotificationService.notifyError(
                "Please enter a unique topic or a topic that is not already listed."
            );
        }
    };

    const fetchData = async () => {
        try {
            const response = await ApiService.get("getAllTitles");
            setTopics(response.data.data.titles);
        } catch (error) {
            NotificationService.notifyError(
                "Failed to fetch titles. Please try again."
            );
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (

        <>
            <div className='d-flex flex-column mt-5 px-5'>
                <ol className="order_list_path my-4">
                    {topics?.map((topic, index) => {
                        return (
                            <li
                                className={`list__data ${topicValue === topic ? "line-through" : ""
                                    } `}
                                onClick={() => setTopicValue(topic)}
                                key={index}
                            >
                                {topic.name}
                            </li>
                        );
                    })}
                </ol>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <img
                            src={plus}
                            onClick={handleAddTopic}
                            style={{ cursor: "pointer", width: "50px" }}
                            alt=''
                        />
                        <input
                            type="text"
                            value={newTopic}
                            className="input_topic border-0"
                            onChange={(e) => setNewTopic(e.target.value)}
                            placeholder="Add a new topicsss"
                        />
                    </div>
                    <div>
                        <PaginationButtons />
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <img src={endline} alt="" className="img-fluid" />
                </div>

                <MusingGuide
                    topicValue={topicValue}
                    fetchData={fetchData}
                    setTopicValue={setTopicValue}
                />
            </div>
        </>
    )
}

export default CatalogueTopics
