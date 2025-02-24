import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import "./M&NPage.css";
import { BaseUrl } from "../../BaseUrl";
import arrow_previous_prpl from "../../../src/img/icons/arrow_previous_prpl.png";
const TopicCardReadmore = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogContent, setBlogContent] = useState(null);
  console.log("blogContent", blogContent);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    fetch(`${BaseUrl}/api/v1/blog/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog content");
        }
        return response.json();
      })
      .then((data) => setBlogContent(data))
      .catch((error) => console.error("Error fetching blog content:", error));
  }, [id]);

  if (!blogContent) {
    return <p>Loading... </p>;
  }

  return (
    <div className="topicreadmoremain p-5">
      <div className="backgroundblogreadmore">
        <div className="blog-header">
          <h1 className="Musingtext">{blogContent.title.name}</h1>
          <h3 className="Musingtext fs-1">{blogContent?.authorType}</h3>
        </div>
        <div className="blog-content">
          <p
            className="Musingtext"
            style={{ fontSize: "25px", textAlign: "justify" }}
          >
            {blogContent.message}
          </p>
          <p
            className="Musingtext"
            style={{ fontSize: "25px", textAlign: "justify" }}
          >
            {blogContent.hashtags.map((hashtag, index) => (
              <span key={index} className="mr-2">
                #{hashtag}
              </span>
            ))}
          </p>

          {/* <div className="textmainn">
            <p className="mt-md-5 ms-md-5">
              <span className="Musingtext">Move & Muse Community | Author</span>
            </p>
          </div> */}
        </div>
      </div>

      {/* Back to Topic Cards Button */}
      <div className="text-start">
        <img
          src={arrow_previous_prpl}
          alt=""
          className=""
          style={{ width: "100px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};

export default TopicCardReadmore;
