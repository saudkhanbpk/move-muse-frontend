import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blog from "../../img/icons/blogcatalogue.svg";
import "./M&NPage.css";

const TopicCardReadmore = () => {
  const { id } = useParams(); // Retrieve the blog ID from the URL
  const [blogContent, setBlogContent] = useState(null);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/blog/${id}`)
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
    return <p>Loading...</p>;
  }
 

  return (
    <div className="backgroundblogreadmore p-5">
      <div className="blog-header">
        <h1>{blogContent.title.name}</h1>
        <h3>{blogContent.author?.fullName}</h3>
      </div>
      <div className="blog-content">
        <p style={{ fontSize: "21px", textAlign: "justify" }}>
          {blogContent.message}
        </p>
      </div>
    </div>
  );
};

export default TopicCardReadmore;
