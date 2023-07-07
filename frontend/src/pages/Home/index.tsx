import { userContext } from "../../context/userContext";
import React from "react";
import "./Home.scss";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/Navbar";

interface HomeProps {
  blogs: [];
}

export default function Home(props: HomeProps) {
  const blogs = props.blogs as [];

  return (
    <div className="HomePage">
      {/* <hr className="HomePage__divider" /> */}
      <h1 className="HomePage__title">Featured on Chronicles</h1>
      <div className="HomePage__blogs">
        {blogs.map((blog: any) => {
          return <BlogCard data={blog} />;
        })}
      </div>
    </div>
  );
}
