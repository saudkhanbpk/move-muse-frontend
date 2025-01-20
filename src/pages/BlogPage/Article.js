import React, { useEffect, useState } from 'react';
import MusingGuide from '../../components/MusingGuide/MusingGuide';
import ApiService from '../../services/ApiService';
import NotificationService from '../../components/NotificationService/NotificationService';

import back from "../../img/icons/backarrow.png";
import forward from "../../img/icons/forwardarrow.png";

const Article = () => {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");
    const [topicValue, setTopicValue] = useState("");
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDates, setSelectedDates] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);
    const [authorFilter, setAuthorFilter] = useState("");
    const postsPerPage = 8;

    let filteredPosts = [...posts];

    if (selectedTopic && selectedDates) {
        filteredPosts = filteredPosts.filter(
            (post) =>
                post.title.name === selectedTopic &&
                post.date.slice(0, 10) === selectedDates
        );
    } else if (selectedTopic) {
        filteredPosts = filteredPosts.filter(
            (post) => post.title.name === selectedTopic
        );
    } else if (selectedDates) {
        filteredPosts = filteredPosts.filter(
            (post) => post.date.slice(0, 10) === selectedDates
        );
    }

    if (authorFilter) {
        filteredPosts = filteredPosts.filter(post =>
            post.author.fullName.toLowerCase().includes(authorFilter.toLowerCase())
        );
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const handleNext = () => {
        setCurrentPage((prevPage) =>
            prevPage < totalPages ? prevPage + 1 : prevPage
        );
    };

    const handlePrev = () => {
        setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const fetchData = async () => {
        try {
            const response = await ApiService.get("getAllTitles");
            setTopics(response.data.data.titles);
        } catch (error) {
            console.log("Failed to fetch titles:", error);
            NotificationService.notifyError(
                "Failed to fetch titles. Please try again."
            );
        }
    };

    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    return (
        <>
            <div className='selectbox-maindiv '>
                <MusingGuide
                    topicValue={topicValue}
                    fetchData={fetchData}
                    setTopicValue={setTopicValue}
                />
            </div>
        </>
    );
};

export default Article;
