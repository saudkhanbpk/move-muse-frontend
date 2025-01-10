
// import EventDetails from "../../components/ProfileForm/EventDetails";
// import RecentKudosReviews from "../../components/Reviews/RecentKudosReviews";
// import ReviewsSection from "../../components/Reviews/ReviewsSection";
import AllReviews from "./AllReviews";
import "./reviews.css";
export default function ReviewsPage() {
  return (
    <main className="main-bg-color" >
      {/* <RecentKudosReviews /> */}
      {/* <EventDetails/> */}
      <div className="Revivewsection" >
        <AllReviews />
      </div>
    </main>
  );
}
