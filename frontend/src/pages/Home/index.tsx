import { userContext } from "../../context/userContext";
import React from "react";
import "./Home.scss";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/Navbar";
import * as fontAwesomeIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

interface HomeProps {
  blogs: [];
}

export default function Home(props: HomeProps) {
  const blogs = props.blogs as [];

  const options = [
    { value: "following", label: "Following" },
    { value: "newest", label: "Newest" },
    { value: "mostPopular", label: "Most Popular" },
  ];

  return (
    <div className="HomePage">
      <div className="HomePage__left">
        <div className="HomePage__left--search">
          <div className="HomePage__left--search-input">
            <button>
              <FontAwesomeIcon
                icon={fontAwesomeIcons.faMagnifyingGlass}
                className="HomePage__left--search-input-icon"
                // color="bcbcbc"
              />
            </button>
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="HomePage__left--header">
          <h1>Articles</h1>
          <Select options={options} defaultValue={options[0]} />
        </div>
        <hr className="HomePage__left--divider" />
        <div className="HomePage__left--blogs">
          {blogs.map((blog: any) => {
            return (
              <>
                <BlogCard data={blog} />
                <hr className="HomePage__left--divider" />
              </>
            );
          })}
        </div>
      </div>
      <div className="HomePage__right">
        <div className="HomePage__right--interestedPeople">
          <h1>People you might be interested</h1>
          <div className="HomePage__right--profile">
            <div className="HomePage__right--profile-details">
              <img
                src="https://api.dicebear.com/6.x/bottts-neutral/svg?seed=thearyanthegr8"
                alt=""
              />
              <div className="HomePage__right--profile-text">
                <h1>Dummy Name</h1>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="HomePage__right--profile-follow">
              <button>
                <FontAwesomeIcon
                  icon={fontAwesomeIcons.faPlus}
                  className="HomePage__right--profile-icon"
                />
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="HomePage__divider" /> */}
      {/* <h1 className="HomePage__title">Featured on Chronicles</h1>
      <div className="HomePage__blogs">
        {blogs.map((blog: any) => {
          return <BlogCard data={blog} />;
        })}
      </div> */}
    </div>
  );
}
