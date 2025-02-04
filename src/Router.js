import React, { useContext } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import AttendeesPage from "./pages/AttendeesPage/AttendeesPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import EventPage from "./pages/EventPage/EventPage";
import FestivalsPage from "./pages/FestivalsPage/FestivalsPage";
import MyAccountPage from "./pages/MyAccountPage/MyAccountPage";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./pages/LoginForm/LoginForm";
import Signup from "./pages/Signup/Signup";
import { ProtectedRoute } from "./ProtectedRoutes/ProtectedRoute";
import { UserContext } from "./context/UserContext";
import BlogDiscover from "./pages/BlogDiscover/BlogDiscover";
import Profile from "./pages/Profile/Profile";
import RecentKudosSection from "./components/RecentKudosSections/RecentKudosSections";
import ReviewsPage from "./pages/reviews/Reviews";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Article from "./pages/BlogPage/Article";
import MAndNPage from "./pages/M&NPage/M&NPage";
import CataloguePage from "./pages/CataloguePage/CataloguePage";
import CardsForFutureEvents from "./components/CardsForEvents/CardsForFutureEvents";
import EventDetails from "./components/ProfileForm/EventDetails";
import SingleFutureEvent from "./components/ProfileForm/SingleFutureEvent";
import SinglePastEvent from "./components/ProfileForm/SinglePastEvent";
import Notification from "./pages/NotificationPage/Notification";
import MyDances from "./pages/NotificationPage/MyDances/MyDances";
import ContactUs from "./components/ContactUs/ContactUs";
import AllTopics from "./components/MusingGuide/AllTopics";
import FavouriteEvents from "./components/ProfileForm/FavouriteEvents";
import TopicCardReadmore from "./pages/M&NPage/TopicCardReadmore";


const Router = () => {
  const { user, showAdditionalSignInInfo } = useContext(UserContext);

  const RedirectToHomeIfLoggedIn = ({ children }) => {
    return user && !showAdditionalSignInInfo ? (
      <Navigate to="/" replace />
    ) : (
      children
    );
  };
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/attendees" element={<AttendeesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events-card" element={<CardsForFutureEvents />} />
        <Route path="/event/:id" element={<SingleFutureEvent />} />
        <Route path="/past-event/:id" element={<SinglePastEvent />} />
        <Route path="/eventDetail" element={<EventDetails />} />
        <Route path="/myaccount" element={<MyAccountPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/blog-discover" element={<BlogDiscover />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/recent-kudos" Component={RecentKudosSection} />
        <Route path="/alltopics" Component={AllTopics} />
        <Route path="/privacy-policy" Component={PrivacyPolicy} />
        <Route path="/events/:id" Component={EventPage} />
        <Route path="/articles" Component={Article} />
        <Route path="/blogs" Component={MAndNPage} />
        <Route path="/myprofile" Component={MyDances} />
        <Route path="/m&m/catalogue" Component={CataloguePage} />
        <Route path="/favoriteevents" Component={FavouriteEvents} />
        <Route path="/topicCardreadmore/:id" element={<TopicCardReadmore />} />
        
        <Route
          path="/profile"
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <RedirectToHomeIfLoggedIn>
              <LoginForm />
            </RedirectToHomeIfLoggedIn>
          }
        />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <ContactUs />
    </>
  );
};

export default Router;
