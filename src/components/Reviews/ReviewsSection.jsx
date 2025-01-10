import { useState, useEffect } from "react";
import axios from "axios";
import ReviewsFilter from "./ReviewsFilter";
import ReviewImage from "../../img/icons/1_share_reviews.png";
import ReviewCard from "./ReviewCard";
import underLine from "../../img/icons/underLine.svg";
import FeedbackForm from "../ProfileForm/FeedbackForm";
import { BaseUrl } from "../../BaseUrl";
import { useParams } from "react-router-dom";

export default function ReviewsSection() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);
  const fetchFeedback = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/v1/events/all-feedback/${id}`
      );
      setFeedbackData(response.data.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleDelete = async (reviewId) => {
    try {
      await axios.delete(
        `${BaseUrl}/api/v1/events/single-feedback/${reviewId}`
      );
      fetchFeedback(); // Refetch the data after deletion
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <>
      <div className="">
        <span className="d-flex align-items-end">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: "1rem",
            }}
          >
            <h1 className="fw-bold fs-2 heading-color mb-2 ">Reviews </h1>
            <img
              src={underLine}
              alt="Underline"
              style={{
                position: "absolute",
                bottom: "-15px",
                left: "0",
                width: "200%",
              }}
            />
          </div>
          <img src={ReviewImage} width={200} alt="review" />
        </span>
        <div>
          <FeedbackForm onSubmit={fetchFeedback} />
        </div>

        {/* Show a loading message while data is being fetched */}
        {loading ? (
          <p>Loading reviews...</p>
        ) : (
          <div className="d-flex flex-column gap-5 py-5 ">
            {feedbackData.length > 0 ? (
              feedbackData.map((item) => (
                <ReviewCard
                fetchFeedback={fetchFeedback}
                  key={item._id}
                  item={item}
                  onDelete={handleDelete}
                />
              ))
            ) : (
              <p>No reviews available.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
