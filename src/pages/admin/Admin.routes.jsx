import { Route, Routes } from "react-router-dom";
import AdminHeader from "./Navbar/AdminHeader";
import Reviews from "./reviews/Reviews";
import Festival from "./festival/Festival";
import Blog from "./blog/Blog";
import AdminHome from "./home/AdminHome";
import Kudos from "./kudos/Kudos";
import Users from "./users/Users";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route Component={AdminHeader}>
        <Route index Component={AdminHome} />
        <Route path="reviews" Component={Reviews} />
        <Route path="festivals" Component={Festival} />
        <Route path="kudos" Component={Kudos} />
        <Route path="users" Component={Users} />
        <Route path="blog" Component={Blog} />
        <Route path="dashboard" Component={AdminHome} />
      </Route>
    </Routes>
  );
}
