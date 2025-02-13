import MAndNHero from "./hero/MAndNHero";
import "./M&NPage.css";
import MAndFilter from "./MAndNFilter";
import PaginationButtons from "../../components/BlogPage/PaginationButtons";
import TopicCard from "./TopicCard";
import LineIcon from "../../img/icons/line-icon.svg";
import TopicDetail from "./TopicDetail";
import { useEffect, useRef, useState } from "react";
import ApiService from "../../services/ApiService";
import WriteIcon from "../../img/icons/mAndn-writting.svg";
import { Link } from "react-router-dom";

export default function MAndNPage() {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [blogsLength, setBlogsLength] = useState(0);
  const [blogId, setBlogId] = useState("");

  const handleTopics = (e) => {};
  const handleStyle = (e) => {};
  const handleRegularInput = (e) => {};
  const handlePopular = (e) => {};
  const handleDate = (e) => {};
  const handleChooseCategory = (e) => {};

  const getAllBlogsRef = useRef(() => {});

  getAllBlogsRef.current = async () => {
    const data = await ApiService.get("getApprovedBlogs");
    const allBlogs = data?.data?.data?.blogs || [];
    setBlogs(allBlogs);
    setBlogsLength(allBlogs.length);
    setBlogsLoading(false);
  };

  useEffect(() => {
    getAllBlogsRef.current();
  }, [getAllBlogsRef]);

  const visibleBlog = blogs.filter((blog) => blog?._id === blogId);

  return (
    <section className="">
      <MAndNHero />
      <MAndFilter
        handleChooseCategory={handleChooseCategory}
        handleDate={handleDate}
        handlePopular={handlePopular}
        handleRegularInput={handleRegularInput}
        handleStyle={handleStyle}
        handleTopics={handleTopics}
      />
      <div>
        <div className="container mt-5 py-5 " >
          <div className="d-flex justify-content-center">
            <div className="row g-3" >
              {!blogsLoading &&
                blogs.slice(page, page + 4).map((blog, index) => (
                  <div className="col-md-6" key={index}>
                    <TopicCard
                      blog={blog}
                      index={index}
                      setBlogId={setBlogId}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        <PaginationButtons
          page={page}
          setPage={setPage}
          dataLength={blogsLength}
        />
      </div>
      {/* line divider */}
      <div className="d-flex flex-column align-items-center justify-content-center px-1 px-sm-5 ">
        <div className="d-flex align-items-center w-100 gap-5 flex-column flex-md-row">
       <Link to='/articles'>   <img src={WriteIcon} alt="img" className="mt-5 mt-md-0" /></Link>
          <p className="p-md-0 p-3" style={{ color: "#545454", fontWeight: 600 }}>
            Would like to share your own dance musing? Click here to pick an
            existing or create a new topic!
          </p>
        </div>
        <img src={LineIcon} alt="line" className="img-fluid" />
      </div>
      {/* topic detail */}
      {/* <TopicDetail blog={visibleBlog[0]} /> */}
    </section>
  );
}
