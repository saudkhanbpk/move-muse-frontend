import React, { useEffect, useState } from "react";
import axios from "axios";
import dropdown from "../../img/icons/dropdown.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Import full star and half star icons
import arrowright from "../../img/icons/arrowright.png";
import arrowleft from "../../img/icons/arrow_previous_prpl.png"; // Add an arrow left icon for the previous button
import { BaseUrl } from "../../BaseUrl";

function AllReviews() {
    const [flaggedReviews, setFlaggedReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 4;

    useEffect(() => {
        const fetchFlaggedReviews = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/api/v1/events/feedback`);
                setFlaggedReviews(response.data.data || []);
            } catch (error) {
                console.error("Error fetching flagged reviews:", error);
            }
        };

        fetchFlaggedReviews();
    }, []);

    const totalPages = Math.ceil(flaggedReviews.length / reviewsPerPage);
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const currentReviews = flaggedReviews.slice(startIndex, startIndex + reviewsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const calculateStars = (rev) => {
        const total = rev.venue + rev.ratio + rev.organization + rev.artists + rev.culture;
        const maxPossible = 5;
        const average = total / 5;

        // Round up to the next whole number if the average is 0.5 or higher
        if (average % 1 >= 0.5) {
            return Math.ceil(average);
        }

        // Return the average rating
        return average;
    };

    const renderStars = (rev) => {
        const stars = calculateStars(rev);
        const fullStars = Math.floor(stars);
        const hasHalfStar = stars - fullStars > 0 && stars - fullStars < 0.5;

        const starElements = [];

        for (let i = 0; i < fullStars; i++) {
            starElements.push(<FaStar key={`full-${i}`} color="#f8b706" size={20} />);
        }

        if (hasHalfStar) {
            starElements.push(<FaStarHalfAlt key="half" color="#f8b706" size={20} />);
        }

        return starElements;
    };

    return (
        <div className="p-5" style={{ minHeight: '100vh' }}>
            <div className="d-md-flex gap-3">
                <div>
                    <div className="d-flex">
                        {/* <img src={flagcropped} alt="flag" width={50} /> */}
                        <div className="d-flex gap-3">
                            <h4 className="fw-bold d-flex align-self-end">All Reviews</h4>
                            <h3 className="align-self-end fw-bold" style={{ color: "#9d1c19" }}>
                                {flaggedReviews.length}
                            </h3>
                        </div>
                    </div>
                    <div className="d-flex mt-2 position-relative right-5">
                        <div
                            style={{
                                width: "180px",
                                height: "2px",
                                border: "1px solid black",
                                alignSelf: "center",
                            }}
                        ></div>
                        <div
                            className="rounded-circle self-center"
                            style={{ width: "20px", height: "20px", backgroundColor: "black" }}
                        ></div>
                    </div>
                    <div className="d-flex justify-content-start mt-1" style={{ width: "260px" }}>
                        <img src={dropdown} alt="dropdown" width={20} />
                    </div>
                </div>
            </div>
            <div className="mt-5 d-flex flex-wrap gap-5 justify-content-center" style={{ minHeight: '500px' }}>
                {currentReviews.map((rev, index) => (
                    <div key={index} className="d-md-flex mb-3 gap-5">
                        <div>
                            <div className="d-flex justify-content-end">
                                <div className="d-flex align-items-end">
                                    {renderStars(rev)}
                                </div>
                            </div>
                            <div className="rounded-4 p-3 mt-1 cardInfo" style={{ border: "3px solid #9BB09D" }}>
                                <div className="d-flex flex-wrap gap-3 fw-bold">
                                    <span className="d-flex gap-2">Venue <span>{rev.venue}</span></span>
                                    <span className="d-flex gap-2">Ratio <span>{rev.ratio}</span></span>
                                    <span className="d-flex gap-2">Organization <span>{rev.organization}</span></span>
                                    <span className="d-flex gap-2">Artists <span>{rev.artists}</span></span>
                                    <span className="d-flex gap-2">Culture <span>{rev.culture}</span></span>
                                </div>
                                <h4 className="text-decoration-underline color-card-text fw-semibold mt-md-0 mt-3">
                                    {rev.title}
                                </h4>
                                <p className="fw-bold">{rev.description}</p>
                                {rev.flagged && (
                                    <p className="fw-bold mt-2">
                                        Flagged Message: {rev.flagMessage || "empty!"}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-5">
                <img
                    src={arrowleft}
                    alt="previous"
                    width={50}
                    className={` ${currentPage === 1 ? "opacity-50" : ""}`}
                    onClick={handlePreviousPage}
                    style={{ cursor: "pointer" }}
                />
                <span className="fw-bold">{`Page ${currentPage} of ${totalPages}`}</span>
                <img
                    src={arrowright}
                    alt="next"
                    width={50}
                    className={`cursor-pointer ${currentPage === totalPages ? "opacity-50" : ""}`}
                    onClick={handleNextPage}
                    style={{ cursor: "pointer" }}
                />
            </div>
        </div>
    );
}

export default AllReviews;
